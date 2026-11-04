# Render `{"label":"a","value":2}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:0
</p>
<p>
  a:2
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
<p>
  a:2
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "0" => "1"
```
