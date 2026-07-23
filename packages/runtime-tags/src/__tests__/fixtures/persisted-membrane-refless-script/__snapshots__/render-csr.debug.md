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

# Update `{"show":true,"$global":{"persisted":true}}`

# Update
```js
_strict.default.equal(scriptRuns(document), 1);
```

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

# Update `{"show":false,"$global":{"persisted":true}}`

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

# Update `{"show":true,"$global":{"persisted":true}}`

# Update
```js
_strict.default.equal(scriptRuns(document), 2);
```
