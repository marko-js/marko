# Render
```html
<button>
  0
</button>
```

# Update
```html
<button>
  0
</button>
<span>
  a
</span>
<div
  id="ref"
>
  0
</div>
```
## Change
```
INSERT: span
INSERT: span::text("a")
INSERT: #ref
INSERT: #ref::text("0")
```

# Update
```html
<button>
  0
</button>
<span>
  a
</span>
<div
  id="ref"
>
  hello
</div>
<p>
  b
</p>
```
## Change
```
REMOVE: #ref::text("0")
INSERT: #ref::text("hello")
INSERT: p
INSERT: p::text("b")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<span>
  a
</span>
<div
  id="ref"
>
  hello
</div>
<p>
  b
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```
