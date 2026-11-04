# Render `{"promise":{}}`

# Update
```html
<p>
  ok
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "ok"
```

# Update `{"promise":{}}`

# Update
```html
<label
  for="cM_0"
>
  row
</label>
<input
  id="cM_0"
/>
<label
  for="cM_2"
>
  branch
</label>
<input
  id="cM_2"
/>
<label
  for="cM_1"
>
  caught
</label>
<input
  id="cM_1"
/>
<label
  for="cM_3"
>
  row
</label>
<input
  id="cM_3"
/>
<label
  for="cM_5"
>
  branch
</label>
<input
  id="cM_5"
/>
<label
  for="cM_4"
>
  caught
</label>
<input
  id="cM_4"
/>
<label
  for="cM_6"
>
  row
</label>
<input
  id="cM_6"
/>
<label
  for="cM_8"
>
  branch
</label>
<input
  id="cM_8"
/>
<label
  for="cM_7"
>
  caught
</label>
<input
  id="cM_7"
/>
<label
  for="cM_9"
>
  row
</label>
<input
  id="cM_9"
/>
<label
  for="cM_b"
>
  branch
</label>
<input
  id="cM_b"
/>
<label
  for="cM_a"
>
  caught
</label>
<input
  id="cM_a"
/>
<label
  for="cM_c"
>
  row
</label>
<input
  id="cM_c"
/>
<label
  for="cM_e"
>
  branch
</label>
<input
  id="cM_e"
/>
<label
  for="cM_d"
>
  caught
</label>
<input
  id="cM_d"
/>
<label
  for="cM_f"
>
  row
</label>
<input
  id="cM_f"
/>
<label
  for="cM_h"
>
  branch
</label>
<input
  id="cM_h"
/>
<label
  for="cM_g"
>
  caught
</label>
<input
  id="cM_g"
/>
<label
  for="cM_i"
>
  row
</label>
<input
  id="cM_i"
/>
<label
  for="cM_k"
>
  branch
</label>
<input
  id="cM_k"
/>
<label
  for="cM_j"
>
  caught
</label>
<input
  id="cM_j"
/>
<label
  for="cM_l"
>
  row
</label>
<input
  id="cM_l"
/>
<label
  for="cM_n"
>
  branch
</label>
<input
  id="cM_n"
/>
<label
  for="cM_m"
>
  caught
</label>
<input
  id="cM_m"
/>
```
## Change
```
REMOVE: #cM_m + p
INSERT: label, #cM_0, label, #cM_2, label, #cM_1
INSERT: #cM_1 + :is(label, #cM_3, label, #cM_5, label, #cM_4)
INSERT: #cM_4 + :is(label, #cM_6, label, #cM_8, label, #cM_7)
INSERT: #cM_7 + :is(label, #cM_9, label, #cM_b, label, #cM_a)
INSERT: #cM_a + :is(label, #cM_c, label, #cM_e, label, #cM_d)
INSERT: #cM_d + :is(label, #cM_f, label, #cM_h, label, #cM_g)
INSERT: #cM_g + :is(label, #cM_i, label, #cM_k, label, #cM_j)
INSERT: #cM_j + :is(label, #cM_l, label, #cM_n, label, #cM_m)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(ids.size, 24);
}
```
