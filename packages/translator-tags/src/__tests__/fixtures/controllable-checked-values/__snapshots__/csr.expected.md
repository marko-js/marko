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
container.querySelectorAll(`input`)[1].click()

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
  a
</span>
```

# Mutations
```
span3/#text0: "a,b" => "a"
```


# Render 
container.querySelectorAll(`input`)[2].click()

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
  a,c
</span>
```

# Mutations
```
span3/#text0: "a" => "a,c"
```


# Render 
container.querySelectorAll(`input`)[0].click()

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
  c
</span>
```

# Mutations
```
span3/#text0: "a,c" => "c"
```