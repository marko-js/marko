# Render `{"n":1,"show":false}`
```html
<button>
  1
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update `{"n":2,"show":true}`
```html
<button>
  2
</button>
<input
  value="2"
/>
```
## Change
```
INSERT: button + input
UPDATE: input[value] null => "2"
```

# Update
```js
const el = document.querySelector("input");
el.value = "typed";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
## Console
```
LOG "typed"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  3
</button>
<input
  default-value="2"
  value="3"
/>
```
## Change
```
UPDATE: button::text "2" => "3"
```

# Update `{"n":3,"show":true}`

# Update
```js
const el = document.querySelector("input");
el.value = "typed";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
## Console
```
LOG "typed"
```
