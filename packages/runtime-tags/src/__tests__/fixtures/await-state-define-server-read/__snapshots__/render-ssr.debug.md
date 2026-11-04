# Render `{"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
<em>
  a:0
</em>
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
<em>
  a:1
</em>
```
## Change
```
UPDATE: em::text@2 "0" => "1"
```
