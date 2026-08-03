# Render `{"items":[{"id":1,"label":"Apples"},{"id":2,"label":"Bread"}],"promo":"Sale","note":"hi"}`
```html
<main>
  <ul>
    <li>
      Apples
    </li>
    <li>
      Bread
    </li>
  </ul>
  <aside>
    Sale
  </aside>
  <p>
    hi
  </p>
  <button>
    Count 0
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <ul>
    <li>
      Apples
    </li>
    <li>
      Bread
    </li>
  </ul>
  <aside>
    Sale
  </aside>
  <p>
    hi
  </p>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "0" => "1"
```

# Update `{"items":[{"id":3,"label":"Milk"},{"id":1,"label":"Apples!"},{"id":2,"label":"Bread!"}],"promo":"Big Sale","note":"hello"}`
```html
<main>
  <ul>
    <li>
      Milk
    </li>
    <li>
      Apples!
    </li>
    <li>
      Bread!
    </li>
  </ul>
  <aside>
    Big Sale
  </aside>
  <p>
    hello
  </p>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
INSERT: main > ul > li
UPDATE: main > ul > li:nth-of-type(1)::text " " => "Milk"
UPDATE: main > ul > li:nth-of-type(2)::text "Apples" => "Apples!"
UPDATE: main > ul > li:nth-of-type(3)::text "Bread" => "Bread!"
UPDATE: main > aside::text "Sale" => "Big Sale"
UPDATE: main > p::text "hi" => "hello"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <ul>
    <li>
      Milk
    </li>
    <li>
      Apples!
    </li>
    <li>
      Bread!
    </li>
  </ul>
  <aside>
    Big Sale
  </aside>
  <p>
    hello
  </p>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "1" => "2"
```

# Update `{"items":[{"id":2,"label":"Bread!"}],"promo":"","note":"bye"}`
```html
<main>
  <ul>
    <li>
      Bread!
    </li>
  </ul>
  <p>
    bye
  </p>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
REMOVE: main > ul > li
REMOVE: main > ul > li
UPDATE: main > ul > li::text "Bread!" => "Bread!"
REMOVE: main > ul + aside
UPDATE: main > p::text "hello" => "bye"
```

# Update `{"items":[{"id":2,"label":"Bread!"},{"id":4,"label":"Eggs"}],"promo":"Back","note":"again"}`
```html
<main>
  <ul>
    <li>
      Bread!
    </li>
    <li>
      Eggs
    </li>
  </ul>
  <aside>
    Back
  </aside>
  <p>
    again
  </p>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
INSERT: main > ul > li:nth-of-type(1) + li
UPDATE: main > ul > li:nth-of-type(1)::text "Bread!" => "Bread!"
UPDATE: main > ul > li:nth-of-type(2)::text " " => "Eggs"
INSERT: main > ul + aside
UPDATE: main > aside::text " " => "Back"
UPDATE: main > p::text "bye" => "again"
```
