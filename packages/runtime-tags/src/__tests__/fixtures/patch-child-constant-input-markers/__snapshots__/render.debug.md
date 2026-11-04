# Render `{"status":"a","items":[{"id":10,"name":"I0"},{"id":11,"name":"I1"},{"id":12,"name":"I2"}]}`
```html
<main>
  <span
    class="badge info"
  >
    New
  </span>
  <span
    class="badge warn"
  >
    Sale
  </span>
  <span
    class="badge info"
  >
    Hot
  </span>
  <span
    class="badge info"
  >
    a
  </span>
  <p>
    I0 
    <span
      class="badge info"
    >
      Item
    </span>
  </p>
  <p>
    I1 
    <span
      class="badge info"
    >
      Item
    </span>
  </p>
  <p>
    I2 
    <span
      class="badge info"
    >
      Item
    </span>
  </p>
  <button>
    0
  </button>
</main>
```

# Update `{"status":"b","items":[{"id":10,"name":"I0"},{"id":11,"name":"I1"},{"id":12,"name":"I2"}]}`
```html
<main>
  <span
    class="badge info"
  >
    New
  </span>
  <span
    class="badge warn"
  >
    Sale
  </span>
  <span
    class="badge info"
  >
    Hot
  </span>
  <span
    class="badge info"
  >
    b
  </span>
  <p>
    I0 
    <span
      class="badge info"
    >
      Item
    </span>
  </p>
  <p>
    I1 
    <span
      class="badge info"
    >
      Item
    </span>
  </p>
  <p>
    I2 
    <span
      class="badge info"
    >
      Item
    </span>
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main > span:nth-of-type(4)::text "a" => "b"
```
