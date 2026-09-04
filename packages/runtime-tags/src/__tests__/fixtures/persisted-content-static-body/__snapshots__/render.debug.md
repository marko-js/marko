# Render `{"show":false,"title":"a"}`
```html
<main />
```

# Update `{"show":true,"title":"b"}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <em>
      static body
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > section
UPDATE: main > section > h2::text " " => "b"
INSERT: main > section > h2 + em
```

# Update `{"show":true,"title":"c"}`
```html
<main>
  <section>
    <h2>
      c
    </h2>
    <em>
      static body
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "b" => "c"
```
