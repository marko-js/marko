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
INSERT button, div0, div1, span0, p0, div2, span1, p1, div3, span2, p2, #comment
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
REMOVE #text in div0
INSERT div0/#text
REMOVE div after p1
REMOVE span after p1
REMOVE p after p1
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
REMOVE #text in div0
INSERT div0/#text
REMOVE div after p
REMOVE span after p
REMOVE p after p
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
REMOVE span after div
REMOVE p after div
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
REMOVE #text after div0
INSERT div1, span0, p0
INSERT div2, span1, p1
INSERT div3, span2, p2
REMOVE #text in div0
INSERT #text
REMOVE #text in div0
INSERT #text
REMOVE #text in div0
INSERT div0/#text
```