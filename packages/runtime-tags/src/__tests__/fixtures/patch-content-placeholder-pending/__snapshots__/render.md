# Render `{"promise":{},"note":"x"}`
```html
<main>
  <section>
    <span>
      done
    </span>
  </section>
</main>
```

# Update `{"promise":{},"note":"y"}`
```html
<main>
  <section>
    <span>
      done
    </span>
  </section>
</main>
```
## Change
```
REMOVE: main > section > span
INSERT: main > section > em
UPDATE: em::text " " => "y"
INSERT: main > section > span
REMOVE: main > section > span + em
```
