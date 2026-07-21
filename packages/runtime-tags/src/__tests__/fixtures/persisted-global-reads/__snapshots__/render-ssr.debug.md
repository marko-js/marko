# Render `{"$global":{"persisted":true,"title":"Persisted Page","params":{"id":42,"tag":"featured","sale":20},"serializedGlobals":{"title":true,"params":true}}}`
```html
<h1>
  Persisted Page
</h1>
<a
  href="/items/42"
>
  link
</a>
<button>
  0
</button>
<section>
  <em>
    Sale 20% off
  </em>
  <button
    class="buy"
  >
    buy
  </button>
</section>
```

# Update
```js
document.querySelector("section + button, h1 ~ button:not(.buy)").click();
```
```html
<h1>
  Persisted Page
</h1>
<a
  href="/items/42"
>
  link
</a>
<button>
  1
</button>
<section
  class="hot"
>
  <em>
    Sale 20% off
  </em>
  <button
    class="buy"
  >
    buy
  </button>
</section>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: .hot[class] null => "hot"
```

# Update
```js
document.querySelector("button.buy").click();
```
```html
<h1>
  Persisted Page
</h1>
<a
  href="/items/42"
>
  link
</a>
<button>
  11
</button>
<section
  class="hot"
>
  <em>
    Sale 20% off
  </em>
  <button
    class="buy"
  >
    buy
  </button>
</section>
```
## Change
```
UPDATE: button::text "1" => "11"
```

# Update
```js
document.querySelector("section + button, h1 ~ button:not(.buy)").click();
```
```html
<h1>
  Persisted Page
</h1>
<a
  href="/items/42"
>
  link
</a>
<button>
  12
</button>
<section
  class="hot"
>
  <em>
    Sale 20% off
  </em>
  <button
    class="buy"
  >
    buy
  </button>
</section>
```
## Change
```
UPDATE: button::text "11" => "12"
```

# Update `{"$global":{"persisted":true,"title":"Persisted Page","params":{"id":42,"tag":"featured","sale":0},"serializedGlobals":{"title":true,"params":true}}}`
```html
<h1>
  Persisted Page
</h1>
<a
  href="/items/42"
>
  link
</a>
<button>
  12
</button>
<section
  class="hot"
/>
```
## Change
```
REMOVE: .hot > em
REMOVE: .hot > button
```

# Update `{"$global":{"persisted":true,"title":"Persisted Page","params":{"id":7,"tag":"featured","sale":35},"serializedGlobals":{"title":true,"params":true}}}`
```html
<h1>
  Persisted Page
</h1>
<a
  href="/items/7"
>
  link
</a>
<button>
  12
</button>
<em>
  Sale 35% off
</em>
<button
  class="buy"
>
  buy
</button>
<section
  class="hot"
/>
```
## Change
```
UPDATE: a[href] "/items/42" => "/items/7"
INSERT: button:nth-of-type(1) + :is(em, .buy)
UPDATE: em::text@5 "" => "35"
```

# Update
```js
document.querySelector("section + button, h1 ~ button:not(.buy)").click();
```
```html
<h1>
  Persisted Page
</h1>
<a
  href="/items/7"
>
  link
</a>
<button>
  13
</button>
<em>
  Sale 35% off
</em>
<button
  class="buy"
>
  buy
</button>
<section
  class="hot"
/>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "12" => "13"
```

# Update
```js
document.querySelector("button.buy").click();
```
```html
<h1>
  Persisted Page
</h1>
<a
  href="/items/7"
>
  link
</a>
<button>
  23
</button>
<em>
  Sale 35% off
</em>
<button
  class="buy"
>
  buy
</button>
<section
  class="hot"
/>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "13" => "23"
```

# Update `{"$global":{"persisted":true,"title":"Persisted Page","params":{"id":7,"tag":"","sale":35},"serializedGlobals":{"title":true,"params":true}}}`
```html
<h1>
  Persisted Page
</h1>
<a
  href="/items/7"
>
  link
</a>
<button>
  23
</button>
<em>
  Sale 35% off
</em>
<button
  class="buy"
>
  buy
</button>
<section />
```
## Change
```
UPDATE: section[class] "hot" => null
```
