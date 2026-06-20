# Render
```html
<button>
  +2
</button>
<div
  class="step"
  data-total="5"
>
  step: 0 / 5
</div>
<pre>
  5 18446744073709551616 Infinity 0
</pre>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  +2
</button>
<div
  class="step"
  data-total="5"
>
  step: 2 / 5
</div>
<pre>
  5 18446744073709551616 Infinity 2
</pre>
```
## Change
```
UPDATE: .step::text@6 "0" => "2"
UPDATE: pre::text@32 "0" => "2"
```
