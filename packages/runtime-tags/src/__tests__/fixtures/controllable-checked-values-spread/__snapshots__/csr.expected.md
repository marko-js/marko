# Render {}
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  checked=""
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="c"
/>
<span>
  a,b
</span>
```

# Mutations
```
inserted input0, input1, input2, span3
```


# Render 
container.querySelector("input").click()

```html
<input
  type="checkbox"
  value="a"
/>
<input
  checked=""
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="c"
/>
<span>
  b
</span>
```

# Mutations
```
span3/#text0: "a,b" => "b"
```


# Render 
container.querySelector("input").click()

```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  checked=""
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="c"
/>
<span>
  b,a
</span>
```

# Mutations
```
span3/#text0: "b" => "b,a"
```


# Render 
container.querySelector("input").click()

```html
<input
  type="checkbox"
  value="a"
/>
<input
  checked=""
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="c"
/>
<span>
  b
</span>
```

# Mutations
```
span3/#text0: "b,a" => "b"
```