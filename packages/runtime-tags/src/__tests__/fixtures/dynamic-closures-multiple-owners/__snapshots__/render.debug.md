# Render
```html
<button
  class="outer"
>
  1
</button>
<p>
  1
</p>
<div>
  <button
    class="inner"
  />
  <em>
    1
  </em>
  <div>
    <i>
      1
    </i>
    <b>
      1
    </b>
  </div>
  <div>
    <s>
      1
    </s>
  </div>
</div>
```

# Update
```js
document.querySelector("button.inner").click();
```
```html
<button
  class="outer"
>
  1
</button>
<p>
  1
</p>
<div>
  <button
    class="inner"
  />
  <em>
    1
  </em>
  <div>
    <i>
      1
    </i>
    <b>
      2
    </b>
  </div>
  <div>
    <s>
      2
    </s>
  </div>
</div>
```
## Change
```
UPDATE: div > div:nth-of-type(1) > b::text "1" => "2"
UPDATE: div > div:nth-of-type(2) > s::text "1" => "2"
```

# Update
```js
document.querySelector("button.outer").click();
```
```html
<button
  class="outer"
>
  2
</button>
<p>
  2
</p>
<div>
  <button
    class="inner"
  />
  <em>
    2
  </em>
  <div>
    <i>
      2
    </i>
    <b>
      2
    </b>
  </div>
  <div>
    <s>
      2
    </s>
  </div>
</div>
```
## Change
```
UPDATE: .outer::text "1" => "2"
UPDATE: p::text "1" => "2"
UPDATE: div > em::text "1" => "2"
UPDATE: div > div:nth-of-type(1) > i::text "1" => "2"
```
