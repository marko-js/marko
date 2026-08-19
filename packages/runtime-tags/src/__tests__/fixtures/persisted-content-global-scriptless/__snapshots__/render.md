# Render `{"title":"a","show":false,"$global":{"brand":"Acme","serializedGlobals":["brand"]}}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <em>
      Acme
    </em>
  </section>
</main>
```

# Update `{"title":"b","show":true,"$global":{"brand":"Zed","serializedGlobals":["brand"]}}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <em>
      Zed
    </em>
  </section>
  <section>
    <h2>
      x
    </h2>
    <i>
      Zed
    </i>
  </section>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > h2::text "a" => "b"
UPDATE: main > section:nth-of-type(1) > em::text "Acme" => "Zed"
INSERT: main > section:nth-of-type(1) + section
UPDATE: main > section:nth-of-type(2) > h2::text " " => "x"
INSERT: main > section:nth-of-type(2) > h2 + i
UPDATE: main > section:nth-of-type(2) > i::text " " => "Zed"
```

# Update `{"title":"c","show":true,"$global":{"brand":"Zed","serializedGlobals":["brand"]}}`
```html
<main>
  <section>
    <h2>
      c
    </h2>
    <em>
      Zed
    </em>
  </section>
  <section>
    <h2>
      x
    </h2>
    <i>
      Zed
    </i>
  </section>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > h2::text "b" => "c"
UPDATE: main > section:nth-of-type(1) > em::text "Zed" => "Zed"
UPDATE: main > section:nth-of-type(2) > h2::text "x" => "x"
UPDATE: main > section:nth-of-type(2) > i::text "Zed" => "Zed"
```

# Update `{"title":"d","show":true,"$global":{"brand":"Qux","serializedGlobals":["brand"]}}`
```html
<main>
  <section>
    <h2>
      d
    </h2>
    <em>
      Qux
    </em>
  </section>
  <section>
    <h2>
      x
    </h2>
    <i>
      Qux
    </i>
  </section>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > h2::text "c" => "d"
UPDATE: main > section:nth-of-type(1) > em::text "Zed" => "Qux"
UPDATE: main > section:nth-of-type(2) > h2::text "x" => "x"
UPDATE: main > section:nth-of-type(2) > i::text "Zed" => "Qux"
```
