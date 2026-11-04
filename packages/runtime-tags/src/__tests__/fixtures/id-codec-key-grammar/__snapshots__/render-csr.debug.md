# Render `{"keys":["",".",":","=","+","*","!","~","~0020","a_x0020b","_","__","_D","a b","a\tb","a\nb","a\u0000b","🙂","\ud800",1,"1",-1,1.5,9007199254740991,9007199254740992,9007199254740994]}`
```html
<h1
  id="cM_0"
>
  Keys
</h1>
<label
  for="cM_1"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_1"
/>
<label
  for="cM_2"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_2"
/>
<label
  for="cM_3"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_3"
/>
<label
  for="cM_4"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_4"
/>
<label
  for="cM_5"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_5"
/>
<label
  for="cM_6"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_6"
/>
<label
  for="cM_7"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_7"
/>
<label
  for="cM_8"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_8"
/>
<label
  for="cM_9"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_9"
/>
<label
  for="cM_a"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_a"
/>
<label
  for="cM_b"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_b"
/>
<label
  for="cM_c"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_c"
/>
<label
  for="cM_d"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_d"
/>
<label
  for="cM_e"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_e"
/>
<label
  for="cM_f"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_f"
/>
<label
  for="cM_g"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_g"
/>
<label
  for="cM_h"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_h"
/>
<label
  for="cM_i"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_i"
/>
<label
  for="cM_j"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_j"
/>
<label
  for="cM_k"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_k"
/>
<label
  for="cM_l"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_l"
/>
<label
  for="cM_m"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_m"
/>
<label
  for="cM_n"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_n"
/>
<label
  for="cM_o"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_o"
/>
<label
  for="cM_p"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_p"
/>
<label
  for="cM_q"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_q"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert(!/\s/.test(input.id), "IDREF whitespace: " + input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(document.getElementById(input.id), input);
}
```

# Update `{"keys":[9007199254740994,"1",1,"~0020","a b","~",".","new!key"]}`
```html
<h1
  id="cM_0"
>
  Keys
</h1>
<label
  for="cM_q"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_q"
/>
<label
  for="cM_l"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_l"
/>
<label
  for="cM_k"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_k"
/>
<label
  for="cM_9"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_9"
/>
<label
  for="cM_e"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_e"
/>
<label
  for="cM_8"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_8"
/>
<label
  for="cM_2"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_2"
/>
<label
  for="cM_r"
>
  Key
</label>
<input
  aria-labelledby="cM_0"
  id="cM_r"
/>
```
## Change
```
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #cM_1
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #cM_3
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #cM_4
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #cM_5
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #cM_6
REMOVE: #cM_2 + label
REMOVE: #cM_2 + #cM_7
REMOVE: #cM_9 + label
REMOVE: #cM_9 + #cM_a
REMOVE: #cM_9 + label
REMOVE: #cM_9 + #cM_b
REMOVE: #cM_9 + label
REMOVE: #cM_9 + #cM_c
REMOVE: #cM_9 + label
REMOVE: #cM_9 + #cM_d
REMOVE: #cM_e + label
REMOVE: #cM_e + #cM_f
REMOVE: #cM_e + label
REMOVE: #cM_e + #cM_g
REMOVE: #cM_e + label
REMOVE: #cM_e + #cM_h
REMOVE: #cM_e + label
REMOVE: #cM_e + #cM_i
REMOVE: #cM_e + label
REMOVE: #cM_e + #cM_j
REMOVE: #cM_l + label
REMOVE: #cM_l + #cM_m
REMOVE: #cM_l + label
REMOVE: #cM_l + #cM_n
REMOVE: #cM_l + label
REMOVE: #cM_l + #cM_o
REMOVE: #cM_l + label
REMOVE: #cM_l + #cM_p
INSERT: #cM_q + :is(label, #cM_r)
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #cM_2
INSERT: #cM_q + :is(label, #cM_2)
REMOVE: #cM_0 + label
REMOVE: #cM_0 + #cM_8
INSERT: #cM_q + :is(label, #cM_8)
REMOVE: #cM_e + label
REMOVE: #cM_e + #cM_k
INSERT: #cM_0 + :is(label, #cM_k)
REMOVE: #cM_e + label
REMOVE: #cM_e + #cM_l
INSERT: #cM_0 + :is(label, #cM_l)
REMOVE: #cM_e + label
REMOVE: #cM_e + #cM_q
INSERT: #cM_0 + :is(label, #cM_q)
UPDATE: #cM_r[aria-labelledby] null => "cM_0"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert(!/\s/.test(input.id), "IDREF whitespace: " + input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(document.getElementById(input.id), input);
}
```
