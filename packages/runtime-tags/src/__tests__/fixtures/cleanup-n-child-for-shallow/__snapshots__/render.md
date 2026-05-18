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
```
## Change
```
REMOVE: p:nth-of-type(2) + div
REMOVE: p:nth-of-type(2) + span
REMOVE: p:nth-of-type(2) + p
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
<span>
  1
</span>
<p>
  1
</p>
```
## Change
```
REMOVE: p + div
REMOVE: p + span
REMOVE: p + p
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
REMOVE: div + span
REMOVE: div + p
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
INSERT: div:nth-of-type(1) + :is(div, span, p)
INSERT: p:nth-of-type(1) + :is(div, span, p)
INSERT: p:nth-of-type(2) + :is(div, span, p)
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1")
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1\nmounted 2")
REMOVE: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1\nmounted 2")
INSERT: div:nth-of-type(1)::text("\nmounted 1\nmounted 2\nmounted 3\ndestroyed 3\ndestroyed 2\ndestroyed 1\nmounted 1\nmounted 2\nmounted 3")
```
