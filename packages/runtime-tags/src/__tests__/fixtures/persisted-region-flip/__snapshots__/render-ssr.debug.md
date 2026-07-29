# Render `{"mode":"a","$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<button
  class="bump"
>
  1
</button>
<p
  class="note"
>
  alpha panel
</p>
```

# Update `{"mode":"a","$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<button
  class="bump"
>
  1
</button>
<p
  class="note"
>
  alpha panel
</p>
```
## Change
```
INSERT: .bump + .note
REMOVE: .note + .note
```

# Update
```js
assert.equal(note(document), "alpha panel");
```

# Update update frame 1 of 2

# Update `{"mode":"b","$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<button
  class="bump"
>
  1
</button>
<p
  class="note"
>
  beta panel
</p>
```
## Change
```
INSERT: .bump + .note
REMOVE: .note + .note
```

# Update
```js
assert.equal(note(document), "beta panel");
```

# Update update frame 1 of 2

# Update `{"mode":"a","$global":{"persisted":true,"persistedHeldRegions":true}}`
```html
<button
  class="bump"
>
  1
</button>
<p
  class="note"
>
  alpha panel
</p>
```
## Change
```
INSERT: .bump + .note
REMOVE: .note + .note
```

# Update
```js
assert.equal(note(document), "alpha panel");
```
