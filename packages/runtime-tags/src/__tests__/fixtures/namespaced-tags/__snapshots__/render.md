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

# Update
```js
(document.querySelector(".toggle-parent")).click();
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
## Change
```
REMOVE: div > div
INSERT: div > svg:nth-of-type(2)
INSERT: div > svg:nth-of-type(2) > a
UPDATE: div > svg:nth-of-type(2) > a[ns] null => "http://www.w3.org/2000/svg"
```

# Update
```js
(document.querySelector(".toggle-parent")).click();
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
## Change
```
REMOVE: div > svg
INSERT: div > div
INSERT: div > div > a
UPDATE: div > div > a[ns] null => "http://www.w3.org/1999/xhtml"
```

# Update
```js
(document.querySelector(".toggle-parent")).click();
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
## Change
```
REMOVE: div > div
INSERT: div > svg:nth-of-type(2)
INSERT: div > svg:nth-of-type(2) > a
UPDATE: div > svg:nth-of-type(2) > a[ns] null => "http://www.w3.org/2000/svg"
```

# Update
```js
(document.querySelector(".toggle-child")).click();
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
## Change
```
REMOVE: div > svg:nth-of-type(1) > a
INSERT: div > svg:nth-of-type(1)::text("Hi")
REMOVE: div > math > a
INSERT: div > math::text("Hi")
```

# Update
```js
(document.querySelector(".toggle-child")).click();
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
## Change
```
REMOVE: div > svg:nth-of-type(1)::text("Hi")
INSERT: div > svg:nth-of-type(1) > a:nth-of-type(2)
UPDATE: div > svg:nth-of-type(1) > a:nth-of-type(2)[href] null => "#bar"
UPDATE: div > svg:nth-of-type(1) > a:nth-of-type(2)[ns] null => "http://www.w3.org/2000/svg"
REMOVE: div > math::text("Hi")
INSERT: div > math > a:nth-of-type(2)
UPDATE: div > math > a:nth-of-type(2)[href] null => "#bar"
UPDATE: div > math > a:nth-of-type(2)[ns] null => "http://www.w3.org/1998/Math/MathML"
```

# Update
```js
(document.querySelector(".toggle-child")).click();
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
## Change
```
REMOVE: div > svg:nth-of-type(1) > a
INSERT: div > svg:nth-of-type(1)::text("Hi")
REMOVE: div > math > a
INSERT: div > math::text("Hi")
```
