# Render `{"title":"a"}`
```html
<main>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div
    class="box"
  >
    <section
      class="card"
    >
      <p>
        t:a
      </p>
    </section>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .box
INSERT: .box > .card
INSERT: .card > p
UPDATE: .card > p::text " " => "t:a"
```

# Update `{"title":"b"}`
```html
<main>
  <div
    class="box"
  >
    <section
      class="card"
    >
      <p>
        t:b
      </p>
    </section>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: .card > p::text "t:a" => "t:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > div
```

# Update `{"title":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div
    class="box"
  >
    <section
      class="card"
    >
      <p>
        t:c
      </p>
    </section>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .box
INSERT: .box > .card
INSERT: .card > p
UPDATE: .card > p::text " " => "t:c"
```
