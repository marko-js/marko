# Render `{"keys":[0,"0","a b","a_b","💠","","1Sa2Da0","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",-1,1.5],"show":false}`
```html
<label
  for="sM_0A"
>
  0
</label>
<input
  id="sM_0A"
/>
<p>
  0:0
</p>
<label
  for="sM_g0A"
>
  0
</label>
<input
  id="sM_g0A"
/>
<p>
  0:0
</p>
<label
  for="sM_R6a_00wbA"
>
  a b
</label>
<input
  id="sM_R6a_00wbA"
/>
<p>
  a b:0
</p>
<label
  for="sM_ia_bA"
>
  a_b
</label>
<input
  id="sM_ia_bA"
/>
<p>
  a_b:0
</p>
<label
  for="sM_R8_dwZ_dOwA"
>
  💠
</label>
<input
  id="sM_R8_dwZ_dOwA"
/>
<p>
  💠:0
</p>
<label
  for="sM_fA"
/>
<input
  id="sM_fA"
/>
<p>
  :0
</p>
<label
  for="sM_m1Sa2Da0A"
>
  1Sa2Da0
</label>
<input
  id="sM_m1Sa2Da0A"
/>
<p>
  1Sa2Da0:0
</p>
<label
  for="sM_PaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA"
>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</label>
<input
  id="sM_PaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA"
/>
<p>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:0
</p>
<label
  for="sM_S2-1A"
>
  -1
</label>
<input
  id="sM_S2-1A"
/>
<p>
  -1:0
</p>
<label
  for="sM_S61_00K5A"
>
  1.5
</label>
<input
  id="sM_S61_00K5A"
/>
<p>
  1.5:0
</p>
```

# Update `{"keys":[1.5,-1,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","1Sa2Da0","","💠","a_b","a b","0",0],"show":true}`
```html
<label
  for="sM_S61_00K5A"
>
  1.5
</label>
<input
  id="sM_S61_00K5A"
/>
<p>
  1.5:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_S2-1A"
>
  -1
</label>
<input
  id="sM_S2-1A"
/>
<p>
  -1:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_PaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA"
>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</label>
<input
  id="sM_PaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA"
/>
<p>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_m1Sa2Da0A"
>
  1Sa2Da0
</label>
<input
  id="sM_m1Sa2Da0A"
/>
<p>
  1Sa2Da0:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_fA"
/>
<input
  id="sM_fA"
/>
<p>
  :0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_R8_dwZ_dOwA"
>
  💠
</label>
<input
  id="sM_R8_dwZ_dOwA"
/>
<p>
  💠:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_ia_bA"
>
  a_b
</label>
<input
  id="sM_ia_bA"
/>
<p>
  a_b:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_R6a_00wbA"
>
  a b
</label>
<input
  id="sM_R6a_00wbA"
/>
<p>
  a b:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_g0A"
>
  0
</label>
<input
  id="sM_g0A"
/>
<p>
  0:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_0A"
>
  0
</label>
<input
  id="sM_0A"
/>
<p>
  0:0
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
REMOVE: button:nth-of-type(2) + span
REMOVE: button:nth-of-type(2) + button
INSERT: p:nth-of-type(2) + :is(span, button)
INSERT: p:nth-of-type(3) + :is(span, button)
REMOVE: button:nth-of-type(3) + span
REMOVE: button:nth-of-type(3) + button
INSERT: p:nth-of-type(3) + :is(span, button)
INSERT: p:nth-of-type(4) + :is(span, button)
REMOVE: button:nth-of-type(4) + span
REMOVE: button:nth-of-type(4) + button
INSERT: p:nth-of-type(4) + :is(span, button)
INSERT: p:nth-of-type(5) + :is(span, button)
REMOVE: button:nth-of-type(5) + span
REMOVE: button:nth-of-type(5) + button
INSERT: p:nth-of-type(5) + :is(span, button)
INSERT: p:nth-of-type(6) + :is(span, button)
REMOVE: button:nth-of-type(6) + span
REMOVE: button:nth-of-type(6) + button
INSERT: p:nth-of-type(6) + :is(span, button)
INSERT: p:nth-of-type(7) + :is(span, button)
REMOVE: button:nth-of-type(7) + span
REMOVE: button:nth-of-type(7) + button
INSERT: p:nth-of-type(7) + :is(span, button)
INSERT: p:nth-of-type(8) + :is(span, button)
REMOVE: button:nth-of-type(8) + span
REMOVE: button:nth-of-type(8) + button
INSERT: p:nth-of-type(8) + :is(span, button)
INSERT: p:nth-of-type(9) + :is(span, button)
REMOVE: button:nth-of-type(9) + span
REMOVE: button:nth-of-type(9) + button
INSERT: p:nth-of-type(9) + :is(span, button)
INSERT: p:nth-of-type(10) + :is(span, button)
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: p:nth-of-type(10) + :is(span, button)
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #sM_g0A
REMOVE: button:nth-of-type(10) + p
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: label, #sM_g0A, p, span, button
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #sM_R6a_00wbA
REMOVE: button:nth-of-type(10) + p
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: label, #sM_R6a_00wbA, p, span, button
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #sM_ia_bA
REMOVE: button:nth-of-type(10) + p
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: label, #sM_ia_bA, p, span, button
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #sM_R8_dwZ_dOwA
REMOVE: button:nth-of-type(10) + p
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: label, #sM_R8_dwZ_dOwA, p, span, button
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #sM_fA
REMOVE: button:nth-of-type(10) + p
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: label, #sM_fA, p, span, button
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #sM_m1Sa2Da0A
REMOVE: button:nth-of-type(10) + p
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: label, #sM_m1Sa2Da0A, p, span, button
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #sM_PaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA
REMOVE: button:nth-of-type(10) + p
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: label, #sM_PaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA, p, span, button
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #sM_S2-1A
REMOVE: button:nth-of-type(10) + p
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: label, #sM_S2-1A, p, span, button
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #sM_S61_00K5A
REMOVE: button:nth-of-type(10) + p
REMOVE: button:nth-of-type(10) + span
REMOVE: button:nth-of-type(10) + button
INSERT: label, #sM_S61_00K5A, p, span, button
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  // An optimized id is a plain token; a debug one reads as its hops.
  assert(/^[A-Za-z][A-Za-z0-9_-]*$|^sM_[.[]/.test(input.id), input.id);
for (const button of document.querySelectorAll("button")) button.click();
}
```
```html
<label
  for="sM_S61_00K5A"
>
  1.5
</label>
<input
  id="sM_S61_00K5A"
/>
<p>
  1.5:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_S2-1A"
>
  -1
</label>
<input
  id="sM_S2-1A"
/>
<p>
  -1:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_PaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA"
>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</label>
<input
  id="sM_PaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA"
/>
<p>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_m1Sa2Da0A"
>
  1Sa2Da0
</label>
<input
  id="sM_m1Sa2Da0A"
/>
<p>
  1Sa2Da0:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_fA"
/>
<input
  id="sM_fA"
/>
<p>
  :1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_R8_dwZ_dOwA"
>
  💠
</label>
<input
  id="sM_R8_dwZ_dOwA"
/>
<p>
  💠:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_ia_bA"
>
  a_b
</label>
<input
  id="sM_ia_bA"
/>
<p>
  a_b:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_R6a_00wbA"
>
  a b
</label>
<input
  id="sM_R6a_00wbA"
/>
<p>
  a b:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_g0A"
>
  0
</label>
<input
  id="sM_g0A"
/>
<p>
  0:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<label
  for="sM_0A"
>
  0
</label>
<input
  id="sM_0A"
/>
<p>
  0:1
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
UPDATE: p:nth-of-type(10)::text@2 "0" => "1"
UPDATE: p:nth-of-type(9)::text@2 "0" => "1"
UPDATE: p:nth-of-type(8)::text@4 "0" => "1"
UPDATE: p:nth-of-type(7)::text@4 "0" => "1"
UPDATE: p:nth-of-type(6)::text@3 "0" => "1"
UPDATE: p:nth-of-type(5)::text@1 "0" => "1"
UPDATE: p:nth-of-type(4)::text@8 "0" => "1"
UPDATE: p:nth-of-type(3)::text@37 "0" => "1"
UPDATE: p:nth-of-type(2)::text@3 "0" => "1"
UPDATE: p:nth-of-type(1)::text@4 "0" => "1"
```

# Update
```js
for (const p of document.querySelectorAll("p"))
assert(p.textContent.endsWith(":1"));
```
