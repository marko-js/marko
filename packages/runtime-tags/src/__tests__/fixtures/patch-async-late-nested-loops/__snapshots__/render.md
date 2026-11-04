# Render `{"groups":[{"id":"a","items":[{"promise":{}}]}]}`
```html
<main>
  <section>
    <em>
      a.1
    </em>
  </section>
  <button>
    interactive
  </button>
</main>
```

# Update `{"groups":[{"id":"b","items":[{"promise":{"value":"x"}}]},{"id":"a","items":[{"promise":{"value":"2"}},{"promise":{"value":{}}}]}]}`
```html
<main>
  <section>
    <em>
      b.x
    </em>
  </section>
  <section>
    <em>
      a.2
    </em>
    <b>
      nope
    </b>
  </section>
  <button>
    interactive
  </button>
</main>
```
## Change
```
INSERT: main > section
REMOVE: main > section:nth-of-type(2) > em
INSERT: main > section:nth-of-type(1) > em
INSERT: main > section:nth-of-type(2) > em
INSERT: main > section:nth-of-type(2) > em + b
UPDATE: main > section:nth-of-type(2) > b::text " " => "nope"
```
