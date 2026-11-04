# Render `{"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
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
INSERT: .open + p
UPDATE: p::text@2 "" => "1"
UPDATE: p::text@2 "0" => "1"
UPDATE: p::text@0 "" => "a"
```

# Update `{"label":"b"}`
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
UPDATE: p::text@0 "a" => "b"
```
