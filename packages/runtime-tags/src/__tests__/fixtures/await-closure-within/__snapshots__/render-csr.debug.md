# Render

# Update
```html
loading...
```
## Change
```
INSERT: ::text("loading...")
```

# Update
```html
<button>
  1
</button>
<span>
  1
</span>
```
## Change
```
INSERT: button
REMOVE: span + ::text("loading...")
UPDATE: button::text " " => "1"
INSERT: button + span
UPDATE: span::text " " => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<span>
  2
</span>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: span::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
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
UPDATE: button::text "2" => "3"
UPDATE: span::text "2" => "3"
```
