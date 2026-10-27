# Render `{"show":false,"note":"x"}`
```html
<main>
  <section />
</main>
```

# Update `{"show":true,"note":"y"}`
```html
<main>
  <section>
    <div>
      <em>
        y
      </em>
    </div>
  </section>
</main>
```
## Change
```
INSERT: main > section > div
```

# Update `{"show":true,"note":"z"}`
```html
<main>
  <section>
    <div>
      <em>
        z
      </em>
    </div>
  </section>
</main>
```
## Change
```
UPDATE: main > section > div > em::text "y" => "z"
```
