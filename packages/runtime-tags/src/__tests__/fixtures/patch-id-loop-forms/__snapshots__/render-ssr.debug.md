# Render `{"items":[{"key":"a"},{"key":"b"}],"record":{"a":1,"b":2},"start":0,"end":3}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_[0].#childScope/0@0.uid"
>
  a
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[1].#childScope/0@0.uid"
/>
<label
  for="sM_[\"a\"].#childScope/0@1.uid"
>
  a
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"a\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@1.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"a\"].#childScope/0@2.uid"
>
  a
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"a\"].#childScope/0@2.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@2.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@2.uid"
/>
<label
  for="sM_[\"key-a\"].#childScope/0@3.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"key-a\"].#childScope/0@3.uid"
/>
<label
  for="sM_[\"key-b\"].#childScope/0@3.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"key-b\"].#childScope/0@3.uid"
/>
<label
  for="sM_[0].#childScope/0@4.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@4.uid"
/>
<label
  for="sM_[1].#childScope/0@4.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[1].#childScope/0@4.uid"
/>
<label
  for="sM_[2].#childScope/0@4.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[2].#childScope/0@4.uid"
/>
<label
  for="sM_[3].#childScope/0@4.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[3].#childScope/0@4.uid"
/>
<label
  for="sM_[\"to-0\"].#childScope/0@5.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-0\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-1\"].#childScope/0@5.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-1\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-2\"].#childScope/0@5.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-2\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-3\"].#childScope/0@5.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-3\"].#childScope/0@5.uid"
/>
<label
  for="sM_[0].#childScope/0@6.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@6.uid"
/>
<label
  for="sM_[2].#childScope/0@6.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[2].#childScope/0@6.uid"
/>
<label
  for="sM_[\"until-0\"].#childScope/0@7.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"until-0\"].#childScope/0@7.uid"
/>
<label
  for="sM_[\"until-2\"].#childScope/0@7.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"until-2\"].#childScope/0@7.uid"
/>
```

# Update
```js
checkIds(document);
assert.equal(
  document.querySelectorAll("input[id]").length,
  count,
);
```

# Update `{"items":[{"key":"b"},{"key":"c"}],"record":{"b":2,"c":3},"start":1,"end":5}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_[0].#childScope/0@0.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[1].#childScope/0@0.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@1.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"c\"].#childScope/0@1.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"c\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@2.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@2.uid"
/>
<label
  for="sM_[\"c\"].#childScope/0@2.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"c\"].#childScope/0@2.uid"
/>
<label
  for="sM_[\"key-b\"].#childScope/0@3.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"key-b\"].#childScope/0@3.uid"
/>
<label
  for="sM_[\"key-c\"].#childScope/0@3.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"key-c\"].#childScope/0@3.uid"
/>
<label
  for="sM_[1].#childScope/0@4.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[1].#childScope/0@4.uid"
/>
<label
  for="sM_[2].#childScope/0@4.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[2].#childScope/0@4.uid"
/>
<label
  for="sM_[3].#childScope/0@4.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[3].#childScope/0@4.uid"
/>
<label
  for="sM_[4].#childScope/0@4.uid"
>
  4
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[4].#childScope/0@4.uid"
/>
<label
  for="sM_[5].#childScope/0@4.uid"
>
  5
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[5].#childScope/0@4.uid"
/>
<label
  for="sM_[\"to-1\"].#childScope/0@5.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-1\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-2\"].#childScope/0@5.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-2\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-3\"].#childScope/0@5.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-3\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-4\"].#childScope/0@5.uid"
>
  4
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-4\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-5\"].#childScope/0@5.uid"
>
  5
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-5\"].#childScope/0@5.uid"
/>
<label
  for="sM_[1].#childScope/0@6.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[1].#childScope/0@6.uid"
/>
<label
  for="sM_[3].#childScope/0@6.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[3].#childScope/0@6.uid"
/>
<label
  for="sM_[\"until-1\"].#childScope/0@7.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"until-1\"].#childScope/0@7.uid"
/>
<label
  for="sM_[\"until-3\"].#childScope/0@7.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"until-3\"].#childScope/0@7.uid"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "b" => "c"
REMOVE: #sM_[1].#childScope/0@0.uid + label
REMOVE: #sM_[1].#childScope/0@0.uid + #sM_["a"].#childScope/0@1.uid
INSERT: #sM_["b"].#childScope/0@1.uid + :is(label, #sM_["c"].#childScope/0@1.uid)
REMOVE: #sM_["c"].#childScope/0@1.uid + label
REMOVE: #sM_["c"].#childScope/0@1.uid + #sM_["a"].#childScope/0@2.uid
INSERT: #sM_["b"].#childScope/0@2.uid + :is(label, #sM_["c"].#childScope/0@2.uid)
REMOVE: #sM_["c"].#childScope/0@2.uid + label
REMOVE: #sM_["c"].#childScope/0@2.uid + #sM_["key-a"].#childScope/0@3.uid
INSERT: #sM_["key-b"].#childScope/0@3.uid + :is(label, #sM_["key-c"].#childScope/0@3.uid)
REMOVE: #sM_["key-c"].#childScope/0@3.uid + label
REMOVE: #sM_["key-c"].#childScope/0@3.uid + #sM_[0].#childScope/0@4.uid
INSERT: #sM_[3].#childScope/0@4.uid + :is(label, #sM_[5].#childScope/0@4.uid)
INSERT: #sM_[3].#childScope/0@4.uid + :is(label, #sM_[4].#childScope/0@4.uid)
REMOVE: #sM_[5].#childScope/0@4.uid + label
REMOVE: #sM_[5].#childScope/0@4.uid + #sM_["to-0"].#childScope/0@5.uid
INSERT: #sM_["to-3"].#childScope/0@5.uid + :is(label, #sM_["to-5"].#childScope/0@5.uid)
INSERT: #sM_["to-3"].#childScope/0@5.uid + :is(label, #sM_["to-4"].#childScope/0@5.uid)
REMOVE: #sM_["to-5"].#childScope/0@5.uid + label
REMOVE: #sM_["to-5"].#childScope/0@5.uid + #sM_[0].#childScope/0@6.uid
REMOVE: #sM_["to-5"].#childScope/0@5.uid + label
REMOVE: #sM_["to-5"].#childScope/0@5.uid + #sM_[2].#childScope/0@6.uid
INSERT: #sM_["to-5"].#childScope/0@5.uid + :is(label, #sM_[1].#childScope/0@6.uid)
INSERT: #sM_[1].#childScope/0@6.uid + :is(label, #sM_[3].#childScope/0@6.uid)
REMOVE: #sM_[3].#childScope/0@6.uid + label
REMOVE: #sM_[3].#childScope/0@6.uid + #sM_["until-0"].#childScope/0@7.uid
REMOVE: #sM_[3].#childScope/0@6.uid + label
REMOVE: #sM_[3].#childScope/0@6.uid + #sM_["until-2"].#childScope/0@7.uid
INSERT: #sM_[3].#childScope/0@6.uid + :is(label, #sM_["until-1"].#childScope/0@7.uid)
INSERT: #sM_["until-1"].#childScope/0@7.uid + :is(label, #sM_["until-3"].#childScope/0@7.uid)
```

# Update
```js
checkIds(document);
assert.equal(
  document.querySelectorAll("input[id]").length,
  count,
);
```

# Update `{"items":[],"record":{},"start":0,"end":0}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_[0].#childScope/0@4.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@4.uid"
/>
<label
  for="sM_[\"to-0\"].#childScope/0@5.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-0\"].#childScope/0@5.uid"
/>
```
## Change
```
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_[0].#childScope/0@0.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_[1].#childScope/0@0.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_["b"].#childScope/0@1.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_["c"].#childScope/0@1.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_["b"].#childScope/0@2.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_["c"].#childScope/0@2.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_["key-b"].#childScope/0@3.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_["key-c"].#childScope/0@3.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_[1].#childScope/0@4.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_[2].#childScope/0@4.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_[3].#childScope/0@4.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_[4].#childScope/0@4.uid
REMOVE: #sM_.heading + label
REMOVE: #sM_.heading + #sM_[5].#childScope/0@4.uid
INSERT: #sM_.heading + :is(label, #sM_[0].#childScope/0@4.uid)
REMOVE: #sM_[0].#childScope/0@4.uid + label
REMOVE: #sM_[0].#childScope/0@4.uid + #sM_["to-1"].#childScope/0@5.uid
REMOVE: #sM_[0].#childScope/0@4.uid + label
REMOVE: #sM_[0].#childScope/0@4.uid + #sM_["to-2"].#childScope/0@5.uid
REMOVE: #sM_[0].#childScope/0@4.uid + label
REMOVE: #sM_[0].#childScope/0@4.uid + #sM_["to-3"].#childScope/0@5.uid
REMOVE: #sM_[0].#childScope/0@4.uid + label
REMOVE: #sM_[0].#childScope/0@4.uid + #sM_["to-4"].#childScope/0@5.uid
REMOVE: #sM_[0].#childScope/0@4.uid + label
REMOVE: #sM_[0].#childScope/0@4.uid + #sM_["to-5"].#childScope/0@5.uid
INSERT: #sM_[0].#childScope/0@4.uid + :is(label, #sM_["to-0"].#childScope/0@5.uid)
REMOVE: #sM_["to-0"].#childScope/0@5.uid + label
REMOVE: #sM_["to-0"].#childScope/0@5.uid + #sM_[1].#childScope/0@6.uid
REMOVE: #sM_["to-0"].#childScope/0@5.uid + label
REMOVE: #sM_["to-0"].#childScope/0@5.uid + #sM_[3].#childScope/0@6.uid
REMOVE: #sM_["to-0"].#childScope/0@5.uid + label
REMOVE: #sM_["to-0"].#childScope/0@5.uid + #sM_["until-1"].#childScope/0@7.uid
REMOVE: #sM_["to-0"].#childScope/0@5.uid + label
REMOVE: #sM_["to-0"].#childScope/0@5.uid + #sM_["until-3"].#childScope/0@7.uid
```

# Update
```js
checkIds(document);
assert.equal(
  document.querySelectorAll("input[id]").length,
  count,
);
```

# Update `{"items":[{"key":"c"}],"record":{"c":4},"start":-2,"end":2}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_[0].#childScope/0@0.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@0.uid"
/>
<label
  for="sM_[\"c\"].#childScope/0@1.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"c\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"c\"].#childScope/0@2.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"c\"].#childScope/0@2.uid"
/>
<label
  for="sM_[\"key-c\"].#childScope/0@3.uid"
>
  4
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"key-c\"].#childScope/0@3.uid"
/>
<label
  for="sM_[-2].#childScope/0@4.uid"
>
  -2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[-2].#childScope/0@4.uid"
/>
<label
  for="sM_[-1].#childScope/0@4.uid"
>
  -1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[-1].#childScope/0@4.uid"
/>
<label
  for="sM_[0].#childScope/0@4.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@4.uid"
/>
<label
  for="sM_[1].#childScope/0@4.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[1].#childScope/0@4.uid"
/>
<label
  for="sM_[2].#childScope/0@4.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[2].#childScope/0@4.uid"
/>
<label
  for="sM_[\"to--2\"].#childScope/0@5.uid"
>
  -2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to--2\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to--1\"].#childScope/0@5.uid"
>
  -1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to--1\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-0\"].#childScope/0@5.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-0\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-1\"].#childScope/0@5.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-1\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-2\"].#childScope/0@5.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-2\"].#childScope/0@5.uid"
/>
<label
  for="sM_[-2].#childScope/0@6.uid"
>
  -2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[-2].#childScope/0@6.uid"
/>
<label
  for="sM_[0].#childScope/0@6.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@6.uid"
/>
<label
  for="sM_[\"until--2\"].#childScope/0@7.uid"
>
  -2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"until--2\"].#childScope/0@7.uid"
/>
<label
  for="sM_[\"until-0\"].#childScope/0@7.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"until-0\"].#childScope/0@7.uid"
/>
```
## Change
```
INSERT: #sM_.heading + :is(label, #sM_[0].#childScope/0@0.uid)
INSERT: #sM_[0].#childScope/0@0.uid + :is(label, #sM_["c"].#childScope/0@1.uid)
INSERT: #sM_["c"].#childScope/0@1.uid + :is(label, #sM_["c"].#childScope/0@2.uid)
INSERT: #sM_["c"].#childScope/0@2.uid + :is(label, #sM_["key-c"].#childScope/0@3.uid)
INSERT: #sM_[0].#childScope/0@4.uid + :is(label, #sM_[2].#childScope/0@4.uid)
INSERT: #sM_[0].#childScope/0@4.uid + :is(label, #sM_[1].#childScope/0@4.uid)
INSERT: #sM_["key-c"].#childScope/0@3.uid + :is(label, #sM_[-1].#childScope/0@4.uid)
INSERT: #sM_["key-c"].#childScope/0@3.uid + :is(label, #sM_[-2].#childScope/0@4.uid)
INSERT: #sM_["to-0"].#childScope/0@5.uid + :is(label, #sM_["to-2"].#childScope/0@5.uid)
INSERT: #sM_["to-0"].#childScope/0@5.uid + :is(label, #sM_["to-1"].#childScope/0@5.uid)
INSERT: #sM_[2].#childScope/0@4.uid + :is(label, #sM_["to--1"].#childScope/0@5.uid)
INSERT: #sM_[2].#childScope/0@4.uid + :is(label, #sM_["to--2"].#childScope/0@5.uid)
INSERT: #sM_["to-2"].#childScope/0@5.uid + :is(label, #sM_[-2].#childScope/0@6.uid)
INSERT: #sM_[-2].#childScope/0@6.uid + :is(label, #sM_[0].#childScope/0@6.uid)
INSERT: #sM_[0].#childScope/0@6.uid + :is(label, #sM_["until--2"].#childScope/0@7.uid)
INSERT: #sM_["until--2"].#childScope/0@7.uid + :is(label, #sM_["until-0"].#childScope/0@7.uid)
```

# Update
```js
checkIds(document);
assert.equal(
  document.querySelectorAll("input[id]").length,
  count,
);
```

# Update `{"items":[{"key":"a"},{"key":"b"},{"key":"c"}],"record":{"a":1,"b":2,"c":3},"start":0,"end":4}`
```html
<h1
  id="sM_.heading"
>
  Fields
</h1>
<label
  for="sM_[0].#childScope/0@0.uid"
>
  a
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[1].#childScope/0@0.uid"
/>
<label
  for="sM_[2].#childScope/0@0.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[2].#childScope/0@0.uid"
/>
<label
  for="sM_[\"a\"].#childScope/0@1.uid"
>
  a
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"a\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@1.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"c\"].#childScope/0@1.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"c\"].#childScope/0@1.uid"
/>
<label
  for="sM_[\"a\"].#childScope/0@2.uid"
>
  a
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"a\"].#childScope/0@2.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@2.uid"
>
  b
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"b\"].#childScope/0@2.uid"
/>
<label
  for="sM_[\"c\"].#childScope/0@2.uid"
>
  c
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"c\"].#childScope/0@2.uid"
/>
<label
  for="sM_[\"key-a\"].#childScope/0@3.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"key-a\"].#childScope/0@3.uid"
/>
<label
  for="sM_[\"key-b\"].#childScope/0@3.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"key-b\"].#childScope/0@3.uid"
/>
<label
  for="sM_[\"key-c\"].#childScope/0@3.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"key-c\"].#childScope/0@3.uid"
/>
<label
  for="sM_[0].#childScope/0@4.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@4.uid"
/>
<label
  for="sM_[1].#childScope/0@4.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[1].#childScope/0@4.uid"
/>
<label
  for="sM_[2].#childScope/0@4.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[2].#childScope/0@4.uid"
/>
<label
  for="sM_[3].#childScope/0@4.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[3].#childScope/0@4.uid"
/>
<label
  for="sM_[4].#childScope/0@4.uid"
>
  4
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[4].#childScope/0@4.uid"
/>
<label
  for="sM_[\"to-0\"].#childScope/0@5.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-0\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-1\"].#childScope/0@5.uid"
>
  1
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-1\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-2\"].#childScope/0@5.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-2\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-3\"].#childScope/0@5.uid"
>
  3
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-3\"].#childScope/0@5.uid"
/>
<label
  for="sM_[\"to-4\"].#childScope/0@5.uid"
>
  4
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"to-4\"].#childScope/0@5.uid"
/>
<label
  for="sM_[0].#childScope/0@6.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[0].#childScope/0@6.uid"
/>
<label
  for="sM_[2].#childScope/0@6.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[2].#childScope/0@6.uid"
/>
<label
  for="sM_[\"until-0\"].#childScope/0@7.uid"
>
  0
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"until-0\"].#childScope/0@7.uid"
/>
<label
  for="sM_[\"until-2\"].#childScope/0@7.uid"
>
  2
</label>
<input
  aria-describedby="sM_.heading"
  id="sM_[\"until-2\"].#childScope/0@7.uid"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "c" => "a"
INSERT: #sM_[0].#childScope/0@0.uid + :is(label, #sM_[1].#childScope/0@0.uid)
INSERT: #sM_[1].#childScope/0@0.uid + :is(label, #sM_[2].#childScope/0@0.uid)
INSERT: #sM_[2].#childScope/0@0.uid + :is(label, #sM_["a"].#childScope/0@1.uid)
INSERT: #sM_["a"].#childScope/0@1.uid + :is(label, #sM_["b"].#childScope/0@1.uid)
INSERT: #sM_["c"].#childScope/0@1.uid + :is(label, #sM_["a"].#childScope/0@2.uid)
INSERT: #sM_["a"].#childScope/0@2.uid + :is(label, #sM_["b"].#childScope/0@2.uid)
UPDATE: label:nth-of-type(12)::text "4" => "3"
INSERT: #sM_["c"].#childScope/0@2.uid + :is(label, #sM_["key-a"].#childScope/0@3.uid)
INSERT: #sM_["key-a"].#childScope/0@3.uid + :is(label, #sM_["key-b"].#childScope/0@3.uid)
REMOVE: #sM_["key-c"].#childScope/0@3.uid + label
REMOVE: #sM_["key-c"].#childScope/0@3.uid + #sM_[-2].#childScope/0@4.uid
REMOVE: #sM_["key-c"].#childScope/0@3.uid + label
REMOVE: #sM_["key-c"].#childScope/0@3.uid + #sM_[-1].#childScope/0@4.uid
INSERT: #sM_[2].#childScope/0@4.uid + :is(label, #sM_[4].#childScope/0@4.uid)
INSERT: #sM_[2].#childScope/0@4.uid + :is(label, #sM_[3].#childScope/0@4.uid)
REMOVE: #sM_[4].#childScope/0@4.uid + label
REMOVE: #sM_[4].#childScope/0@4.uid + #sM_["to--2"].#childScope/0@5.uid
REMOVE: #sM_[4].#childScope/0@4.uid + label
REMOVE: #sM_[4].#childScope/0@4.uid + #sM_["to--1"].#childScope/0@5.uid
INSERT: #sM_["to-2"].#childScope/0@5.uid + :is(label, #sM_["to-4"].#childScope/0@5.uid)
INSERT: #sM_["to-2"].#childScope/0@5.uid + :is(label, #sM_["to-3"].#childScope/0@5.uid)
REMOVE: #sM_["to-4"].#childScope/0@5.uid + label
REMOVE: #sM_["to-4"].#childScope/0@5.uid + #sM_[-2].#childScope/0@6.uid
INSERT: #sM_[0].#childScope/0@6.uid + :is(label, #sM_[2].#childScope/0@6.uid)
REMOVE: #sM_[2].#childScope/0@6.uid + label
REMOVE: #sM_[2].#childScope/0@6.uid + #sM_["until--2"].#childScope/0@7.uid
INSERT: #sM_["until-0"].#childScope/0@7.uid + :is(label, #sM_["until-2"].#childScope/0@7.uid)
```

# Update
```js
checkIds(document);
assert.equal(
  document.querySelectorAll("input[id]").length,
  count,
);
```
