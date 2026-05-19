# Render
```html
<button
  id="class"
>
  0
</button>
<button
  data-parent="0"
  id="tags"
>
  0
</button>
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="class"
>
  0
</button>
<button
  data-parent="0"
  id="tags"
>
  1
</button>
```
## Change
```
UPDATE: #tags::text "0" => "1"
```

# Update
```js
container.querySelector("#class").click();
```
```html
<button
  id="class"
>
  1
</button>
<button
  data-parent="1"
  id="tags"
>
  1
</button>
```
## Change
```
UPDATE: #tags[data-parent] "0" => "1"
UPDATE: #class::text "0" => "1"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="class"
>
  1
</button>
<button
  data-parent="1"
  id="tags"
>
  2
</button>
```
## Change
```
UPDATE: #tags::text "1" => "2"
```

# Update
```js
container.querySelector("#class").click();
```
```html
<button
  id="class"
>
  2
</button>
<button
  data-parent="2"
  id="tags"
>
  2
</button>
```
## Change
```
UPDATE: #tags[data-parent] "1" => "2"
UPDATE: #class::text "1" => "2"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="class"
>
  2
</button>
<button
  data-parent="2"
  id="tags"
>
  3
</button>
```
## Change
```
UPDATE: #tags::text "2" => "3"
```
