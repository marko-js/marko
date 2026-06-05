# Render
```html
<button>
  inc
</button>
<div />
```

# Update
```html
<button>
  inc
</button>
<div />
LOADING...
```
## Change
```
INSERT: div + ::text("LOADING...")
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
INSERT: div + :is(::text("Async: "), ::text("0"))
REMOVE: ::text@7 + ::text("LOADING...")
INSERT: div::text("0")
```

# Update
```js
container.querySelector("button").click();
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
INSERT: div + ::text("LOADING...")
REMOVE: ::text + ::text("Async: ")
REMOVE: ::text + ::text("0")
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
INSERT: div + :is(::text("Async: "), ::text("1"))
REMOVE: ::text@7 + ::text("LOADING...")
REMOVE: div::text("0")
INSERT: div::text("1")
```

# Update
```js
container.querySelector("button").click();
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
INSERT: div + ::text("LOADING...")
REMOVE: ::text + ::text("Async: ")
REMOVE: ::text + ::text("1")
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
INSERT: div + ::text("Error: ERROR!")
REMOVE: ::text + ::text("LOADING...")
UPDATE: ::text " " => "Error: ERROR!"
```
