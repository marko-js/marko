# Render `{"show":false,"n":1,"$global":{"suffix":"a","serializedGlobals":["suffix"]}}`

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
INSERT: p, button
UPDATE: p::text " " => "1b"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"show":true,"n":5,"$global":{"suffix":"c","serializedGlobals":["suffix"]}}`
```html
<p>
  5c
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text "1b" => "5c"
UPDATE: p::text "1c" => "5c"
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
  6c
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text "5c" => "6c"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
