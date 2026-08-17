# Render
```html
<button>
  clicks 0
</button>
```

# Update
```html
<button>
  clicks 0
</button>
<span>
  outer placeholder
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text " " => "outer placeholder"
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
```
## Change
```
INSERT: button + p
REMOVE: p + span
UPDATE: p::text@6 "" => "0"
```
## Console
```
LOG "destroyed" "outer placeholder"
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
INSERT: p + span
UPDATE: span::text " " => "inner placeholder"
```
## Console
```
LOG "mounted" "inner placeholder"
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
  inner 0
</span>
```
## Change
```
INSERT: p + span
REMOVE: span + span
UPDATE: span::text " " => "inner 0"
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
UPDATE: button::text@7 "0" => "1"
UPDATE: p::text@6 "0" => "1"
UPDATE: span::text "inner 0" => "inner 1"
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
