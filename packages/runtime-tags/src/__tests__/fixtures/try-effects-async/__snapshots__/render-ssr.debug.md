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
INSERT: div + :is(::text("Async: "), ::text("0"))
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
  1
</div>
Async: 1
```
## Change
```
UPDATE: ::text@7 "0" => "1"
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
Error: ERROR!
```
## Change
```
INSERT: div + ::text("Error: ERROR!")
REMOVE: ::text + ::text("Async: ")
REMOVE: ::text + ::text("1")
UPDATE: ::text " " => "Error: ERROR!"
```
