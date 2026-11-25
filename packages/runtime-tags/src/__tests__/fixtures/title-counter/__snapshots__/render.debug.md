# Render
```html
<button>
  +
</button>
<div>
  Count is 0
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<div>
  Count is 1
</div>
```
## Change
```
UPDATE: title::text "Count is 0" => "Count is 1"
REMOVE: div::text("Count is 0")
INSERT: div::text("Count is 1")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<div>
  Count is 2
</div>
```
## Change
```
UPDATE: title::text "Count is 1" => "Count is 2"
REMOVE: div::text("Count is 1")
INSERT: div::text("Count is 2")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<div>
  Count is 3
</div>
```
## Change
```
UPDATE: title::text "Count is 2" => "Count is 3"
REMOVE: div::text("Count is 2")
INSERT: div::text("Count is 3")
```
