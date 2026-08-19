# Render `{"kind":"a"}`
```html
<main>
  <section>
    <b>
      A
    </b>
  </section>
</main>
```

# Update `{"kind":"b"}`
```html
<main>
  <section>
    <i>
      B:b
    </i>
  </section>
</main>
```
## Change
```
REMOVE: main > section > b
INSERT: main > section > i
UPDATE: main > section > i::text@2 "" => "b"
```

# Update `{}`
```html
<main>
  <section />
</main>
```
## Change
```
REMOVE: main > section > i
```

# Update `{"kind":"a"}`
```html
<main>
  <section>
    <b>
      A
    </b>
  </section>
</main>
```
## Change
```
INSERT: main > section > b
```
