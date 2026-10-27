# Render `{"mode":1,"note":"one"}`
```html
<main>
  <section>
    <em>
      one
    </em>
  </section>
  <p>
    one
  </p>
</main>
```

# Update `{"mode":1,"note":"two"}`
```html
<main>
  <section>
    <em>
      two
    </em>
  </section>
  <p>
    two
  </p>
</main>
```
## Change
```
UPDATE: main > section > em::text "one" => "two"
UPDATE: main > p::text "one" => "two"
```

# Update `{"mode":0,"note":"three"}`
```html
<main>
  <section />
  <p>
    three
  </p>
</main>
```
## Change
```
REMOVE: main > section > em
UPDATE: main > p::text "two" => "three"
```

# Update `{"mode":1,"note":"four"}`
```html
<main>
  <section>
    <em>
      four
    </em>
  </section>
  <p>
    four
  </p>
</main>
```
## Change
```
INSERT: main > section > em
UPDATE: main > section > em::text " " => "four"
UPDATE: main > p::text "three" => "four"
```
