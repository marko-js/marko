# Render `{"on":true}`
```html
<main>
  <section
    class="a"
  />
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
    class="a"
  >
    true
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: .a::text "" => "true"
```

# Update `{"on":false}`
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"on":true}`
```html
<main>
  <section
    class="a"
  />
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .a
UPDATE: .a::text " " => ""
```
