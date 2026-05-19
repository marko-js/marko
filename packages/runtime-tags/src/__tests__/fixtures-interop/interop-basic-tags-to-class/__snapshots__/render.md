# Render
```html
<button
  id="tags"
>
  0
</button>
<button
  data-parent="0"
  id="class"
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
  id="tags"
>
  1
</button>
<button
  data-parent="1"
  id="class"
>
  0
</button>
```
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: #class[data-parent] "0" => "1"
```

# Update
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  1
</button>
<button
  data-parent="1"
  id="class"
>
  1
</button>
```
## Change
```
UPDATE: #class::text "0" => "1"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  2
</button>
<button
  data-parent="2"
  id="class"
>
  1
</button>
```
## Change
```
UPDATE: #tags::text "1" => "2"
UPDATE: #class[data-parent] "1" => "2"
```

# Update
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  2
</button>
<button
  data-parent="2"
  id="class"
>
  2
</button>
```
## Change
```
UPDATE: #class::text "1" => "2"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  3
</button>
<button
  data-parent="3"
  id="class"
>
  2
</button>
```
## Change
```
UPDATE: #tags::text "2" => "3"
UPDATE: #class[data-parent] "2" => "3"
```
