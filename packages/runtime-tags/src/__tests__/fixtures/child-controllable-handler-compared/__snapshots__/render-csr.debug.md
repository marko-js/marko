# Render `{"title":"a","show":true}`
```html
<main>
  <h1>
    a
  </h1>
  <p>
    Last 0
  </p>
  <pre
    id="log"
  >
    new;
  </pre>
  <span>
    Seen 0
  </span>
  <button
    class="add"
  >
    +
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```

# Update `{"title":"b","show":false}`
```html
<main>
  <h1>
    b
  </h1>
  <p>
    Last 0
  </p>
  <pre
    id="log"
  >
    new;
  </pre>
</main>
```
## Change
```
UPDATE: main > h1::text "a" => "b"
REMOVE: #log + span
REMOVE: #log + button
REMOVE: #log + button
```

# Update `{"title":"b","show":true}`
```html
<main>
  <h1>
    b
  </h1>
  <p>
    Last 0
  </p>
  <pre
    id="log"
  >
    new;same;
  </pre>
  <span>
    Seen 0
  </span>
  <button
    class="add"
  >
    +
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
INSERT: #log + :is(span, .add, .toggle)
UPDATE: main > span::text@5 "" => "0"
REMOVE: #log::text("new;")
INSERT: #log::text("new;same;")
```

# Update
```js
document.querySelector("button.add").click();
```
```html
<main>
  <h1>
    b
  </h1>
  <p>
    Last 1
  </p>
  <pre
    id="log"
  >
    new;same;
  </pre>
  <span>
    Seen 0
  </span>
  <button
    class="add"
  >
    +
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@5 "0" => "1"
```
