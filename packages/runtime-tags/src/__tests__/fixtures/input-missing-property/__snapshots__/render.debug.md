# Render
```html
<button>
  0
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<div>
  Fallback
</div>
```
## Change
```
UPDATE: button::text "0" => "1"
INSERT: button + div
UPDATE: div::text " " => "Fallback"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<div>
  Fallback
</div>
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
<div>
  Fallback
</div>
```
## Change
```
UPDATE: button::text "2" => "3"
```
