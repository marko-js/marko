# Render `{"items":[{"key":"a"},{"key":"b"}],"prefix":"old"}`
```html
<button>
  add
</button>
<h2
  id="sM_gaA"
>
  a
</h2>
<input
  aria-describedby="sM_gaA"
  title="old sM_gaA"
/>
<h2
  id="sM_gbA"
>
  b
</h2>
<input
  aria-describedby="sM_gbA"
  title="old sM_gbA"
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
  id="sM_gaA"
>
  a
</h2>
<input
  aria-describedby="sM_gaA"
  title="old sM_gaA"
/>
<h2
  id="sM_gbA"
>
  b
</h2>
<input
  aria-describedby="sM_gbA"
  title="old sM_gbA"
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
  id="sM_gaA"
>
  a
</h2>
<input
  aria-describedby="sM_gaA"
  title="next sM_gaA"
/>
<h2
  id="sM_gbA"
>
  b
</h2>
<input
  aria-describedby="sM_gbA"
  title="next sM_gbA"
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
UPDATE: input:nth-of-type(1)[title] "old sM_gaA" => "next sM_gaA"
UPDATE: input:nth-of-type(2)[title] "old sM_gbA" => "next sM_gbA"
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
