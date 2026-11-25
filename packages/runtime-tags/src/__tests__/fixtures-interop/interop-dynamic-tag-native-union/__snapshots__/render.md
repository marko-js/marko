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
REMOVE: h1
UPDATE: #tags::text "0" => "1"
INSERT: h2
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
REMOVE: h2
UPDATE: #tags::text "1" => "2"
INSERT: h1
```
