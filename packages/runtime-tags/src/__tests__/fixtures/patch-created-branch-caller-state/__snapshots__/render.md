# Render `{"open":false}`
```html
<button>
  +
</button>
```

# Update `{"open":true}`
```html
<em>
  0
</em>
<button>
  +
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "0"
```

# Update
```js
document.querySelector("button").click();
```
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
UPDATE: em::text "0" => "1"
```

# Update `{"open":false}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: em
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"open":true}`
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

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  3
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text "2" => "3"
```
