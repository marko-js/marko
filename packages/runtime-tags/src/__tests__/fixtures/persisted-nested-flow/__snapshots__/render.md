# Render `{"items":[{"id":1,"label":"Apples"},{"id":2,"label":"Bread","sale":true}],"badge":"new"}`
```html
<main>
  <ul>
    <li>
      Apples
    </li>
    <li>
      Bread
      <em>
        on sale
      </em>
    </li>
  </ul>
  <footer>
    <span>
      new (0)
    </span>
    <button>
      ack
    </button>
  </footer>
</main>
```

# Update
```js
document.querySelector("footer button").click();
```
```html
<main>
  <ul>
    <li>
      Apples
    </li>
    <li>
      Bread
      <em>
        on sale
      </em>
    </li>
  </ul>
  <footer>
    <span>
      new (1)
    </span>
    <button>
      ack
    </button>
  </footer>
</main>
```
## Change
```
UPDATE: main > footer > span::text@5 "0" => "1"
```

# Update `{"items":[{"id":3,"label":"Milk","sale":true},{"id":1,"label":"Apples"},{"id":2,"label":"Bread"}],"summary":"2 deals","badge":"hot"}`
```html
<main>
  <ul>
    <li>
      Milk
      <em>
        on sale
      </em>
    </li>
    <li>
      Apples
    </li>
    <li>
      Bread
    </li>
  </ul>
  <section>
    2 deals
  </section>
  <footer>
    <span>
      hot (1)
    </span>
    <button>
      ack
    </button>
  </footer>
</main>
```
## Change
```
INSERT: main > ul > li
UPDATE: main > ul > li:nth-of-type(1)::text "" => "Milk"
INSERT: main > ul > li:nth-of-type(1)::text + em
UPDATE: main > ul > li:nth-of-type(2)::text "Apples" => "Apples"
UPDATE: main > ul > li:nth-of-type(3)::text "Bread" => "Bread"
REMOVE: main > ul > li:nth-of-type(3)::text + em
INSERT: main > ul + section
UPDATE: main > section::text "" => "2 deals"
UPDATE: main > footer > span::text@0 "new" => "hot"
```

# Update `{"items":[{"id":3,"label":"Milk"},{"id":2,"label":"Bread","sale":true}],"summary":"1 deal","detail":"ends soon","badge":"hot"}`
```html
<main>
  <ul>
    <li>
      Milk
    </li>
    <li>
      Bread
      <em>
        on sale
      </em>
    </li>
  </ul>
  <section>
    1 deal
    <small>
      ends soon
    </small>
  </section>
  <footer>
    <span>
      hot (1)
    </span>
    <button>
      ack
    </button>
  </footer>
</main>
```
## Change
```
REMOVE: main > ul > li:nth-of-type(1) + li
UPDATE: main > ul > li:nth-of-type(1)::text "Milk" => "Milk"
REMOVE: main > ul > li:nth-of-type(1)::text + em
UPDATE: main > ul > li:nth-of-type(2)::text "Bread" => "Bread"
INSERT: main > ul > li:nth-of-type(2)::text + em
UPDATE: main > section::text "2 deals" => "1 deal"
INSERT: main > section::text + small
UPDATE: main > section > small::text " " => "ends soon"
UPDATE: main > footer > span::text@0 "hot" => "hot"
```

# Update `{"items":[{"id":2,"label":"Bread","sale":true}],"badge":"sold"}`
```html
<main>
  <ul>
    <li>
      Bread
      <em>
        on sale
      </em>
    </li>
  </ul>
  <footer>
    <span>
      sold (1)
    </span>
    <button>
      ack
    </button>
  </footer>
</main>
```
## Change
```
REMOVE: main > ul > li
UPDATE: main > ul > li::text "Bread" => "Bread"
REMOVE: main > ul + section
UPDATE: main > footer > span::text@0 "hot" => "sold"
```
