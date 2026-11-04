# Render `{"title":"t","text":"x","rows":[1,2]}`
```html
<main>
  <h1>
    t
  </h1>
  <p>
    x
    <input />
  </p>
  <header>
    <b>
      x
      <input />
    </b>
  </header>
  <ul>
    <li>
      1
      <em>
        x
        <input />
      </em>
    </li>
    <li>
      2
      <em>
        x
        <input />
      </em>
    </li>
  </ul>
  <ol>
    <li>
      1
      <p>
        x
        <input />
      </p>
    </li>
    <li>
      2
      <p>
        x
        <input />
      </p>
    </li>
  </ol>
</main>
```

# Update
```js
for (const el of document.querySelectorAll("input")) el.value = "typed";
```

# Update `{"title":"t","text":"x","rows":[1,2]}`

# Update
```js
const inputs = [...document.querySelectorAll("input")];
assert.deepEqual(
  inputs.map((el) => el.value),
  inputs.map(() => "typed"),
);
```
