# Render
```html
<button
  class="x"
>
  1
</button>
<div>
  <button
    class="y"
  />
  loading
  <div>
    <s>
      10
    </s>
  </div>
</div>
```

# Update
```js
document.querySelector("button.x").click();
```
```html
<button
  class="x"
>
  2
</button>
<div>
  <button
    class="y"
  />
  loading
  <div>
    <s>
      10
    </s>
  </div>
</div>
```
## Change
```
UPDATE: .x::text "1" => "2"
```

# Update
```html
<button
  class="x"
>
  2
</button>
<div>
  <button
    class="y"
  />
  <i>
    2
  </i>
  <b>
    10
  </b>
  <div>
    <s>
      10
    </s>
  </div>
</div>
```
## Change
```
INSERT: div > i::text("2")
INSERT: div > b::text("10")
REMOVE: div::text("loading")
INSERT: .y + :is(i, b)
UPDATE: div > i::text "1" => "2"
```
