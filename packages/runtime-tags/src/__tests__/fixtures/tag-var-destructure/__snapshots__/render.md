# Render
```html
<button>
  <pre>
    a    1    0
  </pre>
  <pre>
    b    2    0
  </pre>
  <pre>
    c  {c:4}  {}
  </pre>
  <pre>
    d    7    0
  </pre>
  <pre>
    f   [9]   []
  </pre>
</button>
```

# Update
```js
container?.querySelector("button").click();
```
```html
<button>
  <pre>
    a    1    1
  </pre>
  <pre>
    b    2    2
  </pre>
  <pre>
    c  {c:4}  {"c":4}
  </pre>
  <pre>
    d    7    7
  </pre>
  <pre>
    f   [9]   [9]
  </pre>
</button>
```
## Change
```
UPDATE: button > pre:nth-of-type(1)::text@10 "0" => "1"
UPDATE: button > pre:nth-of-type(2)::text@10 "0" => "2"
UPDATE: button > pre:nth-of-type(3)::text@10 "{}" => "{\"c\":4}"
UPDATE: button > pre:nth-of-type(4)::text@10 "0" => "7"
UPDATE: button > pre:nth-of-type(5)::text@10 "[]" => "[9]"
```
