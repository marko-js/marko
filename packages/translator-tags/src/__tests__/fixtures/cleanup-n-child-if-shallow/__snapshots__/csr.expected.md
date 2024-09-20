# Render {}
```html
<button>
  Toggle
</button>
<div>
  mounted
</div>
<div>
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
<!---->
```

# Mutations
```
inserted button0, div1, div2, span3, p4, #comment5
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
removed span after #text2
removed p after #text2
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
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
<!---->
```

# Mutations
```
inserted div2
inserted span3
inserted p4
removed #text after p4
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
removed span after #text2
removed p after #text2
```