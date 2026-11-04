# Render `{"label":"a"}`
```html
<p>
  a
</p>
<input
  value="a"
/>
<input
  value="0"
/>
<button>
  0
</button>
```

# Update
```js
for (const el of document.querySelectorAll("input")) {
el.value = "x";
el.dispatchEvent(
  new document.defaultView.Event("input", { bubbles: true }),
);
}
```
## Console
```
LOG "x:a"
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
<input
  value="0"
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
<input
  default-value="0"
  value="1"
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
INSERT: input:nth-of-type(2) + em
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
<input
  default-value="0"
  value="1"
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
for (const el of document.querySelectorAll("input")) {
el.value = "x";
el.dispatchEvent(
  new document.defaultView.Event("input", { bubbles: true }),
);
}
```
## Console
```
LOG "x:c"
LOG "x:c"
```
