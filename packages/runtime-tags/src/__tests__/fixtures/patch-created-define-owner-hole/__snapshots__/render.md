# Render `{"on":false,"n":1,"w":"a"}`

# Update `{"on":true,"n":1,"w":"b"}`
```html
<p>
  1
</p>
<button>
  x
</button>
```
## Change
```
INSERT: p, button
UPDATE: p::text " " => "1"
```

# Update `{"on":true,"n":1,"w":"c"}`

# Update
```js
d.querySelector("button")?.click();
```
```html
<p>
  2
</p>
<button>
  x
</button>
```
## Change
```
UPDATE: p::text "1" => "2"
```
