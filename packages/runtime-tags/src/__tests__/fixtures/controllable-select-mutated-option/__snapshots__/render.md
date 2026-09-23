# Render
```html
<form>
  <select>
    <option
      selected=""
      value="1"
    >
      1
    </option>
    <option
      value="2"
    >
      2
    </option>
    <option
      value="3"
    >
      3
    </option>
  </select>
  <button
    type="reset"
  >
    reset
  </button>
</form>
<div>
  1
</div>
<button
  class="remove"
>
  Remove option
</button>
<button
  class="add"
>
  Add option
</button>
```

# Update
```js
document.querySelector(".remove").click();
```
```html
<form>
  <select>
    <option
      selected=""
      value="2"
    >
      2
    </option>
    <option
      value="3"
    >
      3
    </option>
  </select>
  <button
    type="reset"
  >
    reset
  </button>
</form>
<div>
  2
</div>
<button
  class="remove"
>
  Remove option
</button>
<button
  class="add"
>
  Add option
</button>
```
## Change
```
REMOVE: form > select > option
UPDATE: div::text "1" => "2"
```

# Update
```js
document.querySelector(".remove").click();
```
```html
<form>
  <select>
    <option
      selected=""
      value="3"
    >
      3
    </option>
  </select>
  <button
    type="reset"
  >
    reset
  </button>
</form>
<div>
  3
</div>
<button
  class="remove"
>
  Remove option
</button>
<button
  class="add"
>
  Add option
</button>
```
## Change
```
REMOVE: form > select > option
UPDATE: div::text "2" => "3"
```

# Update
```js
document.querySelector(".remove").click();
```
```html
<form>
  <select />
  <button
    type="reset"
  >
    reset
  </button>
</form>
<div />
<button
  class="remove"
>
  Remove option
</button>
<button
  class="add"
>
  Add option
</button>
```
## Change
```
REMOVE: form > select > option
UPDATE: div::text "3" => ""
```

# Update
```js
document.querySelector(".add").click();
```
```html
<form>
  <select>
    <option
      selected=""
      value="3"
    >
      3
    </option>
  </select>
  <button
    type="reset"
  >
    reset
  </button>
</form>
<div>
  3
</div>
<button
  class="remove"
>
  Remove option
</button>
<button
  class="add"
>
  Add option
</button>
```
## Change
```
INSERT: form > select > option
UPDATE: form > select > option[value] null => "3"
UPDATE: form > select > option::text " " => "3"
UPDATE: div::text "" => "3"
```

# Update
```js
document.querySelector(".add").click();
```
```html
<form>
  <select>
    <option
      value="2"
    >
      2
    </option>
    <option
      selected=""
      value="3"
    >
      3
    </option>
  </select>
  <button
    type="reset"
  >
    reset
  </button>
</form>
<div>
  3
</div>
<button
  class="remove"
>
  Remove option
</button>
<button
  class="add"
>
  Add option
</button>
```
## Change
```
INSERT: form > select > option
UPDATE: form > select > option:nth-of-type(1)[value] null => "2"
UPDATE: form > select > option:nth-of-type(1)::text " " => "2"
```

# Update
```js
document.querySelector(".add").click();
```
```html
<form>
  <select>
    <option
      value="1"
    >
      1
    </option>
    <option
      value="2"
    >
      2
    </option>
    <option
      selected=""
      value="3"
    >
      3
    </option>
  </select>
  <button
    type="reset"
  >
    reset
  </button>
</form>
<div>
  3
</div>
<button
  class="remove"
>
  Remove option
</button>
<button
  class="add"
>
  Add option
</button>
```
## Change
```
INSERT: form > select > option
UPDATE: form > select > option:nth-of-type(1)[value] null => "1"
UPDATE: form > select > option:nth-of-type(1)::text " " => "1"
```
