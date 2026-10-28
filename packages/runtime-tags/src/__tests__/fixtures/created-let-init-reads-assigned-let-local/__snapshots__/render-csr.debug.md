# Render `{"show":false,"a":"a"}`

# Update `{"show":true,"a":"b"}`
```html
<span
  data-y="1"
>
  b
</span>
<button>
  1b
</button>
```
## Change
```
INSERT: span, button
UPDATE: span::text " " => "b"
UPDATE: button::text " " => "1b"
UPDATE: span[data-y] null => "1"
```

# Update
```js
d.querySelector("button").click();
```
```html
<span
  data-y="1"
>
  b
</span>
<button>
  3b
</button>
```
## Change
```
UPDATE: button::text "1b" => "3b"
```

# Update `{"show":true,"a":"c"}`
```html
<span
  data-y="1"
>
  c
</span>
<button>
  3c
</button>
```
## Change
```
UPDATE: span::text "b" => "c"
UPDATE: button::text "3b" => "3c"
```
