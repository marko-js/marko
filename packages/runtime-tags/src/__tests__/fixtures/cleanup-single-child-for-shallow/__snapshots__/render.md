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
```

# Update
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
```
## Change
```
REMOVE: div:nth-of-type(3) + div
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3")
```

# Update
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
```
## Change
```
REMOVE: div:nth-of-type(2) + div
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2")
```

# Update
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
```
## Change
```
REMOVE: div + div
REMOVE: div::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2")
INSERT: div::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1")
```

# Update
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
```
## Change
```
INSERT: div:nth-of-type(1) + div
INSERT: div:nth-of-type(2) + div
INSERT: div:nth-of-type(3) + div
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1")
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1\nmounted 2")
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1\nmounted 2")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1\nmounted 2\nmounted 3")
```
