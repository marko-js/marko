# Render
```html
<button>
  0
</button>
<div
  id="first"
>
  loading...
</div>
<div
  id="second"
>
  loading...
</div>
```

# Update
```html
<button>
  0
</button>
<div
  id="first"
>
  a
</div>
<div
  id="second"
>
  loading...
</div>
```
## Change
```
REMOVE: #first::text("loading...")
INSERT: #first::text("a")
```
## Console
```
LOG "stale payload applied"
LOG "resume threw: stale payload"
```

# Update
```html
<button>
  0
</button>
<div
  id="first"
>
  a
</div>
<div
  id="second"
>
  b
</div>
```
## Change
```
REMOVE: #second::text("loading...")
INSERT: #second::text("b")
```
## Console
```
LOG "effect a=a"
LOG "effect b=b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<div
  id="first"
>
  a
</div>
<div
  id="second"
>
  b
</div>
```
## Change
```
UPDATE: button::text "0" => "1"
```
