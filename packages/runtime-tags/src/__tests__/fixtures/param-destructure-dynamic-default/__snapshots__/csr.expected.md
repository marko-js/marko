# Render
```html
<!---->
<div
  class="a"
  id="a"
>
  0 object
</div>
<div
  class="a"
  id="b"
>
  1 object
</div>
<div
  class="a"
  id="c"
>
  2 undefined
</div>
<div
  class="b"
  id="d"
>
  0 object
</div>
<div
  class="b"
  id="e"
>
  1 object
</div>
<div
  class="b"
  id="f"
>
  2 undefined
</div>
<button>
  Increment default
</button>
```

# Mutations
```
INSERT #comment, div0, div1, div2, div3, div4, div5, button
```

# Render
```js
container.querySelector("button")?.click();
```
```html
<!---->
<div
  class="a"
  id="a"
>
  0 object
</div>
<div
  class="a"
  id="b"
>
  2 object
</div>
<div
  class="a"
  id="c"
>
  3 undefined
</div>
<div
  class="b"
  id="d"
>
  0 object
</div>
<div
  class="b"
  id="e"
>
  2 object
</div>
<div
  class="b"
  id="f"
>
  3 undefined
</div>
<button>
  Increment default
</button>
```

# Mutations
```
UPDATE div1/#text0 "1" => "2"
UPDATE div2/#text0 "2" => "3"
UPDATE div4/#text0 "1" => "2"
UPDATE div5/#text0 "2" => "3"
```

# Render
```js
container.querySelector("button")?.click();
```
```html
<!---->
<div
  class="a"
  id="a"
>
  0 object
</div>
<div
  class="a"
  id="b"
>
  3 object
</div>
<div
  class="a"
  id="c"
>
  4 undefined
</div>
<div
  class="b"
  id="d"
>
  0 object
</div>
<div
  class="b"
  id="e"
>
  3 object
</div>
<div
  class="b"
  id="f"
>
  4 undefined
</div>
<button>
  Increment default
</button>
```

# Mutations
```
UPDATE div1/#text0 "2" => "3"
UPDATE div2/#text0 "3" => "4"
UPDATE div4/#text0 "2" => "3"
UPDATE div5/#text0 "3" => "4"
```