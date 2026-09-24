# Render
```html
<button
  class="toggle"
>
  toggle
</button>
<div
  class="a"
>
  One 0
</div>
<button
  class="inc"
>
  +
</button>
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="inc"
>
  +
</button>
```
## Change
```
REMOVE: .toggle + div
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<div
  class="a"
>
  One 0
</div>
<button
  class="inc"
>
  +
</button>
```
## Change
```
INSERT: .toggle + .a
UPDATE: .a[class] null => "a"
INSERT: .a > :is(::text("One "), ::text("0"))
UPDATE: .a::text@4 "" => "0"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<div
  class="a"
>
  One 1
</div>
<button
  class="inc"
>
  +
</button>
```
## Change
```
UPDATE: .a::text@4 "0" => "1"
```
