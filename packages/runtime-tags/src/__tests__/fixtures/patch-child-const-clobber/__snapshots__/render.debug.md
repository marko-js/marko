# Render `{"note":"server"}`
```html
<main>
  <section
    class="c"
  >
    <h2>
      fixed
    </h2>
    <p>
      server
    </p>
  </section>
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
  <section
    class="c"
  >
    <h2>
      fixed
    </h2>
    <p>
      client
    </p>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: .c > p::text "server" => "client"
```

# Update `{"note":"server2"}`

# Update
```js
document.querySelector("button").click();
```
