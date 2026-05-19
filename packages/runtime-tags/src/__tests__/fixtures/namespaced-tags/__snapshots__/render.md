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
## Change
```
INSERT: div > math + svg
REMOVE: div > svg:nth-of-type(2) + div
INSERT: div > svg:nth-of-type(2)::text(" ")
INSERT: div > svg:nth-of-type(2) > a
REMOVE: div > svg:nth-of-type(2) > a + ::text(" ")
UPDATE: div > svg:nth-of-type(2) > a[ns] null => "http://www.w3.org/2000/svg"
```

# Update
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
## Change
```
INSERT: div > math + div
REMOVE: div > div + svg
INSERT: div > div::text(" ")
INSERT: div > div > a
REMOVE: div > div > a + ::text(" ")
UPDATE: div > div > a[ns] null => "http://www.w3.org/1999/xhtml"
```

# Update
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
## Change
```
INSERT: div > math + svg
REMOVE: div > svg:nth-of-type(2) + div
INSERT: div > svg:nth-of-type(2)::text(" ")
INSERT: div > svg:nth-of-type(2) > a
REMOVE: div > svg:nth-of-type(2) > a + ::text(" ")
UPDATE: div > svg:nth-of-type(2) > a[ns] null => "http://www.w3.org/2000/svg"
```

# Update
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
## Change
```
INSERT: div > svg:nth-of-type(1) > a + ::text("Hi")
REMOVE: div > svg:nth-of-type(1)::text + a
INSERT: div > math > a + ::text("Hi")
REMOVE: div > math::text + a
```

# Update
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
## Change
```
INSERT: div > svg:nth-of-type(1) > a:nth-of-type(1) + a
REMOVE: div > svg:nth-of-type(1) > a:nth-of-type(2) + ::text("Hi")
INSERT: div > svg:nth-of-type(1) > a:nth-of-type(2)::text("Hi")
UPDATE: div > svg:nth-of-type(1) > a:nth-of-type(2)[href] null => "#bar"
INSERT: div > math > a:nth-of-type(1) + a
REMOVE: div > math > a:nth-of-type(2) + ::text("Hi")
INSERT: div > math > a:nth-of-type(2)::text("Hi")
UPDATE: div > math > a:nth-of-type(2)[href] null => "#bar"
UPDATE: div > svg:nth-of-type(1) > a:nth-of-type(2)[ns] null => "http://www.w3.org/2000/svg"
UPDATE: div > math > a:nth-of-type(2)[ns] null => "http://www.w3.org/1998/Math/MathML"
```

# Update
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
## Change
```
INSERT: div > svg:nth-of-type(1) > a + ::text("Hi")
REMOVE: div > svg:nth-of-type(1)::text + a
INSERT: div > math > a + ::text("Hi")
REMOVE: div > math::text + a
```
