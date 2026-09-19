# Render `{"show":false,"label":"a"}`
```html
<main>
  <section />
</main>
```

# Update `{"show":true,"label":"b"}`
```html
<main>
  <section>
    <p
      class="child"
    >
      b
    </p>
  </section>
</main>
```
## Change
```
INSERT: main > section > .child
UPDATE: .child::text " " => "b"
```

# Update `{"show":false,"label":"b"}`
```html
<main>
  <section />
</main>
```
## Change
```
REMOVE: main > section > p
```

# Update `{"show":true,"label":"c"}`
```html
<main>
  <section>
    <p
      class="child"
    >
      c
    </p>
  </section>
</main>
```
## Change
```
INSERT: main > section > .child
UPDATE: .child::text " " => "c"
```
