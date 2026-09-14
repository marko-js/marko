# Render
```html
<main>
  <ul>
    <li>
      a
      <button>
        x
      </button>
    </li>
  </ul>
  <button
    class="add"
  >
    +
  </button>
</main>
```

# Update
```js
document.querySelector(".add").click();
```
```html
<main>
  <ul>
    <li>
      a
      <button>
        x
      </button>
    </li>
    <li>
      n1
      <button>
        x
      </button>
    </li>
  </ul>
  <button
    class="add"
  >
    +
  </button>
</main>
```
## Change
```
INSERT: main > ul > li:nth-of-type(1) + li
```

# Update
```js
document.querySelector("li button").click();
```
```html
<main>
  <ul>
    <li>
      n1
      <button>
        x
      </button>
    </li>
  </ul>
  <button
    class="add"
  >
    +
  </button>
</main>
```
## Change
```
UPDATE: main > ul > li::text "a" => "n1"
REMOVE: main > ul > li + li
```
