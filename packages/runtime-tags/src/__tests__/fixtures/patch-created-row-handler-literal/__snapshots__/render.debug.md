# Render `{"items":[{"id":0,"name":"N0a"}]}`
```html
<output>
  -1
</output>
<ul>
  <li>
    <span>
      N0a
    </span>
    <button>
      Pick
    </button>
  </li>
</ul>
```

# Update `{"items":[{"id":0,"name":"N0b"},{"id":1,"name":"N1b"}]}`
```html
<output>
  -1
</output>
<ul>
  <li>
    <span>
      N0b
    </span>
    <button>
      Pick
    </button>
  </li>
  <li>
    <span>
      N1b
    </span>
    <button>
      Pick
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > span::text "N0a" => "N0b"
INSERT: ul > li:nth-of-type(1) + li
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<output>
  10
</output>
<ul>
  <li>
    <span>
      N0b
    </span>
    <button>
      Pick
    </button>
  </li>
  <li>
    <span>
      N1b
    </span>
    <button>
      Pick
    </button>
  </li>
</ul>
```
## Change
```
UPDATE: output::text "-1" => "10"
```
