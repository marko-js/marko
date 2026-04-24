# Render
```html
<div>
  <!--M_*1 #text/0-->
</div>
<div>
  <!--M_*1 #text/1-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      index: -1
    }]),
    "__tests__/template.marko_0_index 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div0/#text
INSERT div1/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  0
  <!--M_*1 #text/0-->
</div>
<div>
  Dylan
  <!--M_*1 #text/1-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      index: -1
    }]),
    "__tests__/template.marko_0_index 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div0/#text "" => "0"
UPDATE div1/#text "" => "Dylan"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  1
  <!--M_*1 #text/0-->
</div>
<div>
  Michael
  <!--M_*1 #text/1-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      index: -1
    }]),
    "__tests__/template.marko_0_index 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div0/#text "0" => "1"
UPDATE div1/#text "Dylan" => "Michael"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  2
  <!--M_*1 #text/0-->
</div>
<div>
  Ryan
  <!--M_*1 #text/1-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      index: -1
    }]),
    "__tests__/template.marko_0_index 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div0/#text "1" => "2"
UPDATE div1/#text "Michael" => "Ryan"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  3
  <!--M_*1 #text/0-->
</div>
<div>
  Luke
  <!--M_*1 #text/1-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      index: -1
    }]),
    "__tests__/template.marko_0_index 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div0/#text "2" => "3"
UPDATE div1/#text "Ryan" => "Luke"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <!--M_*1 #text/0-->
</div>
<div>
  <!--M_*1 #text/1-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      index: -1
    }]),
    "__tests__/template.marko_0_index 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div0/#text "3" => ""
UPDATE div1/#text "Luke" => ""
```