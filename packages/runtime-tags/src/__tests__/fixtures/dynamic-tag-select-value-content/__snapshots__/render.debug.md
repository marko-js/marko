# Render `{"tag":"select"}`
```html
<button
  id="swap"
>
  swap
</button>
<button
  id="bump"
>
  bump
</button>
<select>
  <option
    selected=""
    value="a"
  >
    A0
  </option>
</select>
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="swap"
>
  swap
</button>
<button
  id="bump"
>
  bump
</button>
<select>
  <option
    selected=""
    value="a"
  >
    A1
  </option>
</select>
```
## Change
```
UPDATE: select > option::text@1 "0" => "1"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="swap"
>
  swap
</button>
<button
  id="bump"
>
  bump
</button>
<div
  value="b"
>
  <option
    value="a"
  >
    A1
  </option>
</div>
```
## Change
```
INSERT: #bump + div
REMOVE: div + select
INSERT: div > option
UPDATE: div[value] null => "b"
UPDATE: div > option::text@1 "" => "1"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="swap"
>
  swap
</button>
<button
  id="bump"
>
  bump
</button>
<div
  value="b"
>
  <option
    value="a"
  >
    A2
  </option>
</div>
```
## Change
```
UPDATE: div > option::text@1 "1" => "2"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="swap"
>
  swap
</button>
<button
  id="bump"
>
  bump
</button>
<select>
  <option
    selected=""
    value="a"
  >
    A2
  </option>
</select>
```
## Change
```
INSERT: #bump + select
REMOVE: select + div
INSERT: select > option
UPDATE: select > option::text@1 "" => "2"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="swap"
>
  swap
</button>
<button
  id="bump"
>
  bump
</button>
<select>
  <option
    selected=""
    value="a"
  >
    A3
  </option>
</select>
```
## Change
```
UPDATE: select > option::text@1 "2" => "3"
```
