# Render `{"show":false,"x":"a"}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"x":"b"}`
```html
<p>
  0:b
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "0:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1:b
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0:b" => "1:b"
```

# Update `{"show":false,"x":"c"}`
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

# Update `{"show":true,"x":"d"}`
```html
<p>
  2:d
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "2:d"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  3:d
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "2:d" => "3:d"
```

# Update `{"show":true,"x":"e"}`
```html
<p>
  3:e
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "3:d" => "3:e"
```
