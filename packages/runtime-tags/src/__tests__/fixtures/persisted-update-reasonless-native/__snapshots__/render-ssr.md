# Render `{"$global":{"persisted":true}}`
```html
<button>
  count 0
</button>
<div
  class="target"
  data-value="server-1"
>
  attribute
</div>
<input
  class="target"
  value="server-2"
/>
```

# Update
```js
attribute = document.querySelector("div.target").getAttribute("data-value");
value = document.querySelector("input.target").value;
```

# Update `{"$global":{"persisted":true}}`
```html
<button>
  count 0
</button>
<div
  class="target"
  data-value="server-3"
>
  attribute
</div>
<input
  class="target"
  value="server-4"
/>
```
## Change
```
UPDATE: div[data-value] "server-1" => "server-3"
UPDATE: input[value] "server-2" => "server-4"
```

# Update
```js
_assert.default.notEqual(document.querySelector("div.target").getAttribute("data-value"), attribute);
_assert.default.notEqual(document.querySelector("input.target").value, value);
```
