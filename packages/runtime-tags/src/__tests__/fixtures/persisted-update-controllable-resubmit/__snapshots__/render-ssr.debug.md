# Render `{"id":11,"name":"Alpha lamp","$global":{"persisted":true}}`
```html
<h1
  class="name"
>
  Alpha lamp
</h1>
<form
  class="order"
>
  <input
    class="qty"
    type="number"
    value="1"
  />
  <input
    class="item"
    name="itemId"
    type="hidden"
    value="11"
  />
  <button
    class="buy"
  >
    buy
  </button>
</form>
<p
  class="mirror"
>
  adding 1 to cart
</p>
<output
  class="last"
>
  none
</output>
```

# Update
```js
const input = document.querySelector("input.qty");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<h1
  class="name"
>
  Alpha lamp
</h1>
<form
  class="order"
>
  <input
    class="qty"
    default-value="1"
    type="number"
    value="3"
  />
  <input
    class="item"
    name="itemId"
    type="hidden"
    value="11"
  />
  <button
    class="buy"
  >
    buy
  </button>
</form>
<p
  class="mirror"
>
  adding 3 to cart
</p>
<output
  class="last"
>
  none
</output>
```
## Change
```
UPDATE: .mirror::text@7 "1" => "3"
```

# Update
```js
const form = document.querySelector("form.order");
const window = form.ownerDocument.defaultView;
form.dispatchEvent(
  new window.Event("submit", { bubbles: true, cancelable: true }),
);
```
```html
<h1
  class="name"
>
  Alpha lamp
</h1>
<form
  class="order"
>
  <input
    class="qty"
    default-value="1"
    type="number"
    value="3"
  />
  <input
    class="item"
    name="itemId"
    type="hidden"
    value="11"
  />
  <button
    class="buy"
  >
    buy
  </button>
</form>
<p
  class="mirror"
>
  adding 3 to cart
</p>
<output
  class="last"
>
  11 x 3
</output>
```
## Change
```
UPDATE: .last::text "none" => "11 x 3"
```

# Update `{"id":22,"name":"Beta chair","$global":{"persisted":true}}`
```html
<h1
  class="name"
>
  Beta chair
</h1>
<form
  class="order"
>
  <input
    class="qty"
    default-value="1"
    type="number"
    value="3"
  />
  <input
    class="item"
    name="itemId"
    type="hidden"
    value="22"
  />
  <button
    class="buy"
  >
    buy
  </button>
</form>
<p
  class="mirror"
>
  adding 3 to cart
</p>
<output
  class="last"
>
  11 x 3
</output>
```
## Change
```
UPDATE: .name::text "Alpha lamp" => "Beta chair"
UPDATE: .item[value] "11" => "22"
```

# Update
```js
const form = document.querySelector("form.order");
const window = form.ownerDocument.defaultView;
form.dispatchEvent(
  new window.Event("submit", { bubbles: true, cancelable: true }),
);
```
```html
<h1
  class="name"
>
  Beta chair
</h1>
<form
  class="order"
>
  <input
    class="qty"
    default-value="1"
    type="number"
    value="3"
  />
  <input
    class="item"
    name="itemId"
    type="hidden"
    value="22"
  />
  <button
    class="buy"
  >
    buy
  </button>
</form>
<p
  class="mirror"
>
  adding 3 to cart
</p>
<output
  class="last"
>
  22 x 3
</output>
```
## Change
```
UPDATE: .last::text "11 x 3" => "22 x 3"
```

# Update
```js
const input = document.querySelector("input.qty");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<h1
  class="name"
>
  Beta chair
</h1>
<form
  class="order"
>
  <input
    class="qty"
    default-value="1"
    type="number"
    value="5"
  />
  <input
    class="item"
    name="itemId"
    type="hidden"
    value="22"
  />
  <button
    class="buy"
  >
    buy
  </button>
</form>
<p
  class="mirror"
>
  adding 5 to cart
</p>
<output
  class="last"
>
  22 x 3
</output>
```
## Change
```
UPDATE: .mirror::text@7 "3" => "5"
```

# Update
```js
const form = document.querySelector("form.order");
const window = form.ownerDocument.defaultView;
form.dispatchEvent(
  new window.Event("submit", { bubbles: true, cancelable: true }),
);
```
```html
<h1
  class="name"
>
  Beta chair
</h1>
<form
  class="order"
>
  <input
    class="qty"
    default-value="1"
    type="number"
    value="5"
  />
  <input
    class="item"
    name="itemId"
    type="hidden"
    value="22"
  />
  <button
    class="buy"
  >
    buy
  </button>
</form>
<p
  class="mirror"
>
  adding 5 to cart
</p>
<output
  class="last"
>
  22 x 5
</output>
```
## Change
```
UPDATE: .last::text "22 x 3" => "22 x 5"
```
