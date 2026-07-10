# Render `{"start":10,"items":[{"id":1,"name":"a"},{"id":2,"name":"b"}]}`
```html
<button
  id="count"
>
  0
</button>
<button
  id="label"
>
  none
</button>
<button
  id="sum"
>
  10
</button>
<button
  class="row"
>
  1:
</button>
<button
  class="row"
>
  2:
</button>
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  id="count"
>
  0
</button>
<button
  id="label"
>
  none
</button>
<button
  id="sum"
>
  10
</button>
<button
  class="row"
>
  1:a
</button>
<button
  class="row"
>
  2:
</button>
```
## Change
```
UPDATE: button:nth-of-type(4)::text@2 "" => "a"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  id="count"
>
  1
</button>
<button
  id="label"
>
  none
</button>
<button
  id="sum"
>
  10
</button>
<button
  class="row"
>
  1:a
</button>
<button
  class="row"
>
  2:
</button>
```
## Change
```
UPDATE: #count::text "0" => "1"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  id="count"
>
  2
</button>
<button
  id="label"
>
  none
</button>
<button
  id="sum"
>
  10
</button>
<button
  class="row"
>
  1:a
</button>
<button
  class="row"
>
  2:
</button>
```
## Change
```
UPDATE: #count::text "1" => "2"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  id="count"
>
  2
</button>
<button
  id="label"
>
  some
</button>
<button
  id="sum"
>
  10
</button>
<button
  class="row"
>
  1:a
</button>
<button
  class="row"
>
  2:
</button>
```
## Change
```
UPDATE: #label::text "none" => "some"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  id="count"
>
  2
</button>
<button
  id="label"
>
  some
</button>
<button
  id="sum"
>
  12
</button>
<button
  class="row"
>
  1:a
</button>
<button
  class="row"
>
  2:
</button>
```
## Change
```
UPDATE: #sum::text "10" => "12"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  id="count"
>
  2
</button>
<button
  id="label"
>
  some
</button>
<button
  id="sum"
>
  12
</button>
<button
  class="row"
>
  1:
</button>
<button
  class="row"
>
  2:
</button>
```
## Change
```
UPDATE: button:nth-of-type(4)::text "a" => ""
```
