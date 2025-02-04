# Render `{"value":"<a href=#></a>"}`

```html
<div>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/2000/svg"
    >
      Hi
    </a>
  </svg>
  <math>
    <a
      href="#"
      ns="http://www.w3.org/1998/Math/MathML"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/1998/Math/MathML"
    >
      Hi
    </a>
  </math>
  <div>
    <a
      href="#"
      ns="http://www.w3.org/1999/xhtml"
    />
  </div>
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
</div>
```

# Mutations
```
INSERT div
UPDATE div/svg/a0[ns] null => "http://www.w3.org/2000/svg"
UPDATE div/svg/a1[ns] null => "http://www.w3.org/2000/svg"
UPDATE div/math/a0[ns] null => "http://www.w3.org/1998/Math/MathML"
UPDATE div/math/a1[ns] null => "http://www.w3.org/1998/Math/MathML"
UPDATE div/div/a[ns] null => "http://www.w3.org/1999/xhtml"
```

# Render
```js
container.querySelector(".toggle-parent").click();
```
```html
<div>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/2000/svg"
    >
      Hi
    </a>
  </svg>
  <math>
    <a
      href="#"
      ns="http://www.w3.org/1998/Math/MathML"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/1998/Math/MathML"
    >
      Hi
    </a>
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
</div>
```

# Mutations
```
INSERT div/svg1
REMOVE div after div/math
INSERT #text
INSERT div/svg1/a
REMOVE #text after div/svg1/a
UPDATE div/svg1/a[ns] null => "http://www.w3.org/2000/svg"
```

# Render
```js
container.querySelector(".toggle-parent").click();
```
```html
<div>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/2000/svg"
    >
      Hi
    </a>
  </svg>
  <math>
    <a
      href="#"
      ns="http://www.w3.org/1998/Math/MathML"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/1998/Math/MathML"
    >
      Hi
    </a>
  </math>
  <div>
    <a
      href="#"
      ns="http://www.w3.org/1999/xhtml"
    />
  </div>
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
</div>
```

# Mutations
```
INSERT div/div
REMOVE svg after div/math
INSERT #text
INSERT div/div/a
REMOVE #text after div/div/a
UPDATE div/div/a[ns] null => "http://www.w3.org/1999/xhtml"
```

# Render
```js
container.querySelector(".toggle-parent").click();
```
```html
<div>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/2000/svg"
    >
      Hi
    </a>
  </svg>
  <math>
    <a
      href="#"
      ns="http://www.w3.org/1998/Math/MathML"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/1998/Math/MathML"
    >
      Hi
    </a>
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
</div>
```

# Mutations
```
INSERT div/svg1
REMOVE div after div/math
INSERT #text
INSERT div/svg1/a
REMOVE #text after div/svg1/a
UPDATE div/svg1/a[ns] null => "http://www.w3.org/2000/svg"
```

# Render
```js
container.querySelector(".toggle-child").click();
```
```html
<div>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
    Hi
  </svg>
  <math>
    <a
      href="#"
      ns="http://www.w3.org/1998/Math/MathML"
    />
    Hi
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
</div>
```

# Mutations
```
INSERT div/svg0/#text
REMOVE a after div/svg0/a
INSERT div/math/#text
REMOVE a after div/math/a
```

# Render
```js
container.querySelector(".toggle-child").click();
```
```html
<div>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/2000/svg"
    >
      Hi
    </a>
  </svg>
  <math>
    <a
      href="#"
      ns="http://www.w3.org/1998/Math/MathML"
    />
    <a
      href="#bar"
      ns="http://www.w3.org/1998/Math/MathML"
    >
      Hi
    </a>
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
</div>
```

# Mutations
```
INSERT div/svg0/a1
REMOVE #text after div/svg0/a0
INSERT div/svg0/a1/#text
UPDATE div/svg0/a1[href] null => "#bar"
INSERT div/math/a1
REMOVE #text after div/math/a0
INSERT div/math/a1/#text
UPDATE div/math/a1[href] null => "#bar"
UPDATE div/svg0/a1[ns] null => "http://www.w3.org/2000/svg"
UPDATE div/math/a1[ns] null => "http://www.w3.org/1998/Math/MathML"
```

# Render
```js
container.querySelector(".toggle-child").click();
```
```html
<div>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
    Hi
  </svg>
  <math>
    <a
      href="#"
      ns="http://www.w3.org/1998/Math/MathML"
    />
    Hi
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
</div>
```

# Mutations
```
INSERT div/svg0/#text
REMOVE a after div/svg0/a
INSERT div/math/#text
REMOVE a after div/math/a
```