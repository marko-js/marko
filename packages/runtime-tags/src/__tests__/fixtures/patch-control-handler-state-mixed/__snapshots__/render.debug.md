# Render `{"a":"a0","items":[{"id":1,"v":"x"}]}`
```html
<button>
  0
</button>
<input
  value="xa0:0"
/>
<span />
```

# Update `{"a":"a1","items":[{"id":1,"v":"y"},{"id":2,"v":"z"}]}`
```html
<button>
  0
</button>
<input
  default-value="xa0:0"
  value="ya1:0"
/>
<span />
<input
  value="za1:0"
/>
<span />
```
## Change
```
INSERT: span:nth-of-type(1) + :is(input, span)
UPDATE: input:nth-of-type(2)[value] null => "za1:0"
UPDATE: span:nth-of-type(2)::text " " => ""
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<input
  default-value="xa0:0"
  value="ya1:1"
/>
<span />
<input
  default-value="za1:0"
  value="za1:1"
/>
<span />
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update
```js
for (const input of document.querySelectorAll("input")) {
input.value = "typed";
input.dispatchEvent(new document.defaultView.Event("input"));
}
```
```html
<button>
  1
</button>
<input
  default-value="xa0:0"
  value="ya1:1"
/>
<span>
  typed
</span>
<input
  default-value="za1:0"
  value="za1:1"
/>
<span>
  typed
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "" => "typed"
UPDATE: span:nth-of-type(2)::text "" => "typed"
```

# Update `{"a":"a2","items":[{"id":2,"v":"z"}]}`
```html
<button>
  1
</button>
<input
  default-value="za1:0"
  value="za2:1"
/>
<span>
  typed
</span>
```
## Change
```
REMOVE: button + input
REMOVE: button + span
```
