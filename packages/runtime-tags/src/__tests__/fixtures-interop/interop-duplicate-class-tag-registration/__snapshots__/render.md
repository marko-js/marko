# Render
```html
<button
  id="tags"
>
  0
</button>
<button
  class="class"
  data-parent="0"
>
  0
</button>
<button
  class="class"
  data-parent="0"
>
  0
</button>
```

# Update
```js
document.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  1
</button>
<button
  class="class"
  data-parent="1"
>
  0
</button>
<button
  class="class"
  data-parent="1"
>
  0
</button>
```
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: button:nth-of-type(2)[data-parent] "0" => "1"
UPDATE: button:nth-of-type(3)[data-parent] "0" => "1"
```
