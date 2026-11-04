# Render `{"$global":{"title":"first","serializedGlobals":["title"]}}`
```html
<main>
  <button
    class="step"
  >
    show
  </button>
</main>
```

# Update
```js
document.querySelector(".step").click();
```
```html
<main>
  <button
    class="read"
  >
    read
  </button>
  <button
    class="step"
  >
    show
  </button>
</main>
```
## Change
```
INSERT: main > .read
```

# Update
```js
document.querySelector(".read").click();
```
```html
<main
  data-title="first!"
>
  <button
    class="read"
  >
    read
  </button>
  <button
    class="step"
  >
    show
  </button>
</main>
```
## Change
```
UPDATE: main[data-title] null => "first!"
```

# Update `{"$global":{"title":"second","serializedGlobals":["title"]}}`

# Update
```js
document.querySelector(".read").click();
```
```html
<main
  data-title="second!"
>
  <button
    class="read"
  >
    read
  </button>
  <button
    class="step"
  >
    show
  </button>
</main>
```
## Change
```
UPDATE: main[data-title] "first!" => "second!"
```
