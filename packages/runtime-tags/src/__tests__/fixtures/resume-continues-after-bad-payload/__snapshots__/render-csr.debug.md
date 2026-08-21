# Render
```html
<button>
  0
</button>
<div
  id="first"
/>
<div
  id="second"
/>
```

# Update
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
## Change
```
INSERT: #first::text("loading...")
INSERT: #second::text("loading...")
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
INSERT: #first::text("a")
REMOVE: #first::text + ::text("loading...")
```
## Console
```
LOG "effect a=a"
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
INSERT: #second::text("b")
REMOVE: #second::text + ::text("loading...")
```
## Console
```
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
