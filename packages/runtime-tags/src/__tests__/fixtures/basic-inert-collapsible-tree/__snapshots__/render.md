# Render `{"comments":[{"text":"Hello World","comments":[{"text":"testing 123"}]},{"text":"Goodbye World"}]}`
```html
<ul>
  <li
    id="c-0"
  >
    <span>
      Hello World
    </span>
    <button>
      [-]
    </button>
    <ul>
      <li
        id="c-0-0"
      >
        <span>
          testing 123
        </span>
        <button>
          [-]
        </button>
      </li>
    </ul>
  </li>
  <li
    id="c-1"
  >
    <span>
      Goodbye World
    </span>
    <button>
      [-]
    </button>
  </li>
</ul>
```

# Update
```js
container.querySelector(`#c-${id} > button`).click();
```
```html
<ul>
  <li
    hidden=""
    id="c-0"
  >
    <span>
      Hello World
    </span>
    <button>
      [+]
    </button>
    <ul>
      <li
        id="c-0-0"
      >
        <span>
          testing 123
        </span>
        <button>
          [-]
        </button>
      </li>
    </ul>
  </li>
  <li
    id="c-1"
  >
    <span>
      Goodbye World
    </span>
    <button>
      [-]
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: #c-0[hidden] null => ""
UPDATE: #c-0 > button::text "[-]" => "[+]"
```

# Update
```js
container.querySelector(`#c-${id} > button`).click();
```
```html
<ul>
  <li
    id="c-0"
  >
    <span>
      Hello World
    </span>
    <button>
      [-]
    </button>
    <ul>
      <li
        id="c-0-0"
      >
        <span>
          testing 123
        </span>
        <button>
          [-]
        </button>
      </li>
    </ul>
  </li>
  <li
    id="c-1"
  >
    <span>
      Goodbye World
    </span>
    <button>
      [-]
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: #c-0[hidden] "" => null
UPDATE: #c-0 > button::text "[+]" => "[-]"
```

# Update
```js
container.querySelector(`#c-${id} > button`).click();
```
```html
<ul>
  <li
    id="c-0"
  >
    <span>
      Hello World
    </span>
    <button>
      [-]
    </button>
    <ul>
      <li
        hidden=""
        id="c-0-0"
      >
        <span>
          testing 123
        </span>
        <button>
          [+]
        </button>
      </li>
    </ul>
  </li>
  <li
    id="c-1"
  >
    <span>
      Goodbye World
    </span>
    <button>
      [-]
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: #c-0-0[hidden] null => ""
UPDATE: #c-0-0 > button::text "[-]" => "[+]"
```

# Update
```js
container.querySelector(`#c-${id} > button`).click();
```
```html
<ul>
  <li
    id="c-0"
  >
    <span>
      Hello World
    </span>
    <button>
      [-]
    </button>
    <ul>
      <li
        hidden=""
        id="c-0-0"
      >
        <span>
          testing 123
        </span>
        <button>
          [+]
        </button>
      </li>
    </ul>
  </li>
  <li
    hidden=""
    id="c-1"
  >
    <span>
      Goodbye World
    </span>
    <button>
      [+]
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: #c-1[hidden] null => ""
UPDATE: #c-1 > button::text "[-]" => "[+]"
```
