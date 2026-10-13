# Render `{"show":false,"promise":{}}`
```html
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"promise":{}}`
```html
<button>
  +
</button>
<p>
  1 y
</p>
```
## Change
```
INSERT: button + p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<p>
  2 y
</p>
```
## Change
```
UPDATE: p::text@0 "1" => "2"
```
