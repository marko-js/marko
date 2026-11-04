# Render `{"label":"a","prefix":"x"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:x0
</p>
```

# Update
```js
document.querySelector("button.open").click();
```
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:x1
</p>
```
## Change
```
UPDATE: p::text@2 "x0" => "x1"
```
