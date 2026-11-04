# Render `{"show":false,"a":"a"}`

# Update `{"show":true,"a":"b"}`
```html
<span>
  1
</span>
<em>
  b
</em>
<button>
  1b
</button>
```
## Change
```
INSERT: span, em, button
UPDATE: button::text " " => "1b"
UPDATE: em::text " " => "b"
```

# Update
```js
d.querySelector("button").click();
```
```html
<span>
  1
</span>
<em>
  b
</em>
<button>
  2b
</button>
```
## Change
```
UPDATE: button::text "1b" => "2b"
```

# Update `{"show":true,"a":"c"}`
```html
<span>
  1
</span>
<em>
  c
</em>
<button>
  2c
</button>
```
## Change
```
UPDATE: button::text "2b" => "2c"
UPDATE: em::text "b" => "c"
```
