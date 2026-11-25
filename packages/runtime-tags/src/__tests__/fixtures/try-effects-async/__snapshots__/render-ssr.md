# Render
```html
<button>
  inc
</button>
<div />
LOADING...
```

# Update
```html
<button>
  inc
</button>
<div>
  0
</div>
Async: 0
```
## Change
```
REMOVE: ::text("LOADING...")
INSERT: div::text("0")
INSERT: ::text("Async: "), ::text("0")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  inc
</button>
<div>
  0
</div>
LOADING...
```
## Change
```
REMOVE: ::text("0")
REMOVE: ::text("Async: ")
INSERT: ::text("LOADING...")
```

# Update
```html
<button>
  inc
</button>
<div>
  1
</div>
Async: 1
```
## Change
```
REMOVE: ::text("LOADING...")
REMOVE: div::text("0")
INSERT: div::text("1")
INSERT: ::text("Async: "), ::text("1")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  inc
</button>
<div>
  1
</div>
LOADING...
```
## Change
```
REMOVE: ::text("1")
REMOVE: ::text("Async: ")
INSERT: ::text("LOADING...")
```

# Update
```html
<button>
  inc
</button>
<div>
  1
</div>
Error: ERROR!
```
## Change
```
REMOVE: ::text("LOADING...")
INSERT: ::text("Error: ERROR!")
UPDATE: ::text " " => "Error: ERROR!"
```
