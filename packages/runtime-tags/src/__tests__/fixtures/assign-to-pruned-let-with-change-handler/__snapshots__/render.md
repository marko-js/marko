# Render
```html
<button>
  Before
</button>
<div>
  0
</div>
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
  1
</div>
```
## Change
```
REMOVE: button::text("Before")
INSERT: button::text("1")
UPDATE: div::text "0" => "1"
```
