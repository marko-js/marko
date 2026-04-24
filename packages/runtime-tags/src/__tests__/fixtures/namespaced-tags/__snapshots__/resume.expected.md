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
      <!--M_[-->
      Hi
      <!--M_]2 #a/0 3-->
    </a>
    <!--M_'1 #text/2 2-->
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
      <!--M_[-->
      Hi
      <!--M_]4 #a/0 5-->
    </a>
    <!--M_'1 #text/4 4-->
  </math>
  <div>
    <!--M_[-->
    <a
      href="#"
      ns="http://www.w3.org/1999/xhtml"
    />
    <!--M_]6 #div/0 7-->
  </div>
  <!--M_'1 #text/5 6-->
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <!--M_*1 #button/6-->
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
  <!--M_*1 #button/7-->
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ConditionalRenderer:#text/2": "a",
      "ConditionalRenderer:#text/4": "a",
      "ConditionalRenderer:#text/5": "div",
      input_value: "\x3Ca href=#&gt;\x3C/a&gt;",
      Parent: "div",
      Child: "a"
    },
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_2_content"
    }, 1,
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_3_content"
    }, 1,
    {
      "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content"
    }, _.d = {
      _: _.a
    }], (_.c = new Set).add(_.d), _.b),
    "__tests__/template.marko_0_Parent_Child 1 __tests__/template.marko_0_Child 1 __tests__/template.marko_0_Parent 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/svg/a1/#text1
INSERT div/math/a1/#text1
INSERT div/div/#text
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
      <!--M_[-->
      Hi
      <!--M_]2 #a/0 3-->
    </a>
    <!--M_'1 #text/2 2-->
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
      <!--M_[-->
      Hi
      <!--M_]4 #a/0 5-->
    </a>
    <!--M_'1 #text/4 4-->
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <!--M_'1 #text/5 6-->
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <!--M_*1 #button/6-->
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
  <!--M_*1 #button/7-->
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ConditionalRenderer:#text/2": "a",
      "ConditionalRenderer:#text/4": "a",
      "ConditionalRenderer:#text/5": "div",
      input_value: "\x3Ca href=#&gt;\x3C/a&gt;",
      Parent: "div",
      Child: "a"
    },
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_2_content"
    }, 1,
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_3_content"
    }, 1,
    {
      "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content"
    }, _.d = {
      _: _.a
    }], (_.c = new Set).add(_.d), _.b),
    "__tests__/template.marko_0_Parent_Child 1 __tests__/template.marko_0_Child 1 __tests__/template.marko_0_Parent 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/svg1
REMOVE div after div/svg1
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
      <!--M_[-->
      Hi
      <!--M_]2 #a/0 3-->
    </a>
    <!--M_'1 #text/2 2-->
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
      <!--M_[-->
      Hi
      <!--M_]4 #a/0 5-->
    </a>
    <!--M_'1 #text/4 4-->
  </math>
  <div>
    <a
      href="#"
      ns="http://www.w3.org/1999/xhtml"
    />
  </div>
  <!--M_'1 #text/5 6-->
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <!--M_*1 #button/6-->
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
  <!--M_*1 #button/7-->
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ConditionalRenderer:#text/2": "a",
      "ConditionalRenderer:#text/4": "a",
      "ConditionalRenderer:#text/5": "div",
      input_value: "\x3Ca href=#&gt;\x3C/a&gt;",
      Parent: "div",
      Child: "a"
    },
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_2_content"
    }, 1,
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_3_content"
    }, 1,
    {
      "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content"
    }, _.d = {
      _: _.a
    }], (_.c = new Set).add(_.d), _.b),
    "__tests__/template.marko_0_Parent_Child 1 __tests__/template.marko_0_Child 1 __tests__/template.marko_0_Parent 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/div
REMOVE svg after div/div
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
      <!--M_[-->
      Hi
      <!--M_]2 #a/0 3-->
    </a>
    <!--M_'1 #text/2 2-->
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
      <!--M_[-->
      Hi
      <!--M_]4 #a/0 5-->
    </a>
    <!--M_'1 #text/4 4-->
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <!--M_'1 #text/5 6-->
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <!--M_*1 #button/6-->
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
  <!--M_*1 #button/7-->
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ConditionalRenderer:#text/2": "a",
      "ConditionalRenderer:#text/4": "a",
      "ConditionalRenderer:#text/5": "div",
      input_value: "\x3Ca href=#&gt;\x3C/a&gt;",
      Parent: "div",
      Child: "a"
    },
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_2_content"
    }, 1,
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_3_content"
    }, 1,
    {
      "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content"
    }, _.d = {
      _: _.a
    }], (_.c = new Set).add(_.d), _.b),
    "__tests__/template.marko_0_Parent_Child 1 __tests__/template.marko_0_Child 1 __tests__/template.marko_0_Parent 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/svg1
REMOVE div after div/svg1
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
    <!--M_'1 #text/2 2-->
  </svg>
  <math>
    <a
      href="#"
      ns="http://www.w3.org/1998/Math/MathML"
    />
    Hi
    <!--M_'1 #text/4 4-->
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <!--M_'1 #text/5 6-->
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <!--M_*1 #button/6-->
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
  <!--M_*1 #button/7-->
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ConditionalRenderer:#text/2": "a",
      "ConditionalRenderer:#text/4": "a",
      "ConditionalRenderer:#text/5": "div",
      input_value: "\x3Ca href=#&gt;\x3C/a&gt;",
      Parent: "div",
      Child: "a"
    },
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_2_content"
    }, 1,
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_3_content"
    }, 1,
    {
      "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content"
    }, _.d = {
      _: _.a
    }], (_.c = new Set).add(_.d), _.b),
    "__tests__/template.marko_0_Parent_Child 1 __tests__/template.marko_0_Child 1 __tests__/template.marko_0_Parent 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/svg0/#text
REMOVE a after div/svg0/#text
INSERT div/math/#text
REMOVE a after div/math/#text
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
    <!--M_'1 #text/2 2-->
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
    <!--M_'1 #text/4 4-->
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <!--M_'1 #text/5 6-->
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <!--M_*1 #button/6-->
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
  <!--M_*1 #button/7-->
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ConditionalRenderer:#text/2": "a",
      "ConditionalRenderer:#text/4": "a",
      "ConditionalRenderer:#text/5": "div",
      input_value: "\x3Ca href=#&gt;\x3C/a&gt;",
      Parent: "div",
      Child: "a"
    },
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_2_content"
    }, 1,
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_3_content"
    }, 1,
    {
      "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content"
    }, _.d = {
      _: _.a
    }], (_.c = new Set).add(_.d), _.b),
    "__tests__/template.marko_0_Parent_Child 1 __tests__/template.marko_0_Child 1 __tests__/template.marko_0_Parent 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/svg0/a1
REMOVE #text after div/svg0/a1
INSERT div/svg0/a1/#text
UPDATE div/svg0/a1[href] null => "#bar"
INSERT div/math/a1
REMOVE #text after div/math/a1
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
    <!--M_'1 #text/2 2-->
  </svg>
  <math>
    <a
      href="#"
      ns="http://www.w3.org/1998/Math/MathML"
    />
    Hi
    <!--M_'1 #text/4 4-->
  </math>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    />
  </svg>
  <!--M_'1 #text/5 6-->
  <button
    class="toggle-parent"
  >
    Toggle Parent
  </button>
  <!--M_*1 #button/6-->
  <button
    class="toggle-child"
  >
    Toggle Child
  </button>
  <!--M_*1 #button/7-->
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ConditionalRenderer:#text/2": "a",
      "ConditionalRenderer:#text/4": "a",
      "ConditionalRenderer:#text/5": "div",
      input_value: "\x3Ca href=#&gt;\x3C/a&gt;",
      Parent: "div",
      Child: "a"
    },
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_2_content"
    }, 1,
    {
      "ConditionalRenderer:#a/0": "__tests__/template.marko_3_content"
    }, 1,
    {
      "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content"
    }, _.d = {
      _: _.a
    }], (_.c = new Set).add(_.d), _.b),
    "__tests__/template.marko_0_Parent_Child 1 __tests__/template.marko_0_Child 1 __tests__/template.marko_0_Parent 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/svg0/#text
REMOVE a after div/svg0/#text
INSERT div/math/#text
REMOVE a after div/math/#text
```