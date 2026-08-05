# Render
```html
<button>
  0
</button>
<b>
  before
</b>
```

# Update
```html
<button>
  0
</button>
<b>
  before
</b>
<i>
  A
</i>
```
## Change
```
INSERT: b + i
INSERT: i::text("A")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
REMOVE: button + b
REMOVE: button + i
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<b>
  before
</b>
<i>
  A
</i>
```
## Change
```
UPDATE: button::text "1" => "2"
INSERT: button + b
INSERT: b + i
UPDATE: i::text " " => "A"
```
