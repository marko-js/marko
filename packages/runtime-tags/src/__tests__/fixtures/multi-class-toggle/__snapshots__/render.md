# Render
```html
<button
  class="a b c"
>
  0
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button
  class="a b c d e f"
>
  1
</button>
```
## Change
```
UPDATE: .a.b.c.d.e.f[class] "a b c" => "a b c d e f"
UPDATE: .a.b.c.d.e.f::text "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button
  class="a b c"
>
  2
</button>
```
## Change
```
UPDATE: .a.b.c[class] "a b c d e f" => "a b c"
UPDATE: .a.b.c::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button
  class="a b c d e f"
>
  3
</button>
```
## Change
```
UPDATE: .a.b.c.d.e.f[class] "a b c" => "a b c d e f"
UPDATE: .a.b.c.d.e.f::text "2" => "3"
```
