# Render `{"mode":"a","label":"one"}`
```html
<main>
  <section
    class="a"
  >
    one
  </section>
</main>
```

# Update `{"mode":"a","label":"two"}`
```html
<main>
  <section
    class="a"
  >
    two
  </section>
</main>
```
## Change
```
UPDATE: .a::text "one" => "two"
```

# Update `{"mode":"b","label":"three"}`
```html
<main>
  <article
    class="b"
  >
    three!
  </article>
</main>
```
## Change
```
INSERT: main > .b
REMOVE: .b + section
UPDATE: .b::text@0 "" => "three"
```
