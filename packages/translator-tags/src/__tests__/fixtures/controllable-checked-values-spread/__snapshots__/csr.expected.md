# Render {}
```html
<input
  type="checkbox"
  value="a"
/>
<input
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
input0: attr(type) "checkbox" => "checkbox"
input0: attr(value) "a" => "a"
input1: attr(type) "checkbox" => "checkbox"
input1: attr(value) "b" => "b"
input2: attr(type) "checkbox" => "checkbox"
input2: attr(value) "c" => "c"
```


# Render 
container.querySelector("input").click()

```html
<input
  type="checkbox"
  value="a"
/>
<input
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
input0: attr(type) "checkbox" => "checkbox"
input0: attr(value) "a" => "a"
input1: attr(type) "checkbox" => "checkbox"
input1: attr(value) "b" => "b"
input2: attr(type) "checkbox" => "checkbox"
input2: attr(value) "c" => "c"
```


# Render 
container.querySelector("input").click()

```html
<input
  type="checkbox"
  value="a"
/>
<input
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
input0: attr(type) "checkbox" => "checkbox"
input0: attr(value) "a" => "a"
input1: attr(type) "checkbox" => "checkbox"
input1: attr(value) "b" => "b"
input2: attr(type) "checkbox" => "checkbox"
input2: attr(value) "c" => "c"
```