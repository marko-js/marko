# Render `{"items":[{"key":"a"},{"key":"b"}],"prefix":"old"}`
```html
<button>
  add
</button>
<h2
  id="sM_1"
>
  a
</h2>
<input
  aria-describedby="sM_1"
  title="old sM_1"
/>
<h2
  id="sM_2"
>
  b
</h2>
<input
  aria-describedby="sM_2"
  title="old sM_2"
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
  id="sM_1"
>
  a
</h2>
<input
  aria-describedby="sM_1"
  title="old sM_1"
/>
<h2
  id="sM_2"
>
  b
</h2>
<input
  aria-describedby="sM_2"
  title="old sM_2"
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
