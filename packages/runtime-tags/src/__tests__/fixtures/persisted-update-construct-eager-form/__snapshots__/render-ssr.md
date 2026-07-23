# Render `{"productId":7,"$global":{"persisted":true,"view":"home","data":{"cart":[]},"serializedGlobals":{"data":true}}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p
  class="home"
>
  welcome home
</p>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="home"
>
  welcome home
</p>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"productId":7,"$global":{"persisted":true,"persistedCrossRoute":true,"view":"item","data":{"cart":[]},"serializedGlobals":{"data":true}}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="item"
>
  <h2
    class="title"
  >
    Product 7
  </h2>
  <button
    class="watch"
  >
    watch
  </button>
  <form
    class="add"
  >
    <input
      class="pid"
      name="productId"
      type="hidden"
      value="7"
    />
    <input
      class="qty"
      min="1"
      name="quantity"
      type="number"
      value="1"
    />
    <button
      class="plus"
      type="button"
    >
      +
    </button>
  </form>
</section>
```
## Change
```
INSERT: .item
REMOVE: .count + p
UPDATE: .title::text " " => "Product 7"
UPDATE: .pid[value] null => "7"
UPDATE: .watch::text " " => "watch"
UPDATE: .qty[value] null => "1"
```

# Update
```js
_strict.default.equal(document.querySelector("input.pid").value, "7");
_strict.default.equal(document.querySelector("input.qty").value, "1");
_strict.default.deepEqual(submitRead(document), ["7", "1"]);
```

# Update
```js
document.querySelector("button.plus").click();
```

# Update
```js
_strict.default.equal(document.querySelector("input.qty").value, "2");
_strict.default.deepEqual(submitRead(document), ["7", "2"]);
```
