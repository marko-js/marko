# Render `{"show":false}`
```html
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true}`
```html
<em>
  1
</em>
<button>
  +
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  2
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text "1" => "2"
```

# Update `{"show":false}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: em
```

# Update `{"show":true}`
```html
<em>
  2
</em>
<button>
  +
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "2"
```
