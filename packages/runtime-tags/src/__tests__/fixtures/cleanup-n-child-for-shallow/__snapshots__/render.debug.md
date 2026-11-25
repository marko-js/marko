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
```

# Update
```js
document.querySelector("button").click();
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
```
## Change
```
REMOVE: div
REMOVE: p
REMOVE: span
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3")
```

# Update
```js
document.querySelector("button").click();
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
```
## Change
```
REMOVE: div
REMOVE: p
REMOVE: span
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2")
```

# Update
```js
document.querySelector("button").click();
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
```
## Change
```
REMOVE: div
REMOVE: p
REMOVE: span
REMOVE: div::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2")
INSERT: div::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1")
```

# Update
```js
document.querySelector("button").click();
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
```
## Change
```
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1\nmounted 2")
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1")
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1")
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1\nmounted 2")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1\nmounted 2\nmounted 3")
INSERT: div:nth-of-type(2), span:nth-of-type(1), p:nth-of-type(1)
INSERT: div:nth-of-type(3), span:nth-of-type(2), p:nth-of-type(2)
INSERT: div:nth-of-type(4), span:nth-of-type(3), p:nth-of-type(3)
```
