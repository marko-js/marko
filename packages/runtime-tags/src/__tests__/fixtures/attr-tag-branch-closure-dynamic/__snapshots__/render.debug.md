# Render
```html
<button>
  next
</button>
<nav>
  <span>
    First
  </span>
</nav>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  next
</button>
<nav>
  <span>
    Second
  </span>
</nav>
```
## Change
```
UPDATE: nav > span::text "First" => "Second"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  next
</button>
<nav />
```
## Change
```
REMOVE: nav > span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  next
</button>
<nav>
  <span>
    First
  </span>
</nav>
```
## Change
```
INSERT: nav > span
INSERT: nav > span::text("First")
UPDATE: nav > span::text " " => "First"
```
