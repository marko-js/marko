# Render
```html
<button
  id="tags"
>
  0
</button>
<section>
  static: not registered
</section>
<h1>
  state driven string: not registered
</h1>
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<button
  id="tags"
>
  1
</button>
<section>
  static: not registered
</section>
<h2>
  state driven string: not registered
</h2>
```
## Change
```
UPDATE: #tags::text "0" => "1"
INSERT: section + h2
REMOVE: h2 + h1
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<button
  id="tags"
>
  2
</button>
<section>
  static: not registered
</section>
<h1>
  state driven string: not registered
</h1>
```
## Change
```
UPDATE: #tags::text "1" => "2"
INSERT: section + h1
REMOVE: h1 + h2
```
