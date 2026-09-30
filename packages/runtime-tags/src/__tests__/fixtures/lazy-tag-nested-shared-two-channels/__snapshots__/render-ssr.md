# Render
```html
<button
  class="a"
>
  a:0
</button>
<button
  class="b"
>
  b:0
</button>
<button
  class="c"
>
  c:0
</button>
```

# Update
```js
document.querySelector(`.${name}`).click();
```
```html
<button
  class="a"
>
  a:1
</button>
<button
  class="b"
>
  b:0
</button>
<button
  class="c"
>
  c:0
</button>
```
## Change
```
UPDATE: .a::text@2 "0" => "1"
```

# Update
```js
document.querySelector(`.${name}`).click();
```
```html
<button
  class="a"
>
  a:1
</button>
<button
  class="b"
>
  b:1
</button>
<button
  class="c"
>
  c:0
</button>
```
## Change
```
UPDATE: .b::text@2 "0" => "1"
```

# Update
```js
document.querySelector(`.${name}`).click();
```
```html
<button
  class="a"
>
  a:1
</button>
<button
  class="b"
>
  b:1
</button>
<button
  class="c"
>
  c:2
</button>
```
## Change
```
UPDATE: .c::text@2 "0" => "2"
```
