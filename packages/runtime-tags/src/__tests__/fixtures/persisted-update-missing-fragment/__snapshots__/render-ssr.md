# Render `{"$global":{"persisted":true,"view":"a","topic":"sales","alert":false,"range":"narrow"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p
  class="a"
>
  panel a covers sales
</p>
<p
  class="calm"
>
  all clear
</p>
<ul
  class="items"
>
  <li>
    alpha
  </li>
  <li>
    beta
  </li>
</ul>
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="a"
>
  panel a covers sales
</p>
<p
  class="calm"
>
  all clear
</p>
<ul
  class="items"
>
  <li>
    alpha
  </li>
  <li>
    beta
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"view":"b","topic":"sales","alert":false,"range":"narrow"}}` failed: update diverged

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<p
  class="a"
>
  panel a covers sales
</p>
<p
  class="calm"
>
  all clear
</p>
<ul
  class="items"
>
  <li>
    alpha
  </li>
  <li>
    beta
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"view":"a","topic":"sales","alert":true,"range":"narrow"}}` failed: update diverged

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 3
</button>
<p
  class="a"
>
  panel a covers sales
</p>
<p
  class="calm"
>
  all clear
</p>
<ul
  class="items"
>
  <li>
    alpha
  </li>
  <li>
    beta
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```

# Update `{"$global":{"persisted":true,"view":"a","topic":"sales","alert":false,"range":"wide"}}` failed: update diverged

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 4
</button>
<p
  class="a"
>
  panel a covers sales
</p>
<p
  class="calm"
>
  all clear
</p>
<ul
  class="items"
>
  <li>
    alpha
  </li>
  <li>
    beta
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "3" => "4"
```

# Update `{"$global":{"persisted":true,"view":"b","topic":"growth","alert":true,"range":"wide"}}`
```html
<button
  class="count"
>
  clicked 4
</button>
<p
  class="b"
>
  panel b covers growth
</p>
<p
  class="alert"
>
  attention needed
</p>
<ul
  class="items"
>
  <li>
    alpha
  </li>
  <li>
    beta
  </li>
  <li>
    gamma
  </li>
</ul>
```
## Change
```
INSERT: .b
REMOVE: .count + p
INSERT: p + .alert
REMOVE: .b + p
INSERT: .items > li:nth-of-type(2) + li
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 5
</button>
<p
  class="b"
>
  panel b covers growth
</p>
<p
  class="alert"
>
  attention needed
</p>
<ul
  class="items"
>
  <li>
    alpha
  </li>
  <li>
    beta
  </li>
  <li>
    gamma
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "4" => "5"
```
