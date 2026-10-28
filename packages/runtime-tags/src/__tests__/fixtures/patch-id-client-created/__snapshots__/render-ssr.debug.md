# Render `{"items":[{"key":"a"},{"key":"b"}],"prefix":"old"}`
```html
<button>
  add
</button>
<h2
  id="sM_[\"a\"].headingId"
>
  a
</h2>
<input
  aria-describedby="sM_[\"a\"].headingId"
  title="old sM_[\"a\"].headingId"
/>
<h2
  id="sM_[\"b\"].headingId"
>
  b
</h2>
<input
  aria-describedby="sM_[\"b\"].headingId"
  title="old sM_[\"b\"].headingId"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  add
</button>
<h2
  id="sM_[\"a\"].headingId"
>
  a
</h2>
<input
  aria-describedby="sM_[\"a\"].headingId"
  title="old sM_[\"a\"].headingId"
/>
<h2
  id="sM_[\"b\"].headingId"
>
  b
</h2>
<input
  aria-describedby="sM_[\"b\"].headingId"
  title="old sM_[\"b\"].headingId"
/>
<h2
  id="cM_0"
>
  c
</h2>
<input
  aria-describedby="cM_0"
  title="old cM_0"
/>
```
## Change
```
INSERT: input:nth-of-type(2) + :is(#cM_0, input)
UPDATE: input:nth-of-type(3)[title] null => "old cM_0"
```

# Update `{"items":[{"key":"a"},{"key":"b"}],"prefix":"next"}`
```html
<button>
  add
</button>
<h2
  id="sM_[\"a\"].headingId"
>
  a
</h2>
<input
  aria-describedby="sM_[\"a\"].headingId"
  title="next sM_[\"a\"].headingId"
/>
<h2
  id="sM_[\"b\"].headingId"
>
  b
</h2>
<input
  aria-describedby="sM_[\"b\"].headingId"
  title="next sM_[\"b\"].headingId"
/>
<h2
  id="cM_0"
>
  c
</h2>
<input
  aria-describedby="cM_0"
  title="next cM_0"
/>
```
## Change
```
UPDATE: input:nth-of-type(1)[title] "old sM_[\"a\"].headingId" => "next sM_[\"a\"].headingId"
UPDATE: input:nth-of-type(2)[title] "old sM_[\"b\"].headingId" => "next sM_[\"b\"].headingId"
UPDATE: input:nth-of-type(3)[title] "old cM_0" => "next cM_0"
```

# Update
```js
for (const input of document.querySelectorAll("input")) {
const id = input.getAttribute("aria-describedby");
assert(document.getElementById(id));
assert.equal(input.title, "next " + id);
}
```
