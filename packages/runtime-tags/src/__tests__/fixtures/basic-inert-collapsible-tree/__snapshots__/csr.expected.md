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

# Mutations
```
INSERT ul
```

# Render
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

# Mutations
```
UPDATE ul/li0[hidden] null => ""
UPDATE ul/li0/button/#text "[-]" => "[+]"
```

# Render
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

# Mutations
```
UPDATE ul/li0[hidden] "" => null
UPDATE ul/li0/button/#text "[+]" => "[-]"
```

# Render
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

# Mutations
```
UPDATE ul/li0/ul/li[hidden] null => ""
UPDATE ul/li0/ul/li/button/#text "[-]" => "[+]"
```

# Render
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

# Mutations
```
UPDATE ul/li1[hidden] null => ""
UPDATE ul/li1/button/#text "[-]" => "[+]"
```