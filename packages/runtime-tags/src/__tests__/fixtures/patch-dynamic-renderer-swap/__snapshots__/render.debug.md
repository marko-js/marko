# Render `{"mode":"a","label":"one"}`
```html
<main>
  <section
    class="a"
  >
    one
  </section>
  <button>
    0
  </button>
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
  <button>
    0
  </button>
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
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > .b
REMOVE: .b + section
UPDATE: .b::text@0 "" => "three"
```
