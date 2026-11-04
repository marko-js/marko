# Render `{"show":true,"n":1,"$global":{"suffix":"a","serializedGlobals":["suffix"]}}`
```html
<p>
  1a
</p>
<button>
  inc
</button>
```

# Update `{"show":true,"n":1,"$global":{"suffix":"b","serializedGlobals":["suffix"]}}`
```html
<p>
  1b
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text "1a" => "1b"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  2b
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text "1b" => "2b"
```

# Update `{"show":true,"n":1,"$global":{"suffix":"c","serializedGlobals":["suffix"]}}`
```html
<p>
  2c
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text "2b" => "2c"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
