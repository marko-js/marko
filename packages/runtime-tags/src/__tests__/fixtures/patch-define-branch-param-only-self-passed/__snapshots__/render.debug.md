# Render `{"v":"a"}`
```html
<button>
  toggle
</button>
<span>
  a
</span>
<span>
  a
</span>
```

# Update `{"v":"b"}`
```html
<button>
  toggle
</button>
<span>
  b
</span>
<span>
  b
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "a" => "b"
UPDATE: span:nth-of-type(2)::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<span>
  b
</span>
```
## Change
```
REMOVE: span + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<span>
  b
</span>
<span>
  b
</span>
```
## Change
```
INSERT: span:nth-of-type(1) + span
UPDATE: span:nth-of-type(2)::text " " => "b"
```

# Update `{"v":"c"}`
```html
<button>
  toggle
</button>
<span>
  c
</span>
<span>
  c
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "b" => "c"
UPDATE: span:nth-of-type(2)::text "b" => "c"
```
