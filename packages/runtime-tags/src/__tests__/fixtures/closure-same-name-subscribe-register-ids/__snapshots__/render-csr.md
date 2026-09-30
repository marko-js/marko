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
  <div>
    <s>
      10
    </s>
  </div>
</div>
```

# Update
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
## Change
```
INSERT: .y + ::text("loading")
```

# Update
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
  <i>
    1
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
INSERT: .y + :is(i, b)
REMOVE: div > b + ::text("loading")
```

# Update `click("button.x")`
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
UPDATE: .x::text "1" => "2"
UPDATE: div > i::text "1" => "2"
```
