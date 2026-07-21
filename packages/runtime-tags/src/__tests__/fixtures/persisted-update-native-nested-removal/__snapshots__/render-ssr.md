# Render `{"outer":"div","child":"component","$global":{"persisted":true}}`
```html
<button
  class="count"
>
  count 0
</button>
<div
  class="outer"
>
  <button
    class="child"
  >
    child
  </button>
</div>
```

# Update
```js
document.querySelector("button.child")?.click();
```

# Update `{"outer":"div","child":null,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  count 0
</button>
<div
  class="outer"
/>
```
## Change
```
REMOVE: .outer > button
```

# Update
```js
_assert.default.equal(!!document.querySelector("button.child"), expected);
```

# Update `{"outer":"div","child":"native","$global":{"persisted":true}}`
```html
<button
  class="count"
>
  count 0
</button>
<div
  class="outer"
>
  <span />
</div>
```
## Change
```
INSERT: .outer > span
```

# Update
```js
_assert.default.equal(!!document.querySelector("button.child"), expected);
```

# Update `{"outer":"div","child":false,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  count 0
</button>
<div
  class="outer"
/>
```
## Change
```
REMOVE: .outer > span
```

# Update
```js
_assert.default.equal(!!document.querySelector("button.child"), expected);
```

# Update `{"outer":"div","child":"component","$global":{"persisted":true}}`
```html
<button
  class="count"
>
  count 0
</button>
<div
  class="outer"
>
  <button
    class="child"
  >
    child
  </button>
</div>
```
## Change
```
INSERT: .outer > .child
```

# Update
```js
_assert.default.equal(!!document.querySelector("button.child"), expected);
```

# Update
```js
document.querySelector("button.child")?.click();
```
