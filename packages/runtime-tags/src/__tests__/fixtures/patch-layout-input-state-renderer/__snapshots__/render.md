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

# Update `{"label":"y"}`
```html
<main>
  <nav>
    B y
  </nav>
  <button>
    swap
  </button>
</main>
```
## Change
```
UPDATE: main > nav::text@2 "x" => "y"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <nav>
    A y
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
UPDATE: main > nav::text@2 "" => "y"
```

# Update `{"label":"z"}`
```html
<main>
  <nav>
    A z
  </nav>
  <button>
    swap
  </button>
</main>
```
## Change
```
UPDATE: main > nav::text@2 "y" => "z"
```
