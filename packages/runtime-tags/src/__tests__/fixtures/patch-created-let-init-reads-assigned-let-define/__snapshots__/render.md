# Render `{"show":false,"a":"a"}`

# Update `{"show":true,"a":"b"}`
```html
<span>
  1w
</span>
<p>
  b
</p>
<button>
  1b
</button>
```
## Change
```
INSERT: span, p, button
UPDATE: button::text " " => "1b"
```

# Update
```js
d.querySelector("button").click();
```
```html
<span>
  1w
</span>
<p>
  b
</p>
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
  1w
</span>
<p>
  c
</p>
<button>
  2c
</button>
```
## Change
```
UPDATE: p::text "b" => "c"
UPDATE: button::text "2b" => "2c"
```
