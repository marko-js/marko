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

# Mutations
```
INSERT button
```

# Render
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

# Mutations
```
UPDATE button/pre4/#text1 "[]" => "[9]"
UPDATE button/pre3/#text1 "0" => "7"
UPDATE button/pre0/#text1 "0" => "1"
UPDATE button/pre2/#text1 "{}" => "{\"c\":4}"
UPDATE button/pre1/#text1 "0" => "2"
```