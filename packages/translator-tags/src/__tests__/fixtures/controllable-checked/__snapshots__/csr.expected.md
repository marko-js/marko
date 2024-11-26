# Render {}
```html
<input
  type="checkbox"
/>
<span>
  false
</span>
```

# Mutations
```
inserted input0, span1
```


# Render 
container.querySelector("input").click()

```html
<input
  checked=""
  type="checkbox"
/>
<span>
  true
</span>
```

# Mutations
```
span1/#text0: "false" => "true"
```


# Render 
container.querySelector("input").click()

```html
<input
  type="checkbox"
/>
<span>
  false
</span>
```

# Mutations
```
span1/#text0: "true" => "false"
```


# Render 
container.querySelector("input").click()

```html
<input
  checked=""
  type="checkbox"
/>
<span>
  true
</span>
```

# Mutations
```
span1/#text0: "false" => "true"
```