# Render `{"items":[{"id":"a","fail":true},{"id":"b"}]}`
```html
<b>
  boom
</b>
<button>
  b
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<b>
  boom
</b>
<b>
  boom
</b>
```
## Change
```
INSERT: b:nth-of-type(1) + b
REMOVE: b:nth-of-type(2) + button
UPDATE: b:nth-of-type(2)::text " " => "boom"
```
