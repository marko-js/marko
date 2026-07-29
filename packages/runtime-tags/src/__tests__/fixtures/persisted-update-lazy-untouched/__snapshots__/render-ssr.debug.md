# Render `{"title":"First","label":"alpha","show":true,"$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button
  class="count"
>
  clicked 0
</button>
<button
  class="panel"
>
  alpha hit 0
</button>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<h1>
  First
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  alpha hit 0
</button>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"title":"Second","label":"alpha","show":true,"$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  alpha hit 0
</button>
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update
```js
assert.equal(title(document), "Second");
assert.equal(deferred(document).length, 1);
assert.equal(fallbacks(document).length, 0);
```

# Update `{"title":"Third","label":"alpha","show":true,"$global":{"persisted":true}}`
```html
<h1>
  Third
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  alpha hit 0
</button>
```
## Change
```
UPDATE: h1::text "Second" => "Third"
```

# Update
```js
assert.equal(title(document), "Third");
assert.equal(deferred(document).length, 1);
assert.equal(fallbacks(document).length, 0);
assert.match(panelText(document), /alpha/);
```

# Update
```js
deferred(document)[0].release();
```

# Update
```js
assert.match(panelText(document), /alpha/);
assert.equal(fallbacks(document).length, 0);
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<h1>
  Third
</h1>
<button
  class="count"
>
  clicked 2
</button>
<button
  class="panel"
>
  alpha hit 0
</button>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
