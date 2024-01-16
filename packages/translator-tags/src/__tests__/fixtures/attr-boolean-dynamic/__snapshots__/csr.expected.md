# Render {}
```html
<input
  disabled=""
/>
<button>
  enable
</button>
```

# Mutations
```
inserted input0, button1
```


# Render 
container.querySelector("button").click()

```html
<input />
<button>
  disable
</button>
```

# Mutations
```
input0: attr(disabled) "" => null
button1/#text0: "enable" => "disable"
```


# Render 
container.querySelector("button").click()

```html
<input
  disabled=""
/>
<button>
  enable
</button>
```

# Mutations
```
input0: attr(disabled) null => ""
button1/#text0: "disable" => "enable"
```


# Render 
container.querySelector("button").click()

```html
<input />
<button>
  disable
</button>
```

# Mutations
```
input0: attr(disabled) "" => null
button1/#text0: "enable" => "disable"
```