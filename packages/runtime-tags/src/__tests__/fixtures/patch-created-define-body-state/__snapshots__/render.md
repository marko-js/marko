# Render `{"show":false,"id":"a"}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"id":"b"}`
```html
<p>
  b:0
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p::text@2 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  b:1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text@2 "0" => "1"
```

# Update `{"show":false,"id":"c"}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: p
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"id":"d"}`
```html
<p>
  d:2
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p::text@2 "" => "2"
```
