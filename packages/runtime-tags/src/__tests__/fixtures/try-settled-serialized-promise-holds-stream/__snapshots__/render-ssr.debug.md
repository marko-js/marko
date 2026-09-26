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
INSERT: button + span
INSERT: span::text("a")
INSERT: span + #ref
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
INSERT: #ref + p
INSERT: p::text("b")
REMOVE: #ref::text("0")
INSERT: #ref::text("hello")
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
