# Render
```html
<button>
  0
</button>
loading
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
loading
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update
```html
<button>
  1
</button>
<div>
  1
</div>
```
## Change
```
INSERT: div::text("1")
REMOVE: ::text("loading")
INSERT: button + div
UPDATE: div::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<div>
  2
</div>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: div::text "1" => "2"
```
