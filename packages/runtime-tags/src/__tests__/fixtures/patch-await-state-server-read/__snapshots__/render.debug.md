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

# Update `{"label":"b"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  b:0
</p>
```
## Change
```
UPDATE: p::text@0 "a" => "b"
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
  b:1
</p>
```
## Change
```
UPDATE: p::text@2 "0" => "1"
```
