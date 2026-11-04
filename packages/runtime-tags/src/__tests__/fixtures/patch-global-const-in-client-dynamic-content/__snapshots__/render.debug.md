# Render `{"$global":{"label":"a"}}`
```html
<button>
  toggle
</button>
<p>
  a!
</p>
```

# Update `{"$global":{"label":"b"}}`
```html
<button>
  toggle
</button>
<p>
  b!
</p>
```
## Change
```
UPDATE: p::text "a!" => "b!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<p>
  b!
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "b!"
```

# Update `{"$global":{"label":"c"}}`
```html
<button>
  toggle
</button>
<p>
  c!
</p>
```
## Change
```
UPDATE: p::text "b!" => "c!"
```
