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
  </div>
  <section>
    <h3>
      Branch heading
    </h3>
    <p>
      Static paragraph text that only the branch renders.
    </p>
  </section>
  <em>
    b
  </em>
</main>
```
## Change
```
INSERT: main > div
REMOVE: main > em + div
INSERT: main > div > b
INSERT: main > div + :is(section, em)
UPDATE: main > div > b::text " " => "1"
UPDATE: main > em::text " " => "b"
```

# Update `{"on":true,"n":0,"w":"c"}`
```html
<main>
  <div>
    <b>
      1
    </b>
  </div>
  <section>
    <h3>
      Branch heading
    </h3>
    <p>
      Static paragraph text that only the branch renders.
    </p>
  </section>
  <em>
    c
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "b" => "c"
```
