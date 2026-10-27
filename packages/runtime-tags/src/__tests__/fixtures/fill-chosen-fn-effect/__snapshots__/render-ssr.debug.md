# Render `{"upper":false}`
```html
<pre
  id="log"
>
  new;
</pre>
<div
  id="d"
/>
<main>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<pre
  id="log"
>
  new;
</pre>
<div
  id="d"
/>
<main>
  <p>
    function
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "function"
```
