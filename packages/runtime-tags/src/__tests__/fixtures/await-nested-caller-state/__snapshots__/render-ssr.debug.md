# Render `{"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:0:10
</p>
```

# Update
```js
document.querySelector("button.open").click();
```

# Update
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:1:11
</p>
```
## Change
```
UPDATE: p::text@4 "10" => "11"
UPDATE: p::text@2 "0" => "1"
```
