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

# Mutations
```
INSERT form, div, button0, button1
```

# Render
```js
container.querySelector(".remove").click();
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

# Mutations
```
REMOVE option before form/select/option0
UPDATE div/#text "1" => "2"
```

# Render
```js
container.querySelector(".remove").click();
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

# Mutations
```
REMOVE option before form/select/option
UPDATE div/#text "2" => "3"
```

# Render
```js
container.querySelector(".remove").click();
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
<div>
  ‍
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

# Mutations
```
REMOVE option in form/select
UPDATE div/#text "3" => "‍"
```

# Render
```js
container.querySelector(".add").click();
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

# Mutations
```
INSERT form/select/option
UPDATE div/#text "‍" => "3"
```

# Render
```js
container.querySelector(".add").click();
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

# Mutations
```
INSERT form/select/option0
```

# Render
```js
container.querySelector(".add").click();
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

# Mutations
```
INSERT form/select/option0
```