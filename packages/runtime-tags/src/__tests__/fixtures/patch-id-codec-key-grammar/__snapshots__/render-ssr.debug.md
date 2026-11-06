# Render `{"keys":["",".",":","=","+","*","!","~","~0020","a_x0020b","_","__","_D","a b","a\tb","a\nb","a\u0000b","🙂","\ud800",1,"1",-1,1.5,9007199254740991,9007199254740992,9007199254740994]}`
```html
<h1
  id="sM_.heading"
>
  Keys
</h1>
<label
  for="sM_[\"\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"\"].uid"
/>
<label
  for="sM_[\".\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\".\"].uid"
/>
<label
  for="sM_[\":\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\":\"].uid"
/>
<label
  for="sM_[\"=\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"=\"].uid"
/>
<label
  for="sM_[\"+\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"+\"].uid"
/>
<label
  for="sM_[\"*\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"*\"].uid"
/>
<label
  for="sM_[\"!\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"!\"].uid"
/>
<label
  for="sM_[\"~\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"~\"].uid"
/>
<label
  for="sM_[\"~0020\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"~0020\"].uid"
/>
<label
  for="sM_[\"a_x0020b\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"a_x0020b\"].uid"
/>
<label
  for="sM_[\"_\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"_\"].uid"
/>
<label
  for="sM_[\"__\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"__\"].uid"
/>
<label
  for="sM_[\"_D\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"_D\"].uid"
/>
<label
  for="sM_[\"a\\u0020b\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"a\\u0020b\"].uid"
/>
<label
  for="sM_[\"a\\tb\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"a\\tb\"].uid"
/>
<label
  for="sM_[\"a\\nb\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"a\\nb\"].uid"
/>
<label
  for="sM_[\"a\\u0000b\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"a\\u0000b\"].uid"
/>
<label
  for="sM_[\"🙂\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"🙂\"].uid"
/>
<label
  for="sM_[\"\\ud800\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"\\ud800\"].uid"
/>
<label
  for="sM_[1].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[1].uid"
/>
<label
  for="sM_[\"1\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"1\"].uid"
/>
<label
  for="sM_[-1].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[-1].uid"
/>
<label
  for="sM_[1.5].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[1.5].uid"
/>
<label
  for="sM_[9007199254740991].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[9007199254740991].uid"
/>
<label
  for="sM_[9007199254740992].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[9007199254740992].uid"
/>
<label
  for="sM_[9007199254740994].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[9007199254740994].uid"
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
  id="sM_.heading"
>
  Keys
</h1>
<label
  for="sM_[9007199254740994].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[9007199254740994].uid"
/>
<label
  for="sM_[\"1\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"1\"].uid"
/>
<label
  for="sM_[1].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[1].uid"
/>
<label
  for="sM_[\"~0020\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"~0020\"].uid"
/>
<label
  for="sM_[\"a\\u0020b\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"a\\u0020b\"].uid"
/>
<label
  for="sM_[\"~\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"~\"].uid"
/>
<label
  for="sM_[\".\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\".\"].uid"
/>
<label
  for="sM_[\"new!key\"].uid"
>
  Key
</label>
<input
  aria-labelledby="sM_.heading"
  id="sM_[\"new!key\"].uid"
/>
```
## Change
```
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_[""].uid
REMOVE: #sM_["."].uid + label
REMOVE: #sM_["."].uid + #sM_[":"].uid
REMOVE: #sM_["."].uid + label
REMOVE: #sM_["."].uid + #sM_["="].uid
REMOVE: #sM_["."].uid + label
REMOVE: #sM_["."].uid + #sM_["+"].uid
REMOVE: #sM_["."].uid + label
REMOVE: #sM_["."].uid + #sM_["*"].uid
REMOVE: #sM_["."].uid + label
REMOVE: #sM_["."].uid + #sM_["!"].uid
REMOVE: #sM_["~0020"].uid + label
REMOVE: #sM_["~0020"].uid + #sM_["a_x0020b"].uid
REMOVE: #sM_["~0020"].uid + label
REMOVE: #sM_["~0020"].uid + #sM_["_"].uid
REMOVE: #sM_["~0020"].uid + label
REMOVE: #sM_["~0020"].uid + #sM_["__"].uid
REMOVE: #sM_["~0020"].uid + label
REMOVE: #sM_["~0020"].uid + #sM_["_D"].uid
REMOVE: #sM_["a\u0020b"].uid + label
REMOVE: #sM_["a\u0020b"].uid + #sM_["a\tb"].uid
REMOVE: #sM_["a\u0020b"].uid + label
REMOVE: #sM_["a\u0020b"].uid + #sM_["a\nb"].uid
REMOVE: #sM_["a\u0020b"].uid + label
REMOVE: #sM_["a\u0020b"].uid + #sM_["a\u0000b"].uid
REMOVE: #sM_["a\u0020b"].uid + label
REMOVE: #sM_["a\u0020b"].uid + #sM_["🙂"].uid
REMOVE: #sM_["a\u0020b"].uid + label
REMOVE: #sM_["a\u0020b"].uid + #sM_["\ud800"].uid
REMOVE: #sM_["1"].uid + label
REMOVE: #sM_["1"].uid + #sM_[-1].uid
REMOVE: #sM_["1"].uid + label
REMOVE: #sM_["1"].uid + #sM_[1.5].uid
REMOVE: #sM_["1"].uid + label
REMOVE: #sM_["1"].uid + #sM_[9007199254740991].uid
REMOVE: #sM_["1"].uid + label
REMOVE: #sM_["1"].uid + #sM_[9007199254740992].uid
INSERT: #sM_[9007199254740994].uid + :is(label, #sM_["new!key"].uid)
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_["."].uid
INSERT: #sM_[9007199254740994].uid + :is(label, #sM_["."].uid)
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_["~"].uid
INSERT: #sM_[9007199254740994].uid + :is(label, #sM_["~"].uid)
REMOVE: #sM_["a\u0020b"].uid + label
REMOVE: #sM_["a\u0020b"].uid + #sM_[1].uid
INSERT: #sM_.heading + :is(label, #sM_[1].uid)
REMOVE: #sM_["a\u0020b"].uid + label
REMOVE: #sM_["a\u0020b"].uid + #sM_["1"].uid
INSERT: #sM_.heading + :is(label, #sM_["1"].uid)
REMOVE: #sM_["a\u0020b"].uid + label
REMOVE: #sM_["a\u0020b"].uid + #sM_[9007199254740994].uid
INSERT: #sM_.heading + :is(label, #sM_[9007199254740994].uid)
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
