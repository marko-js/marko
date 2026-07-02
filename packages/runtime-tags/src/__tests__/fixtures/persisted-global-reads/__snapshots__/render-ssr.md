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
</section>
```

# Update
```js
container.querySelector("button").click();
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
</section>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: .hot[class] null => "hot"
```

# Update
```js
container.querySelector("button").click();
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
  2
</button>
<section
  class="hot"
>
  <em>
    Sale 20% off
  </em>
</section>
```
## Change
```
UPDATE: button::text "1" => "2"
```
