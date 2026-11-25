# Render
```html
<div
  class=""
/>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="x a b c d"
/>
<button />
```
## Change
```
UPDATE: .x.a.b.c.d[class] "" => "x a b c d"
UPDATE: .x.a.b.c.d[class] "x a b c" => "x a b c d"
UPDATE: .x.a.b.c.d[class] "x a b" => "x a b c d"
UPDATE: .x.a.b.c.d[class] "x a" => "x a b c d"
UPDATE: .x.a.b.c.d[class] "x" => "x a b c d"
```
