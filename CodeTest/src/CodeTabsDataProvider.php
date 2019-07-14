<?php
namespace CodeTest;

use CodeTest\Parser\MarkdownSnippetParser;
use CodeTest\Parser\Snippet\CodeTabSnippetBuilder;
use CodeTest\Parser\Snippet\SnippetsStore;

class CodeTabsDataProvider
{
    /** @var string */
    private $basePath;

    public function __construct(string $basePath)
    {
        $this->basePath = $basePath;
    }

    public function getSnippets(): array
    {
        $files = $this->filesInDirectory($this->basePath);
        $snippetsArray = array_map(function (string $filename) {
            return $this->flatMapSnippetsFromFile($filename);
        }, $files);
        return array_merge(...array_filter($snippetsArray));
    }

    private function filesInDirectory(string $path): array
    {
        return array_map(function (string $filename) use ($path) {
            return $path . $filename;
        }, array_values(array_diff(scandir($path), ['.', '..'])));
    }

    private function flatMapSnippetsFromFile(string $filename): ?array
    {
        $content = file_get_contents($filename);
        $snippets = $this->parse($filename, $content);
        if ($snippets === null) {
            return null;
        }
        return $this->formatKeys($filename, $snippets);
    }

    private function parse(string $filename, string $content): array
    {
        $store = new SnippetsStore();
        (new MarkdownSnippetParser($filename, new CodeTabSnippetBuilder($store)))->parse($content);
        return $store->snippets();
    }

    private function formatKeys(string $filename, array $snippets): array
    {
        return array_combine($this->array(basename($filename), count($snippets)), $snippets);
    }

    private function array(string $value, int $count): array
    {
        $result = [];
        for ($i = 0; $i < $count; $i++) {
            $result[] = $value . " #$i";
        }
        return $result;
    }
}
