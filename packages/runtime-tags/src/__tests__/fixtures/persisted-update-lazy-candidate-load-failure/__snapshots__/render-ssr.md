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

# Update `{"title":"Second","label":"beta","show":true,"$global":{"persisted":true}}`
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
## Console
```
ERROR "navigate() document fallback: Error: simulated chunk load failure: ./v:panel.marko.setup.mjs"
```

# Update
```js
assert.match(panelText(document), /alpha/);
assert.equal(fallbacks(document).length, 1);
```
