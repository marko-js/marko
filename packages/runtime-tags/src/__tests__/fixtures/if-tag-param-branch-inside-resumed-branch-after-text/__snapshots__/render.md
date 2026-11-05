# Render `{"b":true}`
```html
<p>
  Count: 0
</p>
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<p>
  Count: 1
</p>
<button
  id="inc"
>
  inc
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: p::text@7 "0" => "1"
```
