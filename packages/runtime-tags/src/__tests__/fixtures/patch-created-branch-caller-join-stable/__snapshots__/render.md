# Render `{"show":false}`
```html
<button>
  label
</button>
```

# Update `{"show":true}`
```html
<button>
  label
</button>
<p>
  va
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "va"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  label
</button>
<p>
  va!
</p>
```
## Change
```
UPDATE: p::text "va" => "va!"
```

# Update `{"show":false}`
```html
<button>
  label
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

# Update `{"show":true}`
```html
<button>
  label
</button>
<p>
  va!!
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "va!!"
```
