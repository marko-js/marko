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
    c  {c:4}  0
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
inserted button0
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
    c  {c:4}  7
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
button0/pre0/#text1: "0" => "1"
button0/pre1/#text1: "0" => "2"
button0/pre2/#text1: "0" => "7"
button0/pre3/#text1: "0" => "7"
button0/pre4/#text1: "[]" => "[9]"
```