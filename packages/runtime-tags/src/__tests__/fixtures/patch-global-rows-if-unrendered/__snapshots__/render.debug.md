# Render `{"$global":{"x":"a","serializedGlobals":["x"]}}`
```html
<ul>
  <li>
    <button>
      t
    </button>
  </li>
  <li>
    <button>
      t
    </button>
    <b>
      a
    </b>
  </li>
  <li>
    <button>
      t
    </button>
  </li>
</ul>
```

# Update `{"$global":{"x":"b","serializedGlobals":["x"]}}`
```html
<ul>
  <li>
    <button>
      t
    </button>
  </li>
  <li>
    <button>
      t
    </button>
    <b>
      b
    </b>
  </li>
  <li>
    <button>
      t
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2) > b::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    <button>
      t
    </button>
    <b>
      b
    </b>
  </li>
  <li>
    <button>
      t
    </button>
    <b>
      b
    </b>
  </li>
  <li>
    <button>
      t
    </button>
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) > button + b
UPDATE: ul > li:nth-of-type(1) > b::text " " => "b"
```

# Update `{"$global":{"x":"c","serializedGlobals":["x"]}}`
```html
<ul>
  <li>
    <button>
      t
    </button>
    <b>
      c
    </b>
  </li>
  <li>
    <button>
      t
    </button>
    <b>
      c
    </b>
  </li>
  <li>
    <button>
      t
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2) > b::text "b" => "c"
UPDATE: ul > li:nth-of-type(1) > b::text "b" => "c"
```
