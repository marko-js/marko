# Render `{"label":"a"}`
```html
<p>
  a
</p>
<input
  value="a"
/>
<button>
  0
</button>
```

# Update
```js
const el = document.querySelector("input");
el.value = "x";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
## Console
```
LOG "x:a"
```

# Update `{"label":"b"}`
```html
<p>
  b
</p>
<input
  default-value="a"
  value="b"
/>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  b
</p>
<input
  default-value="a"
  value="b"
/>
<em>
  b
</em>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
INSERT: input + em
UPDATE: em::text " " => "b"
```

# Update `{"label":"c"}`
```html
<p>
  c
</p>
<input
  default-value="a"
  value="c"
/>
<em>
  c
</em>
<button>
  1
</button>
```
## Change
```
UPDATE: p::text "b" => "c"
UPDATE: em::text "b" => "c"
```

# Update
```js
const el = document.querySelector("input");
el.value = "x";
el.dispatchEvent(new document.defaultView.Event("input", { bubbles: true }));
```
## Console
```
LOG "x:c"
```
