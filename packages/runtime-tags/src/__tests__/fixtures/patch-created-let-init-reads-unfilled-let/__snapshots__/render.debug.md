# Render `{"show":false}`

# Update `{"show":true}`
```html
<span
  data-y="1"
>
  1
</span>
<button>
  go
</button>
```
## Change
```
INSERT: span
INSERT: span + button
UPDATE: span[data-y] null => "1"
```

# Update
```js
d.querySelector("button").click();
```
```html
<span
  data-y="1"
  title="1"
>
  1
</span>
<button>
  go
</button>
```
## Change
```
UPDATE: span[title] null => "1"
```
