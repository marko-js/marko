# Render `{"title":"Store","items":[{"id":1,"label":"Apples"},{"id":2,"label":"Bread"}]}`
```html
<main>
  <h1>
    Store
  </h1>
  <ul>
    <li>
      Apples
    </li>
    <li>
      Bread
    </li>
  </ul>
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
  <h1>
    Store
  </h1>
  <ul>
    <li>
      Apples
    </li>
    <li>
      Bread
    </li>
  </ul>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "0" => "1"
```

# Update `{"title":"Store","items":[{"id":1,"label":"Apples!"},{"id":2,"label":"Bread"}]}`
```html
<main>
  <h1>
    Store
  </h1>
  <ul>
    <li>
      Apples!
    </li>
    <li>
      Bread
    </li>
  </ul>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
UPDATE: main > ul > li:nth-of-type(1)::text "Apples" => "Apples!"
UPDATE: main > ul > li:nth-of-type(2)::text "Bread" => "Bread"
```

# Update `{"title":"Store","items":[{"id":1,"label":"Apples!"},{"id":2,"label":"Bread"},{"id":3,"label":"Milk"}]}`
```html
<main>
  <h1>
    Store
  </h1>
  <ul>
    <li>
      Apples!
    </li>
    <li>
      Bread
    </li>
    <li>
      Milk
    </li>
  </ul>
  <button>
    Count 1
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
UPDATE: main > ul > li:nth-of-type(1)::text "Apples!" => "Apples!"
UPDATE: main > ul > li:nth-of-type(2)::text "Bread" => "Bread"
INSERT: main > ul > li:nth-of-type(2) + li
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <ul>
    <li>
      Apples!
    </li>
    <li>
      Bread
    </li>
    <li>
      Milk
    </li>
  </ul>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "1" => "2"
```

# Update `{"title":"Store","items":[{"id":3,"label":"Milk"},{"id":1,"label":"Apples!"}]}`
```html
<main>
  <h1>
    Store
  </h1>
  <ul>
    <li>
      Milk
    </li>
    <li>
      Apples!
    </li>
  </ul>
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
UPDATE: main > ul > li:nth-of-type(1)::text "Milk" => "Milk"
UPDATE: main > ul > li:nth-of-type(2)::text "Apples!" => "Apples!"
REMOVE: main > ul > li:nth-of-type(2) + li
REMOVE: main > ul > li:nth-of-type(2) + li
INSERT: main > ul > li
```

# Update `{"title":"Store","items":[]}`
```html
<main>
  <h1>
    Store
  </h1>
  <ul />
  <button>
    Count 2
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
REMOVE: main > ul > :is(li, li)
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Store
  </h1>
  <ul />
  <button>
    Count 3
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@6 "2" => "3"
```

# Update `{"title":"Store","items":[{"id":2,"label":"Rye"},{"id":3,"label":"Milk"}]}`
```html
<main>
  <h1>
    Store
  </h1>
  <ul>
    <li>
      Rye
    </li>
    <li>
      Milk
    </li>
  </ul>
  <button>
    Count 3
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "Store" => "Store"
INSERT: main > ul > li
INSERT: main > ul > li:nth-of-type(1) + li
```
