# Render {"comments":[{"text":"Hello World","comments":[{"text":"testing 123"}]},{"text":"Goodbye World"}]}
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
inserted ul0
```


# Render 
container.querySelector(`#c-${id} > button`).click()

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
ul0/li0: attr(hidden) null => ""
ul0/li0/button1/#text0: "[-]" => "[+]"
```


# Render 
container.querySelector(`#c-${id} > button`).click()

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
ul0/li0: attr(hidden) "" => null
ul0/li0/button1/#text0: "[+]" => "[-]"
```


# Render 
container.querySelector(`#c-${id} > button`).click()

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
ul0/li0/ul2/li0: attr(hidden) null => ""
ul0/li0/ul2/li0/button1/#text0: "[-]" => "[+]"
```


# Render 
container.querySelector(`#c-${id} > button`).click()

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
ul0/li1: attr(hidden) null => ""
ul0/li1/button1/#text0: "[-]" => "[+]"
```