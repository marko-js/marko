# Render
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
INSERT button, div0, div1, div2, div3, #comment
INSERT #text
REMOVE #text in div0
INSERT #text
REMOVE #text in div0
INSERT div0/#text
```

# Render
```js
container.querySelector("button").click();
```
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
REMOVE #text in div0
INSERT div0/#text
REMOVE div after div2
```

# Render
```js
container.querySelector("button").click();
```
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
REMOVE #text in div0
INSERT div0/#text
REMOVE div after div1
```

# Render
```js
container.querySelector("button").click();
```
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
INSERT #text
REMOVE #text in div
INSERT div/#text
REMOVE div after div
```

# Render
```js
container.querySelector("button").click();
```
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
INSERT div1
INSERT div2
INSERT div3
REMOVE #text after div0
REMOVE #text in div0
INSERT #text
REMOVE #text in div0
INSERT #text
REMOVE #text in div0
INSERT div0/#text
```