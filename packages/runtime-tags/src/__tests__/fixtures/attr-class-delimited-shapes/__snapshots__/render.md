# Render
```html
<button>
  inc
</button>
<div
  class="a b dyn m1 n1 dyn computed o q"
/>
<div
  style="color:red;display:block;margin:0;padding:0"
/>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div
  class="a b dyn2 m1 n1 dyn2 computed o q"
/>
<div
  style="color:red;display:block;margin:0;padding:0"
/>
```
## Change
```
UPDATE: .a.b.dyn2.m1.n1.computed.o.q[class] "a b dyn m1 n1 dyn computed o q" => "a b dyn2 m1 n1 dyn2 computed o q"
```
