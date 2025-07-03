# Render
```html
<div
  class="obj"
>
  {"a":1,"b":2,"c":3}
</div>
<div
  class="partialObj"
>
  {"b":2,"c":3}
</div>
<div
  class="a"
>
  1
</div>
<div
  class="b"
>
  2
</div>
<div
  class="a"
>
  removed a
</div>
<button>
  Update
</button>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div
  class="obj"
>
  {"a":4,"b":5,"d":6}
</div>
<div
  class="partialObj"
>
  {"b":5,"d":6}
</div>
<div
  class="a"
>
  4
</div>
<div
  class="b"
>
  5
</div>
<div
  class="a"
>
  removed a
</div>
<button>
  Update
</button>
```
