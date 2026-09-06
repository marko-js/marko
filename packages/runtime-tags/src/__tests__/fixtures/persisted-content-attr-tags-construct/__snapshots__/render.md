# Render `{"show":false,"title":"a"}`
```html
<main />
```

# Update `{"show":true,"title":"b"}`
```html
<main>
  <section>
    <header>
      <b>
        static header
      </b>
    </header>
    <h2>
      b
    </h2>
    body
  </section>
</main>
```
## Change
```
INSERT: main > section
INSERT: main > section > header > b
UPDATE: main > section > h2::text " " => "b"
INSERT: main > section > h2 + ::text("body")
```

# Update `{"show":true,"title":"c"}`
```html
<main>
  <section>
    <header>
      <b>
        static header
      </b>
    </header>
    <h2>
      c
    </h2>
    body
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "b" => "c"
```
