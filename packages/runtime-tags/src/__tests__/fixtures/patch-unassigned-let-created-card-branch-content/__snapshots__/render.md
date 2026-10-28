# Render `{"on":false,"n":1,"w":"a"}`
```html
<main>
  <div
    n="1"
    w="a"
  />
</main>
```

# Update `{"on":true,"n":1,"w":"b"}`
```html
<main>
  <div>
    <b>
      1
    </b>
     
    <i>
      b
    </i>
  </div>
  <em>
    b
  </em>
</main>
```
## Change
```
REMOVE: main > em + div
INSERT: main > :is(div, em)
UPDATE: main > em::text " " => "b"
UPDATE: main > div > b::text " " => "1"
UPDATE: main > div > i::text " " => "b"
```

# Update `{"on":true,"n":1,"w":"c"}`
```html
<main>
  <div>
    <b>
      1
    </b>
     
    <i>
      c
    </i>
  </div>
  <em>
    c
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "b" => "c"
UPDATE: main > div > i::text "b" => "c"
```
