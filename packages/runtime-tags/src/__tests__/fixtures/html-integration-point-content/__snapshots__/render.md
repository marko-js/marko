# Render
```html
<svg>
  <foreignobject
    class="host"
    height="100"
    width="100"
  />
  <foreignobject
    class="host"
  >
    hidden: 
  </foreignobject>
  <desc
    class="host"
  />
</svg>
<math>
  <mtext
    class="host"
  />
</math>
<button
  class="edit"
>
  edit
</button>
<button
  class="show"
>
  show
</button>
```

# Update
```js
document.querySelector(".show").click();
```
```html
<svg>
  <foreignobject
    class="host"
    height="100"
    width="100"
  />
  <foreignobject
    class="host"
  />
  <desc
    class="host"
  />
</svg>
<math>
  <mtext
    class="host"
  />
</math>
<button
  class="edit"
>
  edit
</button>
<button
  class="show"
>
  show
</button>
```
## Change
```
REMOVE: svg > foreignobject:nth-of-type(2)::text("hidden: ")
```

# Update
```js
document.querySelector(".edit").click();
```
```html
<svg>
  <foreignobject
    class="host"
    height="100"
    width="100"
  >
    <input
      value="if"
    />
    <input
      value="dynamic"
    />
    <input
      value="html"
    />
  </foreignobject>
  <foreignobject
    class="host"
  />
  <desc
    class="host"
  >
    <a>
      desc
    </a>
  </desc>
</svg>
<math>
  <mtext
    class="host"
  >
    <a>
      mtext
    </a>
  </mtext>
</math>
<button
  class="edit"
>
  edit
</button>
<button
  class="show"
>
  show
</button>
```
## Change
```
INSERT: svg > foreignobject:nth-of-type(1) > input
INSERT: svg > foreignobject:nth-of-type(1) > input
INSERT: svg > foreignobject:nth-of-type(1) > input:nth-of-type(1) + input
UPDATE: svg > foreignobject:nth-of-type(1) > input:nth-of-type(2)[value] null => "dynamic"
INSERT: svg > desc > a
INSERT: math > mtext > a
```

# Update
```js
document.querySelector(".show").click();
```
```html
<svg>
  <foreignobject
    class="host"
    height="100"
    width="100"
  >
    <input
      value="if"
    />
    <input
      value="dynamic"
    />
    <input
      value="html"
    />
  </foreignobject>
  <foreignobject
    class="host"
  >
    hidden: 
    <input
      value="hidden"
    />
  </foreignobject>
  <desc
    class="host"
  >
    <a>
      desc
    </a>
  </desc>
</svg>
<math>
  <mtext
    class="host"
  >
    <a>
      mtext
    </a>
  </mtext>
</math>
<button
  class="edit"
>
  edit
</button>
<button
  class="show"
>
  show
</button>
```
## Change
```
INSERT: svg > foreignobject:nth-of-type(2) > :is(::text("hidden: "), input)
```

# Update
```js
for (const el of document.querySelectorAll(".host *")) {
el.setAttribute("ns", el.namespaceURI);
}
```
```html
<svg>
  <foreignobject
    class="host"
    height="100"
    width="100"
  >
    <input
      ns="http://www.w3.org/1999/xhtml"
      value="if"
    />
    <input
      ns="http://www.w3.org/1999/xhtml"
      value="dynamic"
    />
    <input
      ns="http://www.w3.org/1999/xhtml"
      value="html"
    />
  </foreignobject>
  <foreignobject
    class="host"
  >
    hidden: 
    <input
      ns="http://www.w3.org/1999/xhtml"
      value="hidden"
    />
  </foreignobject>
  <desc
    class="host"
  >
    <a
      ns="http://www.w3.org/1999/xhtml"
    >
      desc
    </a>
  </desc>
</svg>
<math>
  <mtext
    class="host"
  >
    <a
      ns="http://www.w3.org/1999/xhtml"
    >
      mtext
    </a>
  </mtext>
</math>
<button
  class="edit"
>
  edit
</button>
<button
  class="show"
>
  show
</button>
```
## Change
```
UPDATE: svg > foreignobject:nth-of-type(1) > input:nth-of-type(1)[ns] null => "http://www.w3.org/1999/xhtml"
UPDATE: svg > foreignobject:nth-of-type(1) > input:nth-of-type(2)[ns] null => "http://www.w3.org/1999/xhtml"
UPDATE: svg > foreignobject:nth-of-type(1) > input:nth-of-type(3)[ns] null => "http://www.w3.org/1999/xhtml"
UPDATE: svg > foreignobject:nth-of-type(2) > input[ns] null => "http://www.w3.org/1999/xhtml"
UPDATE: svg > desc > a[ns] null => "http://www.w3.org/1999/xhtml"
UPDATE: math > mtext > a[ns] null => "http://www.w3.org/1999/xhtml"
```
