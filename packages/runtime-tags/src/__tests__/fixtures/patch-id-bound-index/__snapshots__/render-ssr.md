# Render `{"show":false}`
```html
<label
  for="sM_0A"
>
  x
</label>
<input
  id="sM_0A"
/>
<p>
  x:0
</p>
<label
  for="sM_1A"
>
  y
</label>
<input
  id="sM_1A"
/>
<p>
  y:0
</p>
```

# Update `{"show":true}`
```html
<label
  for="sM_0A"
>
  x
</label>
<input
  id="sM_0A"
/>
<p>
  x:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_1A"
>
  y
</label>
<input
  id="sM_1A"
/>
<p>
  y:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
```
## Change
```
INSERT: p:nth-of-type(1) + :is(span, button)
INSERT: p:nth-of-type(2) + :is(span, button)
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<label
  for="sM_0A"
>
  x
</label>
<input
  id="sM_0A"
/>
<p>
  x:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_1A"
>
  y
</label>
<input
  id="sM_1A"
/>
<p>
  y:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "0" => "1"
UPDATE: p:nth-of-type(2)::text@2 "0" => "1"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
for (const p of document.querySelectorAll("p"))
  assert(p.textContent.endsWith(":1"));
}
```
