# Render
```html
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

# Update
```js
container.querySelector("button")?.click();
```
```html
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
## Change
```
UPDATE: #b::text@0 "1" => "2"
UPDATE: #c::text@0 "2" => "3"
UPDATE: #e::text@0 "1" => "2"
UPDATE: #f::text@0 "2" => "3"
```

# Update
```js
container.querySelector("button")?.click();
```
```html
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
## Change
```
UPDATE: #b::text@0 "2" => "3"
UPDATE: #c::text@0 "3" => "4"
UPDATE: #e::text@0 "2" => "3"
UPDATE: #f::text@0 "3" => "4"
```
