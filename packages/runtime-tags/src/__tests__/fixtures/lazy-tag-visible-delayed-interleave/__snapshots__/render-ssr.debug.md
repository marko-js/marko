# Render `{"value":1}`
```html
<button
  class="parent"
>
  parent 1
</button>
<button
  class="child"
>
  first: 1
</button>
```

# Update
```html
<button
  class="parent"
>
  parent 1
</button>
<button
  class="child"
>
  first: 1
</button>
<button
  class="mid"
>
  mid 11
</button>
```
## Change
```
INSERT: .child + .mid
INSERT: .mid::text("mid ")
INSERT: .mid::text@0 + ::text("11")
```

# Update
```html
<button
  class="parent"
>
  parent 1
</button>
<button
  class="child"
>
  first: 1
</button>
<button
  class="mid"
>
  mid 11
</button>
<button
  class="child"
>
  second: 21
</button>
```
## Change
```
INSERT: .mid + button
INSERT: button:nth-of-type(4)::text("second: ")
INSERT: button:nth-of-type(4)::text@0 + ::text("21")
```

# Update
```js
container.querySelector(".parent").click();
```
```html
<button
  class="parent"
>
  parent 2
</button>
<button
  class="child"
>
  first: 1
</button>
<button
  class="mid"
>
  mid 11
</button>
<button
  class="child"
>
  second: 21
</button>
```
## Change
```
UPDATE: .parent::text@7 "1" => "2"
```

# Update
```js
container.querySelector(".mid").click();
```
```html
<button
  class="parent"
>
  parent 2
</button>
<button
  class="child"
>
  first: 1
</button>
<button
  class="mid"
>
  mid 12
</button>
<button
  class="child"
>
  second: 21
</button>
```
## Change
```
UPDATE: .mid::text@4 "11" => "12"
```

# Update
```js
const text = container.querySelector(".mid").textContent;
if (!text?.includes("12")) {
  throw new Error(`Expected mid button to update to 12, received ${text}`);
}
```
