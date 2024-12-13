# Render {}
```html
<button>
  Toggle
</button>
<div>
  
mounted 1
mounted 2
mounted 3
</div>
<div>
  1
</div>
<div>
  2
</div>
<div>
  3
</div>
<!---->
```

# Mutations
```
inserted button0, div1, div2, div3, div4, #comment5
inserted #text
removed #text in div1
inserted #text
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
  
mounted 1
mounted 2
mounted 3
destroyed 3
</div>
<div>
  1
</div>
<div>
  2
</div>
<!---->
```

# Mutations
```
removed #text in div1
inserted div1/#text0
removed div after div3
```


# Render 
container.querySelector("button").click()

```html
<button>
  Toggle
</button>
<div>
  
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
</div>
<div>
  1
</div>
<!---->
```

# Mutations
```
removed #text in div1
inserted div1/#text0
removed div after div2
```


# Render 
container.querySelector("button").click()

```html
<button>
  Toggle
</button>
<div>
  
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
destroyed 1
</div>
<!---->
```

# Mutations
```
inserted #text2
removed #text in div1
inserted div1/#text0
removed div after div1
```


# Render 
container.querySelector("button").click()

```html
<button>
  Toggle
</button>
<div>
  
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
destroyed 1
mounted 1
mounted 2
mounted 3
</div>
<div>
  1
</div>
<div>
  2
</div>
<div>
  3
</div>
<!---->
```

# Mutations
```
inserted div2
inserted div3
inserted div4
removed #text after div1
removed #text in div1
inserted #text
removed #text in div1
inserted #text
removed #text in div1
inserted div1/#text0
```