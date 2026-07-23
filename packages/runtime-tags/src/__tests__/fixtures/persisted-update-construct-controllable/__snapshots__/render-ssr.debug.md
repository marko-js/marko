# Render `{"$global":{"persisted":true,"view":"home"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p
  class="home"
>
  welcome home
</p>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="home"
>
  welcome home
</p>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"editor"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<input
  class="field"
  value="draft"
/>
<output
  class="echo"
>
  draft
</output>
```
## Change
```
INSERT: .field, .echo
REMOVE: .count + p
```

# Update
```js
const input = document.querySelector("input.field");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```

# Update
```js
const input = document.querySelector("input.field");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
