# Render
```html
<button>
  0
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
UPDATE: button::text "0" => "1"
UPDATE: div::text "0" => "1"
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
  2
</div>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: div::text "1" => "2"
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
  3
</div>
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: div::text "2" => "3"
```
