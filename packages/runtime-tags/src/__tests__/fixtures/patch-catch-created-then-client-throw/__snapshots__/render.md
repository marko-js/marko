# Render `{"items":[{"id":"a"},{"id":"b"}]}`
```html
<button>
  a
</button>
<button>
  b
</button>
```

# Update `{"items":[{"id":"a","fail":true},{"id":"b"}]}`
```html
<b>
  boom
</b>
<button>
  b
</button>
```
## Change
```
INSERT: b
REMOVE: b + button
UPDATE: b::text " " => "boom"
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
