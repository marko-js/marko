# Render {}
```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
<div>
  child
</div>
<!---->
```

# Mutations
```
inserted button0, div1, div2, #comment3
inserted div1/#text0
```


# Render 
container.querySelector("button").click()

```html
<button>
  Toggle
</button>
<div>
  destroyed
</div>
<!---->
```

# Mutations
```
inserted #text2
removed #text in div1
inserted div1/#text0
removed div after #text2
```


# Render 
container.querySelector("button").click()

```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
<div>
  child
</div>
<!---->
```

# Mutations
```
inserted div2
removed #text after div2
removed #text in div1
inserted div1/#text0
```


# Render 
container.querySelector("button").click()

```html
<button>
  Toggle
</button>
<div>
  destroyed
</div>
<!---->
```

# Mutations
```
inserted #text2
removed #text in div1
inserted div1/#text0
removed div after #text2
```