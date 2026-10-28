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
  <section>
    <h3>
      Branch heading
    </h3>
    <p>
      Static paragraph text that only the branch renders.
    </p>
  </section>
  <b>
    1
  </b>
   
  <i>
    b
  </i>
  <em>
    b
  </em>
</main>
```
## Change
```
REMOVE: main > em + div
INSERT: main > :is(section, b, ::text(" "), i, em)
UPDATE: main > i::text " " => "b"
UPDATE: main > em::text " " => "b"
UPDATE: main > b::text " " => "1"
```

# Update `{"on":true,"n":0,"w":"c"}`
```html
<main>
  <section>
    <h3>
      Branch heading
    </h3>
    <p>
      Static paragraph text that only the branch renders.
    </p>
  </section>
  <b>
    1
  </b>
   
  <i>
    c
  </i>
  <em>
    c
  </em>
</main>
```
## Change
```
UPDATE: main > i::text "b" => "c"
UPDATE: main > em::text "b" => "c"
```
