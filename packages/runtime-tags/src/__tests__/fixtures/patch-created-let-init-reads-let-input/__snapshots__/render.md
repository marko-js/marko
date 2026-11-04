# Render `{"show":false,"a":"a"}`

# Update `{"show":true,"a":"b"}`
```html
<span
  data-y="1b"
/>
<button>
  1
</button>
```
## Change
```
INSERT: span
INSERT: span + button
UPDATE: span[data-y] null => "1b"
```

# Update
```js
d.querySelector("button").click();
```
```html
<span
  data-y="1b"
  title="1b"
/>
<button>
  2
</button>
```
## Change
```
UPDATE: span[title] null => "1b"
UPDATE: button::text "1" => "2"
```

# Update `{"show":true,"a":"c"}`
