# Render `{"title":"a","show":false}`

# Update `{"title":"b","show":true}`
```html
<p>
  0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
```
## Change
```
INSERT: p, span, button
UPDATE: span::text@5 "" => "0"
UPDATE: p::text " " => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0" => "1"
```
