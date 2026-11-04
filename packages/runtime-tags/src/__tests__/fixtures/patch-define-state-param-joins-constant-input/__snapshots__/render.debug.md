# Render `{"x":1}`
```html
<button>
  +
</button>
<p>
  0a
</p>
<span>
  1
</span>
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
  1a
</p>
<span>
  1
</span>
```
## Change
```
UPDATE: p::text "0a" => "1a"
```

# Update `{"x":2}`
```html
<button>
  +
</button>
<p>
  1a
</p>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
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
  2a
</p>
<span>
  2
</span>
```
## Change
```
UPDATE: p::text "1a" => "2a"
```
