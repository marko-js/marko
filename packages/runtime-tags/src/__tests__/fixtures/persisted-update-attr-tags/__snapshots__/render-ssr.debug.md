# Render `{"id":1,"show":true,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<header>
  <h2>
    server title 1
  </h2>
</header>
<main>
  <section>
    <p>
      server title 1
    </p>
  </section>
</main>
<ul>
  <li>
    one
  </li>
  <li>
    two
  </li>
</ul>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<header>
  <h2>
    server title 1
  </h2>
</header>
<main>
  <section>
    <p>
      server title 1
    </p>
  </section>
</main>
<ul>
  <li>
    one
  </li>
  <li>
    two
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"id":2,"show":false,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<header>
  <h2>
    server title 2
  </h2>
</header>
<main />
<ul>
  <li>
    one
  </li>
</ul>
```
## Change
```
UPDATE: header > h2::text "server title 1" => "server title 2"
REMOVE: main > section
REMOVE: ul > li + li
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<header>
  <h2>
    server title 2
  </h2>
</header>
<main />
<ul>
  <li>
    one
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
