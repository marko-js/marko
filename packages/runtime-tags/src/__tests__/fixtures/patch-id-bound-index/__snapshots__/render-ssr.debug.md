# Render `{"show":false}`
```html
<label
  for="sM_[0].uid"
>
  x
</label>
<input
  id="sM_[0].uid"
/>
<p>
  x:0
</p>
<label
  for="sM_[1].uid"
>
  y
</label>
<input
  id="sM_[1].uid"
/>
<p>
  y:0
</p>
```

# Update `{"show":true}`
```html
<label
  for="sM_[0].uid"
>
  x
</label>
<input
  id="sM_[0].uid"
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
  for="sM_[1].uid"
>
  y
</label>
<input
  id="sM_[1].uid"
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
  for="sM_[0].uid"
>
  x
</label>
<input
  id="sM_[0].uid"
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
  for="sM_[1].uid"
>
  y
</label>
<input
  id="sM_[1].uid"
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
