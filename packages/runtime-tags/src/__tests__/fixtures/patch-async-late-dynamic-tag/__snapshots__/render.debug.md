# Render `{"as":"div","p":{},"q":{}}`
```html
<main>
  <div
    class="box"
  >
    <em>
      1
    </em>
  </div>
  <section>
    <b>
      a
    </b>
  </section>
  <button>
    interactive
  </button>
</main>
```

# Update `{"as":"div","p":{"value":"2"},"q":{"value":"b"}}`
```html
<main>
  <div
    class="box"
  >
    <em>
      2
    </em>
  </div>
  <section>
    <b>
      b
    </b>
  </section>
  <button>
    interactive
  </button>
</main>
```
## Change
```
REMOVE: .box > em
REMOVE: main > section > b
INSERT: .box > em
INSERT: main > section > b
```

# Update `{"as":"section","p":{"value":"3"},"q":{"value":"c"}}`
```html
<main>
  <section
    class="box"
  >
    <em>
      3
    </em>
  </section>
  <section>
    <b>
      c
    </b>
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
REMOVE: main > section:nth-of-type(2) > b
INSERT: .box > em
INSERT: main > section:nth-of-type(2) > b
```
