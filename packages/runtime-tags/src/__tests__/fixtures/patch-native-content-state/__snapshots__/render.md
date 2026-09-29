# Render
```html
<main>
  <section />
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
  <section>
    <div
      class="a"
    />
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section > .a
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section />
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section > div
```
