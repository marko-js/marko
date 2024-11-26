# Render {}
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  a
</span>
```

# Mutations
```
inserted input0, input1, input2, span3
```


# Render 
container.querySelectorAll(`input`)[1].click()

```html
<input
  type="radio"
  value="a"
/>
<input
  checked=""
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  b
</span>
```

# Mutations
```
span3/#text0: "a" => "b"
```


# Render 
container.querySelectorAll(`input`)[2].click()

```html
<input
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  checked=""
  type="radio"
  value="c"
/>
<span>
  c
</span>
```

# Mutations
```
span3/#text0: "b" => "c"
```


# Render 
container.querySelectorAll(`input`)[0].click()

```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="c"
/>
<span>
  a
</span>
```

# Mutations
```
span3/#text0: "c" => "a"
```