# Render `{"show":false}`

# Update `{"show":true}`
```html
<span
  data-z="1"
/>
<button>
  1
</button>
```
## Change
```
INSERT: span
INSERT: span + button
UPDATE: span[data-z] null => "1"
```

# Update
```js
d.querySelector("button").click();
```
```html
<span
  data-z="1"
  title="1"
/>
<button>
  2
</button>
```
## Change
```
UPDATE: span[title] null => "1"
UPDATE: button::text "1" => "2"
```
