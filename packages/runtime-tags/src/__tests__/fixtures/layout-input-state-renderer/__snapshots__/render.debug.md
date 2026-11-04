# Render `{"label":"x"}`
```html
<main>
  <nav>
    A x
  </nav>
  <button>
    swap
  </button>
</main>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <nav>
    B x
  </nav>
  <button>
    swap
  </button>
</main>
```
## Change
```
INSERT: main > nav
REMOVE: main > nav + nav
UPDATE: main > nav::text@2 "" => "x"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <nav>
    A x
  </nav>
  <button>
    swap
  </button>
</main>
```
## Change
```
INSERT: main > nav
REMOVE: main > nav + nav
UPDATE: main > nav::text@2 "" => "x"
```
