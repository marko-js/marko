# Render
```html
<button>
  inc
</button>
<div
  class="a b dyn m1 n1 dyn1 computed o q"
/>
<div
  style="color:red;display:block;margin:0;padding:0"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div
  class="a b dyn2 m1 n1 dyn21 computed o q"
/>
<div
  style="color:red;display:block;margin:0;padding:0"
/>
```
## Change
```
UPDATE: .a.b.dyn2.m1.n1.dyn21.computed.o.q[class] "a b dyn m1 n1 dyn1 computed o q" => "a b dyn2 m1 n1 dyn21 computed o q"
```
