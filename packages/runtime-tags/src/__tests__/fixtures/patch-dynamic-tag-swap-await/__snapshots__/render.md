# Render `{"as":"div","p":{}}`
```html
<main>
  <div
    class="box"
  >
    <em>
      1
    </em>
  </div>
  <button>
    interactive
  </button>
</main>
```

# Update `{"as":"section","p":{"value":"3"}}`
```html
<main>
  <section
    class="box"
  >
    <em>
      3
    </em>
  </section>
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
INSERT: .box > em
UPDATE: .box > em::text " " => "3"
REMOVE: .box > em
INSERT: .box > em
```
