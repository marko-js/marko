# Render `{"keys":[0,"0","a b","a_b","💠","","1Sa2Da0","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",-1,1.5],"show":false}`
```html
<label
  for="cM_0"
>
  0
</label>
<input
  id="cM_0"
/>
<p>
  0:0
</p>
<label
  for="cM_1"
>
  0
</label>
<input
  id="cM_1"
/>
<p>
  0:0
</p>
<label
  for="cM_2"
>
  a b
</label>
<input
  id="cM_2"
/>
<p>
  a b:0
</p>
<label
  for="cM_3"
>
  a_b
</label>
<input
  id="cM_3"
/>
<p>
  a_b:0
</p>
<label
  for="cM_4"
>
  💠
</label>
<input
  id="cM_4"
/>
<p>
  💠:0
</p>
<label
  for="cM_5"
/>
<input
  id="cM_5"
/>
<p>
  :0
</p>
<label
  for="cM_6"
>
  1Sa2Da0
</label>
<input
  id="cM_6"
/>
<p>
  1Sa2Da0:0
</p>
<label
  for="cM_7"
>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</label>
<input
  id="cM_7"
/>
<p>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:0
</p>
<label
  for="cM_8"
>
  -1
</label>
<input
  id="cM_8"
/>
<p>
  -1:0
</p>
<label
  for="cM_9"
>
  1.5
</label>
<input
  id="cM_9"
/>
<p>
  1.5:0
</p>
```

# Update `{"keys":[1.5,-1,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","1Sa2Da0","","💠","a_b","a b","0",0],"show":true}`
```html
<label
  for="cM_9"
>
  1.5
</label>
<input
  id="cM_9"
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
  for="cM_8"
>
  -1
</label>
<input
  id="cM_8"
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
  for="cM_7"
>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</label>
<input
  id="cM_7"
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
  for="cM_6"
>
  1Sa2Da0
</label>
<input
  id="cM_6"
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
  for="cM_5"
/>
<input
  id="cM_5"
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
  for="cM_4"
>
  💠
</label>
<input
  id="cM_4"
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
  for="cM_3"
>
  a_b
</label>
<input
  id="cM_3"
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
  for="cM_2"
>
  a b
</label>
<input
  id="cM_2"
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
  for="cM_1"
>
  0
</label>
<input
  id="cM_1"
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
  for="cM_0"
>
  0
</label>
<input
  id="cM_0"
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
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #cM_1
REMOVE: button:nth-of-type(10) + p
INSERT: label, #cM_1, p
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #cM_2
REMOVE: button:nth-of-type(10) + p
INSERT: label, #cM_2, p
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #cM_3
REMOVE: button:nth-of-type(10) + p
INSERT: label, #cM_3, p
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #cM_4
REMOVE: button:nth-of-type(10) + p
INSERT: label, #cM_4, p
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #cM_5
REMOVE: button:nth-of-type(10) + p
INSERT: label, #cM_5, p
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #cM_6
REMOVE: button:nth-of-type(10) + p
INSERT: label, #cM_6, p
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #cM_7
REMOVE: button:nth-of-type(10) + p
INSERT: label, #cM_7, p
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #cM_8
REMOVE: button:nth-of-type(10) + p
INSERT: label, #cM_8, p
REMOVE: button:nth-of-type(10) + label
REMOVE: button:nth-of-type(10) + #cM_9
REMOVE: button:nth-of-type(10) + p
INSERT: label, #cM_9, p
INSERT: p:nth-of-type(10) + :is(span, button)
INSERT: p:nth-of-type(9) + :is(span, button)
INSERT: p:nth-of-type(8) + :is(span, button)
INSERT: p:nth-of-type(7) + :is(span, button)
INSERT: p:nth-of-type(6) + :is(span, button)
INSERT: p:nth-of-type(5) + :is(span, button)
INSERT: p:nth-of-type(4) + :is(span, button)
INSERT: p:nth-of-type(3) + :is(span, button)
INSERT: p:nth-of-type(2) + :is(span, button)
INSERT: p:nth-of-type(1) + :is(span, button)
UPDATE: span:nth-of-type(10)::text@5 "" => "0"
UPDATE: span:nth-of-type(9)::text@5 "" => "0"
UPDATE: span:nth-of-type(8)::text@5 "" => "0"
UPDATE: span:nth-of-type(7)::text@5 "" => "0"
UPDATE: span:nth-of-type(6)::text@5 "" => "0"
UPDATE: span:nth-of-type(5)::text@5 "" => "0"
UPDATE: span:nth-of-type(4)::text@5 "" => "0"
UPDATE: span:nth-of-type(3)::text@5 "" => "0"
UPDATE: span:nth-of-type(2)::text@5 "" => "0"
UPDATE: span:nth-of-type(1)::text@5 "" => "0"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert(/^[A-Za-z][A-Za-z0-9_-]*$/.test(input.id), input.id);
for (const button of document.querySelectorAll("button")) button.click();
}
```
```html
<label
  for="cM_9"
>
  1.5
</label>
<input
  id="cM_9"
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
  for="cM_8"
>
  -1
</label>
<input
  id="cM_8"
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
  for="cM_7"
>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</label>
<input
  id="cM_7"
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
  for="cM_6"
>
  1Sa2Da0
</label>
<input
  id="cM_6"
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
  for="cM_5"
/>
<input
  id="cM_5"
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
  for="cM_4"
>
  💠
</label>
<input
  id="cM_4"
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
  for="cM_3"
>
  a_b
</label>
<input
  id="cM_3"
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
  for="cM_2"
>
  a b
</label>
<input
  id="cM_2"
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
  for="cM_1"
>
  0
</label>
<input
  id="cM_1"
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
  for="cM_0"
>
  0
</label>
<input
  id="cM_0"
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
