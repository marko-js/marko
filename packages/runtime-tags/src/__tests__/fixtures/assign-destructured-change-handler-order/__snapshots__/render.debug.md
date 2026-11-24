# Render
```html
<button
  class="a"
>
  a function
</button>
<button
  class="b"
>
  b function
</button>
<button
  class="c"
>
  a function
</button>
<button
  class="d"
>
  b function
</button>
<button
  class="e"
>
  a function b,bChange
</button>
<button
  class="first"
>
  w function
</button>
<button
  class="last"
>
  x function
</button>
<button
  class="first-renamed"
>
  y function
</button>
<button
  class="last-renamed"
>
  z function
</button>
<div>
  w x y z
</div>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  a! function
</button>
<button
  class="b"
>
  b function
</button>
<button
  class="c"
>
  a function
</button>
<button
  class="d"
>
  b function
</button>
<button
  class="e"
>
  a function b,bChange
</button>
<button
  class="first"
>
  w function
</button>
<button
  class="last"
>
  x function
</button>
<button
  class="first-renamed"
>
  y function
</button>
<button
  class="last-renamed"
>
  z function
</button>
<div>
  w x y z
</div>
```
## Change
```
UPDATE: .a::text@0 "a" => "a!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  a! function
</button>
<button
  class="b"
>
  b! function
</button>
<button
  class="c"
>
  a function
</button>
<button
  class="d"
>
  b function
</button>
<button
  class="e"
>
  a function b,bChange
</button>
<button
  class="first"
>
  w function
</button>
<button
  class="last"
>
  x function
</button>
<button
  class="first-renamed"
>
  y function
</button>
<button
  class="last-renamed"
>
  z function
</button>
<div>
  w x y z
</div>
```
## Change
```
UPDATE: .b::text@0 "b" => "b!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  a! function
</button>
<button
  class="b"
>
  b! function
</button>
<button
  class="c"
>
  a! function
</button>
<button
  class="d"
>
  b function
</button>
<button
  class="e"
>
  a function b,bChange
</button>
<button
  class="first"
>
  w function
</button>
<button
  class="last"
>
  x function
</button>
<button
  class="first-renamed"
>
  y function
</button>
<button
  class="last-renamed"
>
  z function
</button>
<div>
  w x y z
</div>
```
## Change
```
UPDATE: .c::text@0 "a" => "a!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  a! function
</button>
<button
  class="b"
>
  b! function
</button>
<button
  class="c"
>
  a! function
</button>
<button
  class="d"
>
  b! function
</button>
<button
  class="e"
>
  a function b,bChange
</button>
<button
  class="first"
>
  w function
</button>
<button
  class="last"
>
  x function
</button>
<button
  class="first-renamed"
>
  y function
</button>
<button
  class="last-renamed"
>
  z function
</button>
<div>
  w x y z
</div>
```
## Change
```
UPDATE: .d::text@0 "b" => "b!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  a! function
</button>
<button
  class="b"
>
  b! function
</button>
<button
  class="c"
>
  a! function
</button>
<button
  class="d"
>
  b! function
</button>
<button
  class="e"
>
  a! function b,bChange
</button>
<button
  class="first"
>
  w function
</button>
<button
  class="last"
>
  x function
</button>
<button
  class="first-renamed"
>
  y function
</button>
<button
  class="last-renamed"
>
  z function
</button>
<div>
  w x y z
</div>
```
## Change
```
UPDATE: .e::text@0 "a" => "a!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  a! function
</button>
<button
  class="b"
>
  b! function
</button>
<button
  class="c"
>
  a! function
</button>
<button
  class="d"
>
  b! function
</button>
<button
  class="e"
>
  a! function b,bChange
</button>
<button
  class="first"
>
  w? function
</button>
<button
  class="last"
>
  x function
</button>
<button
  class="first-renamed"
>
  y function
</button>
<button
  class="last-renamed"
>
  z function
</button>
<div>
  w? x y z
</div>
```
## Change
```
UPDATE: .first::text@0 "w" => "w?"
UPDATE: div::text@0 "w" => "w?"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  a! function
</button>
<button
  class="b"
>
  b! function
</button>
<button
  class="c"
>
  a! function
</button>
<button
  class="d"
>
  b! function
</button>
<button
  class="e"
>
  a! function b,bChange
</button>
<button
  class="first"
>
  w? function
</button>
<button
  class="last"
>
  x? function
</button>
<button
  class="first-renamed"
>
  y function
</button>
<button
  class="last-renamed"
>
  z function
</button>
<div>
  w? x? y z
</div>
```
## Change
```
UPDATE: .last::text@0 "x" => "x?"
UPDATE: div::text@3 "x" => "x?"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  a! function
</button>
<button
  class="b"
>
  b! function
</button>
<button
  class="c"
>
  a! function
</button>
<button
  class="d"
>
  b! function
</button>
<button
  class="e"
>
  a! function b,bChange
</button>
<button
  class="first"
>
  w? function
</button>
<button
  class="last"
>
  x? function
</button>
<button
  class="first-renamed"
>
  y? function
</button>
<button
  class="last-renamed"
>
  z function
</button>
<div>
  w? x? y? z
</div>
```
## Change
```
UPDATE: .first-renamed::text@0 "y" => "y?"
UPDATE: div::text@6 "y" => "y?"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="a"
>
  a! function
</button>
<button
  class="b"
>
  b! function
</button>
<button
  class="c"
>
  a! function
</button>
<button
  class="d"
>
  b! function
</button>
<button
  class="e"
>
  a! function b,bChange
</button>
<button
  class="first"
>
  w? function
</button>
<button
  class="last"
>
  x? function
</button>
<button
  class="first-renamed"
>
  y? function
</button>
<button
  class="last-renamed"
>
  z? function
</button>
<div>
  w? x? y? z?
</div>
```
## Change
```
UPDATE: .last-renamed::text@0 "z" => "z?"
UPDATE: div::text@9 "z" => "z?"
```
