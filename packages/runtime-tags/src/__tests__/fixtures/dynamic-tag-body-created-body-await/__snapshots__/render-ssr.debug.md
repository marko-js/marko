# Render `{"on":false,"note":"a","w":{"value":"x"}}`
```html
<main>
  <div />
</main>
```

# Update
```html
<main>
  <div>
    <em>
      a x
    </em>
  </div>
</main>
```
## Change
```
INSERT: main > div > em
INSERT: main > div > em::text("a x")
```
