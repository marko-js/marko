# Render `{"as":"div","p":{},"q":{}}`
```html
<main>
  <div
    class="box"
  />
  <section />
  <button>
    interactive
  </button>
</main>
```

# Update `{"as":"div","p":{"value":"2"},"q":{"value":"b"}}`

# Update `{"as":"section","p":{"value":"3"},"q":{"value":"c"}}`
```html
<main>
  <section
    class="box"
  />
  <section />
  <button>
    interactive
  </button>
</main>
```
## Change
```
INSERT: main > .box
REMOVE: .box + .box
UPDATE: .box[class] null => "box"
```
