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
INSERT: span
INSERT: span + button
UPDATE: button::text " " => "1b"
UPDATE: span[data-y] null => "1"
```

# Update
```js
d.querySelector("button").click();
```
```html
<span
  data-y="2"
>
  b
</span>
<button>
  1b
</button>
```
## Change
```
UPDATE: span[data-y] "1" => "2"
```

# Update `{"show":true,"a":"c"}`
```html
<span
  data-y="2"
>
  c
</span>
<button>
  1c
</button>
```
## Change
```
UPDATE: span::text "b" => "c"
UPDATE: button::text "1b" => "1c"
```
