# Render
```html
<button>
  clicks 0
</button>
<span>
  outer placeholder
</span>
```
## Console
```
LOG "mounted" "outer placeholder"
```

# Update
```html
<button>
  clicks 0
</button>
<p>
  outer 0
</p>
<span>
  inner placeholder
</span>
```
## Change
```
INSERT: p::text("outer ")
INSERT: p::text@0 + ::text("0")
INSERT: span::text("inner placeholder")
REMOVE: span
INSERT: button + :is(p, span)
```
## Console
```
LOG "destroyed" "outer placeholder"
LOG "mounted" "inner placeholder"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  clicks 1
</button>
<p>
  outer 1
</p>
<span>
  inner placeholder
</span>
```
## Change
```
UPDATE: button::text@7 "0" => "1"
UPDATE: p::text@6 "0" => "1"
```

# Update
```html
<button>
  clicks 1
</button>
<p>
  outer 1
</p>
<span>
  inner 1
</span>
```
## Change
```
INSERT: span::text("inner 1")
REMOVE: span
INSERT: p + span
UPDATE: span::text "inner 0" => "inner 1"
```
## Console
```
LOG "destroyed" "inner placeholder"
LOG "mounted" "inner 0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  clicks 2
</button>
<p>
  outer 2
</p>
<span>
  inner 2
</span>
```
## Change
```
UPDATE: button::text@7 "1" => "2"
UPDATE: p::text@6 "1" => "2"
UPDATE: span::text "inner 1" => "inner 2"
```
