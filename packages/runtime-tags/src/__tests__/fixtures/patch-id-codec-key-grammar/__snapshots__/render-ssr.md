# Render `{"keys":["",".",":","=","+","*","!","~","~0020","a_x0020b","_","__","_D","a b","a\tb","a\nb","a\u0000b","🙂","\ud800",1,"1",-1,1.5,9007199254740991,9007199254740992,9007199254740994]}`
```html
<h1
  id="sM_A"
>
  Keys
</h1>
<label
  for="sM_fB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_fB"
/>
<label
  for="sM_R4_00KB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_00KB"
/>
<label
  for="sM_R4_00WB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_00WB"
/>
<label
  for="sM_R4_00ZB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_00ZB"
/>
<label
  for="sM_R4_00HB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_00HB"
/>
<label
  for="sM_R4_00GB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_00GB"
/>
<label
  for="sM_R4_00xB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_00xB"
/>
<label
  for="sM_R4_01_B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_01_B"
/>
<label
  for="sM_R8_01_0020B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R8_01_0020B"
/>
<label
  for="sM_na_x0020bB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_na_x0020bB"
/>
<label
  for="sM_g_B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_g_B"
/>
<label
  for="sM_h__B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_h__B"
/>
<label
  for="sM_h_DB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_h_DB"
/>
<label
  for="sM_R6a_00wbB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R6a_00wbB"
/>
<label
  for="sM_R6a_009bB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R6a_009bB"
/>
<label
  for="sM_R6a_00abB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R6a_00abB"
/>
<label
  for="sM_R6a_000bB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R6a_000bB"
/>
<label
  for="sM_R8_dwZ_dV2B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R8_dwZ_dV2B"
/>
<label
  for="sM_R4_dw0B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_dw0B"
/>
<label
  for="sM_1B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_1B"
/>
<label
  for="sM_g1B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_g1B"
/>
<label
  for="sM_S2-1B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_S2-1B"
/>
<label
  for="sM_S61_00K5B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_S61_00K5B"
/>
<label
  for="sM_e9v--------B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_e9v--------B"
/>
<label
  for="sM_Sag9007199254740992B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_Sag9007199254740992B"
/>
<label
  for="sM_Sag9007199254740994B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_Sag9007199254740994B"
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
  id="sM_A"
>
  Keys
</h1>
<label
  for="sM_Sag9007199254740994B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_Sag9007199254740994B"
/>
<label
  for="sM_g1B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_g1B"
/>
<label
  for="sM_1B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_1B"
/>
<label
  for="sM_R8_01_0020B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R8_01_0020B"
/>
<label
  for="sM_R6a_00wbB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R6a_00wbB"
/>
<label
  for="sM_R4_01_B"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_01_B"
/>
<label
  for="sM_R4_00KB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_R4_00KB"
/>
<label
  for="sM_Raanew_00xkeyB"
>
  Key
</label>
<input
  aria-labelledby="sM_A"
  id="sM_Raanew_00xkeyB"
/>
```
## Change
```
REMOVE: #sM_A + label
REMOVE: #sM_A + #sM_fB
REMOVE: #sM_R4_00KB + label
REMOVE: #sM_R4_00KB + #sM_R4_00WB
REMOVE: #sM_R4_00KB + label
REMOVE: #sM_R4_00KB + #sM_R4_00ZB
REMOVE: #sM_R4_00KB + label
REMOVE: #sM_R4_00KB + #sM_R4_00HB
REMOVE: #sM_R4_00KB + label
REMOVE: #sM_R4_00KB + #sM_R4_00GB
REMOVE: #sM_R4_00KB + label
REMOVE: #sM_R4_00KB + #sM_R4_00xB
REMOVE: #sM_R8_01_0020B + label
REMOVE: #sM_R8_01_0020B + #sM_na_x0020bB
REMOVE: #sM_R8_01_0020B + label
REMOVE: #sM_R8_01_0020B + #sM_g_B
REMOVE: #sM_R8_01_0020B + label
REMOVE: #sM_R8_01_0020B + #sM_h__B
REMOVE: #sM_R8_01_0020B + label
REMOVE: #sM_R8_01_0020B + #sM_h_DB
REMOVE: #sM_R6a_00wbB + label
REMOVE: #sM_R6a_00wbB + #sM_R6a_009bB
REMOVE: #sM_R6a_00wbB + label
REMOVE: #sM_R6a_00wbB + #sM_R6a_00abB
REMOVE: #sM_R6a_00wbB + label
REMOVE: #sM_R6a_00wbB + #sM_R6a_000bB
REMOVE: #sM_R6a_00wbB + label
REMOVE: #sM_R6a_00wbB + #sM_R8_dwZ_dV2B
REMOVE: #sM_R6a_00wbB + label
REMOVE: #sM_R6a_00wbB + #sM_R4_dw0B
REMOVE: #sM_g1B + label
REMOVE: #sM_g1B + #sM_S2-1B
REMOVE: #sM_g1B + label
REMOVE: #sM_g1B + #sM_S61_00K5B
REMOVE: #sM_g1B + label
REMOVE: #sM_g1B + #sM_e9v--------B
REMOVE: #sM_g1B + label
REMOVE: #sM_g1B + #sM_Sag9007199254740992B
INSERT: #sM_Sag9007199254740994B + :is(label, #sM_Raanew_00xkeyB)
REMOVE: #sM_A + label
REMOVE: #sM_A + #sM_R4_00KB
INSERT: #sM_Sag9007199254740994B + :is(label, #sM_R4_00KB)
REMOVE: #sM_A + label
REMOVE: #sM_A + #sM_R4_01_B
INSERT: #sM_Sag9007199254740994B + :is(label, #sM_R4_01_B)
REMOVE: #sM_R6a_00wbB + label
REMOVE: #sM_R6a_00wbB + #sM_1B
INSERT: #sM_A + :is(label, #sM_1B)
REMOVE: #sM_R6a_00wbB + label
REMOVE: #sM_R6a_00wbB + #sM_g1B
INSERT: #sM_A + :is(label, #sM_g1B)
REMOVE: #sM_R6a_00wbB + label
REMOVE: #sM_R6a_00wbB + #sM_Sag9007199254740994B
INSERT: #sM_A + :is(label, #sM_Sag9007199254740994B)
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
