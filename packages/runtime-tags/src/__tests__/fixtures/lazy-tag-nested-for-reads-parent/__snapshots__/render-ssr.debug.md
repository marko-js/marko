# Render
```html
<button
  class="child"
>
  shared
</button>
<button
  class="grand"
>
  shared
</button>
<button
  class="grand"
>
  shared
</button>
<button
  class="grand"
>
  shared
</button>
```

# Update
```js
const buttons = document.querySelectorAll("button.grand");
for (const button of buttons) button.click();
```
```html
<button
  class="child"
>
  shared
</button>
<button
  class="grand"
>
  shared!
</button>
<button
  class="grand"
>
  shared!
</button>
<button
  class="grand"
>
  shared!
</button>
```
## Change
```
UPDATE: button:nth-of-type(2)::text "shared" => "shared!"
UPDATE: button:nth-of-type(3)::text "shared" => "shared!"
UPDATE: button:nth-of-type(4)::text "shared" => "shared!"
```
