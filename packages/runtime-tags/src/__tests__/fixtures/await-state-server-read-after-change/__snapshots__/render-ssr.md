# Render `{"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:0
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
  a:1
</p>
```
## Change
```
UPDATE: p::text@2 "0" => "1"
```
