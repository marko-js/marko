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
assert.equal(!!document.querySelector("button.child"), expected);
```

# Update update frame 1 of 2

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
assert.equal(!!document.querySelector("button.child"), expected);
```

# Update update frame 1 of 2

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
assert.equal(!!document.querySelector("button.child"), expected);
```

# Update update frame 1 of 2

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
assert.equal(!!document.querySelector("button.child"), expected);
```

# Update
```js
document.querySelector("button.child")?.click();
```
