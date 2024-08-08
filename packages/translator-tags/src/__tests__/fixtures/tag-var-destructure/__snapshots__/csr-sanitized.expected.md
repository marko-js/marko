# Render {}
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


# Render 
container?.querySelector("button").click()

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