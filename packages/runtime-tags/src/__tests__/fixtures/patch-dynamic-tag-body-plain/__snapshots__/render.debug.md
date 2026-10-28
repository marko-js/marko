# Render `{"on":true,"note":"a"}`
```html
<main>
  <section>
    <em>
      a
    </em>
  </section>
</main>
```

# Update `{"on":true,"note":"b"}`
```html
<main>
  <section>
    <em>
      b
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > em::text "a" => "b"
```

# Update `{"on":true,"note":"c"}`
```html
<main>
  <section>
    <em>
      c
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > em::text "b" => "c"
```
