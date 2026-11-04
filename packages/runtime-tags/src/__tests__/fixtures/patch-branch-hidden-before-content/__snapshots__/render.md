# Render `{"error":"","promise":{"value":"one"}}`
```html
<main>
  <section />
</main>
```

# Update
```html
<main>
  <section>
    <em>
      one
    </em>
  </section>
  <button>
    Count 0
  </button>
</main>
```
## Change
```
INSERT: main > section > em
INSERT: main > section > em::text("one")
INSERT: main > section + button
INSERT: main > button::text("Count ")
INSERT: main > button::text@0 + ::text("0")
```

# Update `{"error":"","promise":{"value":"two"}}`
```html
<main>
  <section>
    <em>
      two
    </em>
  </section>
  <button>
    Count 0
  </button>
</main>
```
## Change
```
UPDATE: main > section > em::text "one" => "two"
```

# Update `{"error":"bad","promise":{"value":"three"}}`
```html
<main>
  <p
    class="error"
  >
    bad
  </p>
  <section>
    <em>
      three
    </em>
  </section>
  <button>
    Count 0
  </button>
</main>
```
## Change
```
INSERT: main > .error
REMOVE: main > section > em
INSERT: main > section > em
```

# Update `{"error":"","promise":{"value":"four"}}`
```html
<main>
  <section>
    <em>
      four
    </em>
  </section>
  <button>
    Count 0
  </button>
</main>
```
## Change
```
REMOVE: main > p
REMOVE: main > section > em
INSERT: main > section > em
```
