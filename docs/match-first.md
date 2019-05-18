---
id: match-first
title: First occurrence
---

Matching a first occurrence in a string is the most common use-case.

## Return from `first()`

You can get the first occurrence of a pattern in a subject by calling `first()`.

<!--DOCUSAURUS_CODE_TABS-->
<!--T-Regx-->
```php
pattern('[0-9]+')->match("I'm 19 years old")->first();
```
<!--PHP-->
```php
if (preg::match('/[0-9]+/', "I'm 19 years old", $match)) {
    return $match[0];
}
throw new SubjectNotMatchedException();
```
<!--END_DOCUSAURUS_CODE_TABS-->

```php
'19'
```

If a match is **not found** in a subject, `SubjectNotMatchedException` is thrown. This is done to relieve you from the 
[**brain strain**](overview.md#brain-strain). It's much easier to develop an application and *just assume* that this 
method **has** to return a value and go on. No more bothers about empty arrays and empty strings, or a possible
`null`/`false` hiding somewhere.

> If you would like to control the subject that **isn't matched** with your pattern though; 
> you can do it **explicitly** with [`forFirst()`](#forfirst) (and `orReturn()`, `orElse()`, `orThrow()`).

## Use `first()` with callback

You can call an anonymous function for the first matched occurrence. In this example, we'll print the matched text to the 
standard output.

<!--DOCUSAURUS_CODE_TABS-->
<!--T-Regx-->
```php
pattern('\w+')->match("Apples are cool")->first(function (string $match) {
    echo 'I matched ' . $match;
});
```
<!--PHP-->
```php
if (preg::match('/\w+/', "Apples are cool", $match)) {
    echo 'I matched ' . $match[0];
    return null;
}
throw new SubjectNotMatchedException();
```
<!--END_DOCUSAURUS_CODE_TABS-->

```text
I matched Apples
```

> Casting `Match` to a string is the same as calling a `text()` method.

### Match details

With `Match` details, you can gain access to useful information about the matched occurrence. 

<!--DOCUSAURUS_CODE_TABS-->
<!--T-Regx-->
```php
pattern('\w+')->match("Apples are cool")->first(function (Match $match) {
    $subject = $match->subject();
    echo "Match '$match' was matched inside '$subject'.";
});
```
<!--PHP-->
```php
$subject = "Apples are cool";
if (preg::match('/\w+/', $subject, $match)) {
    $text = $match[0];
    echo "Match '$text' was matched inside '$subject'.";
    return null;
}
throw new SubjectNotMatchedException();
```
<!--END_DOCUSAURUS_CODE_TABS-->

```text
Match 'Apples' was matched inside 'Apples are cool'.
```

You can learn more about `Match` on [Advanced details](match-details.md) page.

### Groups in match

Retrieving capturing groups from a match is really simple.

```php
pattern('(?<capital>[A-Z])[a-z]+')->match('hello there, General Kenobi')->first(Match $match) {
    $capital = $match->group('capital')->text();
    
    return $capital;
});
```
```php
'G'
```

Of course, `first()` callback will only be invoked if your pattern matches the subject.

> You can learn more about groups on [Capturing Group](match-groups.md) page. 

> Even more, you can visit [Inline groups](match-group.md) and use familiar `all()`, `first()`, `only()` and `offsets()` 
> methods on groups. 

### Return value

It's also possible to return your custom value from within `first()` callback. This custom value will be then returned 
from `first()` function.

```php
pattern('\w+')->match("Apples are cool")->first(function (Match $match) {
    return [
        $match->text(), 
        strtoupper($match->text()),
        lcfirst($match->text())
    ];
});
```
```php
['Apples', 'APPLES', 'apples']
```

### Variable callbacks

You can call `first()` for any valid PHP `callable` which accepts one string parameter (or no parameters).

```php
return pattern('\w+')->match("Apples are cool")->first('strtoupper');
```
```php
'APPLES'
```

In this example `Match` will be cast to string, which is the same as calling `Match.text()` method.

> Of course, `strtoupper` (or any other callback) is only invoked **if** your subject is matched with the pattern.

### Arbitrary return types

From within `first()` callback, you can return any value:

```php
return pattern('\w+')->match("Apples are cool")->first('str_split');
```
```php
['A', 'p', 'p', 'l', 'e', 's']
```

The `first()` callback accepts all return types, including: numbers, objects, arrays, booleans and `null`:

```php
$p = '(?<value>\d+)(?<unit>cm|mm)';
$s = '192mm and 168cm or 18mm and 12cm';

pattern($p)->match($s)->first();                 // '192mm'
pattern($p)->match($s)->first('str_split');      // ['1', '9', '2', 'm', 'm']
pattern($p)->match($s)->first('strlen')          // 5
```

## `forFirst()`

This method allows you to explicitly specify how to handle an unmatched subject. Just chain `forFirst()` with
one of the following `orReturn()`, `orElse()` or `orThrow()`.

```php
$func = function (Match $match) {
    return "Yay $match";
};

echo pattern('\w+')->match('Dog')->forFirst($func)->orReturn('Aw, man :/');
```
```text
Yay Dog
```

---

Read on to learn more about [`forFirst()`](match-for-first.md).