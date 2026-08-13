# Render `{"items":["a","b"]}`
```html
<ul>
  <li>
    0: a (0)
  </li>
  <li>
    1: b (0)
  </li>
</ul>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    0: a (1)
  </li>
  <li>
    1: b (1)
  </li>
</ul>
<button>
  inc
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@6 "0" => "1"
UPDATE: ul > li:nth-of-type(2)::text@6 "0" => "1"
```
