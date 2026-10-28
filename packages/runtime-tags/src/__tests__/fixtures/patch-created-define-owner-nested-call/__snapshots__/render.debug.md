# Render `{"on":false,"n":1,"w":"a"}`

# Update `{"on":true,"n":1,"w":"b"}`
```html
<div>
  <p>
    b
  </p>
</div>
<button>
  x
</button>
```
## Change
```
INSERT: div, button
INSERT: div > p
UPDATE: div > p::text " " => "b"
```

# Update `{"on":true,"n":1,"w":"c"}`
```html
<div>
  <p>
    c
  </p>
</div>
<button>
  x
</button>
```
## Change
```
UPDATE: div > p::text "b" => "c"
```
