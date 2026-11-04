# Render `{"h":"a"}`
```html
<main>
  <section>
    <header>
      <b>
        a
      </b>
    </header>
    <footer>
      static
    </footer>
  </section>
</main>
```

# Update `{"h":"b"}`
```html
<main>
  <section>
    <header>
      <b>
        b
      </b>
    </header>
    <footer>
      static
    </footer>
  </section>
</main>
```
## Change
```
UPDATE: main > section > header > b::text "a" => "b"
```
