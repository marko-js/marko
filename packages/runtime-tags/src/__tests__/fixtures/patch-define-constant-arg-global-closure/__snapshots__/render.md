# Render `{"$global":{"flag":"1","mark":"x","serializedGlobals":["flag","mark"]}}`
```html
<div>
  <p
    data-z="a1x"
  />
</div>
<button>
  0
</button>
```

# Update `{"$global":{"flag":"1","mark":"y","serializedGlobals":["flag","mark"]}}`
```html
<div>
  <p
    data-z="a1y"
  />
</div>
<button>
  0
</button>
```
## Change
```
UPDATE: div > p[data-z] "a1x" => "a1y"
```

# Update
```js
assert.equal(document.querySelector("p").dataset.z, text);
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <p
    data-z="a1y"
  />
</div>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"$global":{"flag":"2","mark":"y","serializedGlobals":["flag","mark"]}}`
```html
<div>
  <p
    data-z="a2y"
  />
</div>
<button>
  1
</button>
```
## Change
```
UPDATE: div > p[data-z] "a1y" => "a2y"
```

# Update
```js
assert.equal(document.querySelector("p").dataset.z, text);
```
