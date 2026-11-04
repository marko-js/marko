# Render `{"items":[{"key":"a"},{"key":"b"}],"prefix":"old"}`
```html
<button>
  add
</button>
<h2
  id="cM_0"
>
  a
</h2>
<input
  aria-describedby="cM_0"
  title="old cM_0"
/>
<h2
  id="cM_1"
>
  b
</h2>
<input
  aria-describedby="cM_1"
  title="old cM_1"
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
  id="cM_0"
>
  a
</h2>
<input
  aria-describedby="cM_0"
  title="old cM_0"
/>
<h2
  id="cM_1"
>
  b
</h2>
<input
  aria-describedby="cM_1"
  title="old cM_1"
/>
<h2
  id="cM_2"
>
  c
</h2>
<input
  aria-describedby="cM_2"
  title="old cM_2"
/>
```
## Change
```
INSERT: input:nth-of-type(2) + :is(#cM_2, input)
UPDATE: input:nth-of-type(3)[title] null => "old cM_2"
```

# Update `{"items":[{"key":"a"},{"key":"b"}],"prefix":"next"}`
```html
<button>
  add
</button>
<h2
  id="cM_0"
>
  a
</h2>
<input
  aria-describedby="cM_0"
  title="next cM_0"
/>
<h2
  id="cM_1"
>
  b
</h2>
<input
  aria-describedby="cM_1"
  title="next cM_1"
/>
<h2
  id="cM_2"
>
  c
</h2>
<input
  aria-describedby="cM_2"
  title="next cM_2"
/>
```
## Change
```
UPDATE: input:nth-of-type(1)[title] "old cM_0" => "next cM_0"
UPDATE: input:nth-of-type(2)[title] "old cM_1" => "next cM_1"
UPDATE: input:nth-of-type(3)[title] "old cM_2" => "next cM_2"
```

# Update
```js
for (const input of document.querySelectorAll("input")) {
const id = input.getAttribute("aria-describedby");
assert(document.getElementById(id));
assert.equal(input.title, "next " + id);
}
```
