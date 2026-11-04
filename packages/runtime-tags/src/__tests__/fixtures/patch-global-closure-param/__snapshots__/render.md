# Render `{"v":"a","$global":{"flag":"1","mark":"x","serializedGlobals":["flag","mark"]}}`
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

# Update `{"v":"a","$global":{"flag":"1","mark":"y","serializedGlobals":["flag","mark"]}}`
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

# Update `{"v":"b","$global":{"flag":"2","mark":"y","serializedGlobals":["flag","mark"]}}`
```html
<div>
  <p
    data-z="b2y"
  />
</div>
<button>
  0
</button>
```
## Change
```
UPDATE: div > p[data-z] "a1y" => "b2y"
```

# Update
```js
assert.equal(document.querySelector("p").dataset.z, text);
```
