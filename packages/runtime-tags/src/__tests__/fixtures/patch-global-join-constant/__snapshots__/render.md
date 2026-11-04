# Render `{"show":true,"n":1,"$global":{"suffix":"a","serializedGlobals":["suffix"]}}`
```html
<p>
  2a
</p>
<button>
  0
</button>
```

# Update `{"show":true,"n":1,"$global":{"suffix":"b","serializedGlobals":["suffix"]}}`
```html
<p>
  2b
</p>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "2a" => "2b"
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
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"show":true,"n":2,"$global":{"suffix":"c","serializedGlobals":["suffix"]}}`
```html
<p>
  3c
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: p::text "2b" => "3c"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
