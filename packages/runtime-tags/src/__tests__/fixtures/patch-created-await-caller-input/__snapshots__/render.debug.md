# Render `{"show":false,"first":"a1","second":"a2"}`

# Update `{"show":true,"first":"a1","second":"a2"}`
```html
<main>
  <section>
    <p>
      a1
    </p>
  </section>
  <button>
    toggle
  </button>
</main>
```
## Change
```
INSERT: main
INSERT: main > section > p
UPDATE: main > section > p::text " " => "a1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <p>
      a2
    </p>
  </section>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text "a1" => "a2"
```

# Update `{"show":true,"first":"b1","second":"b2"}`
```html
<main>
  <section>
    <p>
      b2
    </p>
  </section>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text "a2" => "b2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <p>
      b1
    </p>
  </section>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main > section > p::text "b2" => "b1"
```
