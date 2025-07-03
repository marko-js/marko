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

# Mutations
```
INSERT div0, div1, div2, div3, div4, button
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

# Mutations
```
UPDATE div0/#text "{\"a\":1,\"b\":2,\"c\":3}" => "{\"a\":4,\"b\":5,\"d\":6}"
UPDATE div1/#text "{\"b\":2,\"c\":3}" => "{\"b\":5,\"d\":6}"
UPDATE div2/#text "1" => "4"
UPDATE div3/#text "2" => "5"
```