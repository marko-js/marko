# Render `{"on":false,"n":1,"w":"a"}`

# Update `{"on":true,"n":1,"w":"b"}`
```html
<button>
  1
</button>
```
## Change
```
INSERT: button
UPDATE: button::text " " => "1"
```

# Update `{"on":true,"n":1,"w":"c"}`

# Update
```js
d.querySelector("button")?.click();
```
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```
