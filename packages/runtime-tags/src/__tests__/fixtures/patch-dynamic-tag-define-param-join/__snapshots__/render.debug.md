# Render `{"show":true,"n":1}`
```html
<p>
  1
</p>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  2
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text "1" => "2"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"show":true,"n":5}`
```html
<p>
  6
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text "2" => "6"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"show":false,"n":5}`
## Change
```
REMOVE: p
REMOVE: button
```

# Update `{"show":true,"n":1}`
```html
<p>
  1
</p>
<button>
  inc
</button>
```
## Change
```
INSERT: p, button
UPDATE: p::text " " => "1"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"show":true,"n":5}`
```html
<p>
  5
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text "1" => "5"
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
  6
</p>
<button>
  inc
</button>
```
## Change
```
UPDATE: p::text "5" => "6"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
