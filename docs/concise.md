# Concise syntax

Marko's concise syntax is very similar to the HTML syntax, except it's more... concise.  Essentially, you take an HTML tag, remove the angle brackets (`<>`) and use indentation rather than a closing tag:

_input.marko_
```marko
div class="thumbnail"
    img src="https://example.com/thumb.png"
```

_output.html_
```html
<div class="thumbnail">
    <img src="https://example.com/thumb.png"/>
</div>
```

## Shorthand attributes

Marko provides a shorthand for declaring classes and ids on an element:

_input.marko_
```marko
div.my-class
span#my-id
button#submit.primary.large
```

Yields this HTML:

_output.html_
```html
<div class="my-class"></div>
<span id="my-id"></span>
<button id="submit" class="primary large"></button>
```

> **ProTip:** These shorthand attributes are available within the HTML syntax as well

## Text

Text in concise mode is denoted by two or more dashes (`--`).  

If there is text on the same line following `--`, it is single-line text:

_single-line-text.marko_
```marko
-- Hello world
```

The dashes can also follow an element to give it a single text node as a child

_single-line-text.marko_
```marko
div -- Hello world
```

If there is a line break immediately following `--`, everything following the `--` at the current indentation is parsed as multi-line line text.

_multi-line-text.marko_
```marko
div
    --
    Hello world
    this text
    is multi-line

div
    --
    this is more
    text
```

A multi-line text block can be ended by the same number of dashes that opened it.  This allows it to  have siblings:

_multi-line-text.marko_
```marko
div
    img src="https://example.com/photo.png"
    --
    Hello world
    this text
    is multi-line
    --
    span -- text after
```

### Root level text

There is one "gotcha" that you need to be aware of. The Marko parser starts out in the concise mode. Therefore, given the following template:

_input.marko_
```marko
Hello World
Welcome to Marko
```

The output would be the following:

_output.html_
```html
<Hello World></Hello>
<Welcome to Marko></Welcome>
```

Instead, prefix the lines with `--` so they are parsed as text:

_input.marko_
```marko
-- Hello World
-- Welcome to Marko
```