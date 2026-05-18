# Render
```html
<button>
  1
</button>
```

# Update
```html
<button>
  1
</button>
loading...
```
## Change
```
INSERT: button + ::text("loading...")
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
loading...
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
loading...
```
## Change
```
UPDATE: button::text "2" => "3"
```

# Update
```html
<button>
  3
</button>
<span>
  3
</span>
```
## Change
```
INSERT: button + span
REMOVE: span + ::text("loading...")
UPDATE: span::text " " => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
<span>
  4
</span>
```
## Change
```
UPDATE: button::text "3" => "4"
UPDATE: span::text "3" => "4"
```
