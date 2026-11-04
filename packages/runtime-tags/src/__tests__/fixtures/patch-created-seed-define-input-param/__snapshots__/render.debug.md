# Render `{"show":false,"on":true,"v":"a"}`
```html
<button>
  toggle
</button>
```

# Update `{"show":true,"on":true,"v":"b"}`
```html
<button>
  toggle
</button>
<span>
  b!
</span>
<span>
  b!
</span>
```
## Change
```
INSERT: button + span
INSERT: span:nth-of-type(1) + span
UPDATE: span:nth-of-type(2)::text " " => "b!"
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
  b!
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
  b!
</span>
<span>
  b!
</span>
```
## Change
```
INSERT: span:nth-of-type(1) + span
UPDATE: span:nth-of-type(2)::text " " => "b!"
```

# Update `{"show":true,"on":false,"v":"b"}`
```html
<button>
  toggle
</button>
<span>
  b!
</span>
```
## Change
```
REMOVE: button + span
```

# Update `{"show":true,"on":true,"v":"b"}`
```html
<button>
  toggle
</button>
<span>
  b!
</span>
<span>
  b!
</span>
```
## Change
```
INSERT: button + span
```
