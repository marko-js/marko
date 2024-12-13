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
<span>
  1
</span>
<p>
  1
</p>
<div>
  2
</div>
<span>
  2
</span>
<p>
  2
</p>
<div>
  3
</div>
<span>
  3
</span>
<p>
  3
</p>
<!---->
```

# Mutations
```
inserted button0, div1, div2, span3, p4, div5, span6, p7, div8, span9, p10, #comment11
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
<span>
  1
</span>
<p>
  1
</p>
<div>
  2
</div>
<span>
  2
</span>
<p>
  2
</p>
<!---->
```

# Mutations
```
removed #text in div1
inserted div1/#text0
removed div after p7
removed span after p7
removed p after p7
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
<span>
  1
</span>
<p>
  1
</p>
<!---->
```

# Mutations
```
removed #text in div1
inserted div1/#text0
removed div after p4
removed span after p4
removed p after p4
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
removed span after div1
removed p after div1
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
<span>
  1
</span>
<p>
  1
</p>
<div>
  2
</div>
<span>
  2
</span>
<p>
  2
</p>
<div>
  3
</div>
<span>
  3
</span>
<p>
  3
</p>
<!---->
```

# Mutations
```
inserted div2
inserted span3
inserted p4
inserted div5
inserted span6
inserted p7
inserted div8
inserted span9
inserted p10
removed #text after div1
removed #text in div1
inserted #text
removed #text in div1
inserted #text
removed #text in div1
inserted div1/#text0
```