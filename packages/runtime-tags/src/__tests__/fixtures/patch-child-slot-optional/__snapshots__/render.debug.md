# Render `{"title":"a"}`
```html
<main>
  <div
    class="card"
  >
    <h1>
      a
    </h1>
  </div>
  <button>
    0
  </button>
</main>
```

# Update `{"title":"b"}`
```html
<main>
  <div
    class="card"
  >
    <h1>
      b
    </h1>
  </div>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: .card > h1::text "a" => "b"
```

# Update `{"title":"c"}`
```html
<main>
  <div
    class="card"
  >
    <h1>
      c
    </h1>
  </div>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: .card > h1::text "b" => "c"
```
