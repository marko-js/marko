# Render `{"show":false,"$global":{"persisted":true}}`
```html
<button
  class="nav"
>
  nav 0
</button>
```

# Update `{"show":true,"$global":{"persisted":true}}`
```html
<button
  class="nav"
>
  nav 0
</button>
<div
  class="arrived"
>
   arrived
</div>
```
## Change
```
INSERT: .nav + .arrived
```

# Update
```js
assert.equal(scriptRuns(document), 1);
```

# Update update frame 1 of 2

# Update `{"show":false,"$global":{"persisted":true}}`
```html
<button
  class="nav"
>
  nav 0
</button>
```
## Change
```
REMOVE: .nav + div
```

# Update update frame 1 of 2

# Update `{"show":true,"$global":{"persisted":true}}`
```html
<button
  class="nav"
>
  nav 0
</button>
<div
  class="arrived"
>
   arrived
</div>
```
## Change
```
INSERT: .nav + .arrived
```

# Update
```js
assert.equal(scriptRuns(document), 2);
```
