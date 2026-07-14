# Render `{"$global":{"persisted":true,"groups":[{"id":"a","items":[{"id":"same"}]},{"id":"b","items":[{"id":"same"}]}]}}`
```html
<p>
  0
</p>
<section>
  <h3>
    a
  </h3>
  <button>
    a:same
  </button>
</section>
<section>
  <h3>
    b
  </h3>
  <button>
    b:same
  </button>
</section>
```

# Update
```js
const buttons = container.querySelectorAll("button");
buttons[buttons.length - 1].click();
```
```html
<p>
  1
</p>
<section>
  <h3>
    a
  </h3>
  <button>
    a:same
  </button>
</section>
<section>
  <h3>
    b
  </h3>
  <button>
    b:same
  </button>
</section>
```
## Change
```
UPDATE: p::text "0" => "1"
```

# Update `{"$global":{"persisted":true,"groups":[{"id":"a","items":[{"id":"same"},{"id":"new"}]},{"id":"b","items":[{"id":"same"}]}]}}`
```html
<p>
  1
</p>
<section>
  <h3>
    a
  </h3>
  <button>
    a:same
  </button>
  <button>
    a:new
  </button>
</section>
<section>
  <h3>
    b
  </h3>
  <button>
    b:same
  </button>
</section>
```
## Change
```
REMOVE: section:nth-of-type(1) > h3 + button
INSERT: section:nth-of-type(1) > h3 + button
INSERT: section:nth-of-type(1) > button:nth-of-type(1) + button
REMOVE: section:nth-of-type(2) > h3 + button
INSERT: section:nth-of-type(2) > h3 + button
REMOVE: p + section
INSERT: p + section
REMOVE: p + section
INSERT: section:nth-of-type(1) + section
```

# Update
```js
const buttons = container.querySelectorAll("button");
buttons[buttons.length - 1].click();
```
```html
<p>
  2
</p>
<section>
  <h3>
    a
  </h3>
  <button>
    a:same
  </button>
  <button>
    a:new
  </button>
</section>
<section>
  <h3>
    b
  </h3>
  <button>
    b:same
  </button>
</section>
```
## Change
```
UPDATE: p::text "1" => "2"
```

# Update `{"$global":{"persisted":true,"groups":[{"id":"a","items":[{"id":"new"}]},{"id":"b","items":[{"id":"same"},{"id":"new"}]}]}}`
```html
<p>
  2
</p>
<section>
  <h3>
    a
  </h3>
  <button>
    a:new
  </button>
</section>
<section>
  <h3>
    b
  </h3>
  <button>
    b:same
  </button>
  <button>
    b:new
  </button>
</section>
```
## Change
```
REMOVE: section:nth-of-type(1) > h3 + button
INSERT: section:nth-of-type(2) > button:nth-of-type(1) + button
```
