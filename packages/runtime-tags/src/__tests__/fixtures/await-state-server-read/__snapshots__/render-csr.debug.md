# Render `{"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
```

# Update `{"label":"b"}`

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
INSERT: .open + p
UPDATE: p::text@2 "" => "1"
UPDATE: p::text@2 "0" => "1"
UPDATE: p::text@0 "" => "b"
```
