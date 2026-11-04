# Render `{"show":false,"$global":{"n":5,"serializedGlobals":["n"]}}`

# Update `{"show":true,"$global":{"n":5,"serializedGlobals":["n"]}}`
```html
<span
  data-y="6"
/>
<button>
  1
</button>
```
## Change
```
INSERT: span
INSERT: span + button
UPDATE: span[data-y] null => "6"
```

# Update
```js
d.querySelector("button").click();
```
```html
<span
  data-y="6"
  title="6"
/>
<button>
  2
</button>
```
## Change
```
UPDATE: span[title] null => "6"
UPDATE: button::text "1" => "2"
```
