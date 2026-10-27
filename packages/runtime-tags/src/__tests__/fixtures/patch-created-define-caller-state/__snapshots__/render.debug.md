# Render `{"show":false}`
```html
<button>
  +
</button>
```

# Update `{"show":true}`
```html
<p>
  x:0
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
  x:1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text@2 "0" => "1"
```

# Update `{"show":false}`
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

# Update `{"show":true}`
```html
<p>
  x:2
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

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  x:3
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text@2 "2" => "3"
```
