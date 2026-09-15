# Render `{"picked":"x","pick":"a","options":[{"id":1,"value":"x","label":"X"},{"id":2,"value":"y","label":"Y"}]}`
```html
<main>
  <select>
    <option
      selected=""
      value="x"
    >
      X
    </option>
    <option
      value="y"
    >
      Y
    </option>
  </select>
  <select
    id="plain"
  >
    <option
      selected=""
      value="a"
    >
      A
    </option>
    <option
      value="b"
    >
      B
    </option>
  </select>
  <em>
    0
  </em>
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
  <select>
    <option
      selected=""
      value="x"
    >
      X
    </option>
    <option
      value="y"
    >
      Y
    </option>
  </select>
  <select
    id="plain"
  >
    <option
      selected=""
      value="a"
    >
      A
    </option>
    <option
      value="b"
    >
      B
    </option>
  </select>
  <em>
    1
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "0" => "1"
```

# Update `{"picked":"z","pick":"b","options":[{"id":1,"value":"x","label":"X"},{"id":2,"value":"z","label":"Z"}]}`
```html
<main>
  <select>
    <option
      selected=""
      value="x"
    >
      X
    </option>
    <option
      default-selected=""
      value="z"
    >
      Z
    </option>
  </select>
  <select
    id="plain"
  >
    <option
      value="a"
    >
      A
    </option>
    <option
      selected=""
      value="b"
    >
      B
    </option>
  </select>
  <em>
    1
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > select:nth-of-type(1) > option:nth-of-type(1)::text "X" => "X"
UPDATE: main > select:nth-of-type(1) > option:nth-of-type(2)[value] "y" => "z"
UPDATE: main > select:nth-of-type(1) > option:nth-of-type(2)::text "Y" => "Z"
UPDATE: #plain > option:nth-of-type(1)[selected] "" => null
UPDATE: #plain > option:nth-of-type(2)[selected] null => ""
UPDATE: main > select:nth-of-type(1) > option:nth-of-type(1)[selected] "" => null
UPDATE: main > select:nth-of-type(1) > option:nth-of-type(2)[selected] null => ""
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <select>
    <option
      selected=""
      value="x"
    >
      X
    </option>
    <option
      default-selected=""
      value="z"
    >
      Z
    </option>
  </select>
  <select
    id="plain"
  >
    <option
      value="a"
    >
      A
    </option>
    <option
      selected=""
      value="b"
    >
      B
    </option>
  </select>
  <em>
    2
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "1" => "2"
```
