# Render
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<pre>
  
mounted
</pre>
<!--M_*1 #pre/1-->
<!--M_[-->
<div>
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      show: !0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
INSERT pre/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<pre>
  
mounted
destroyed
</pre>
<!--M_*1 #pre/1-->
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      show: !0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment2 after #text
INSERT #comment2
REMOVE #comment after #comment2
REMOVE div after #comment2
REMOVE span after #comment2
REMOVE p after #comment2
REMOVE #text after #comment2
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<pre>
  
mounted
destroyed
mounted
</pre>
<!--M_*1 #pre/1-->
<div>
  a
</div>
<span>
  b
</span>
<p>
  c
</p>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      show: !0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div, span, p
REMOVE #comment after p
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<pre>
  
mounted
destroyed
mounted
destroyed
</pre>
<!--M_*1 #pre/1-->
<!--M_]1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      show: !0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #comment2
REMOVE div after #comment2
REMOVE span after #comment2
REMOVE p after #comment2
REMOVE #text in pre
INSERT pre/#text
```