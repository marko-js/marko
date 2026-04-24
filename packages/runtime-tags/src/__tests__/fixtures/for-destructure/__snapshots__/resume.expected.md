# Render
```html
<div>
  <div>
    Marko
    <!--M_*2 #text/0-->
    : 
    <!---->
    HTML Reimagined
    <!--M_*2 #text/1-->
  </div>
  <!--M_|1 #text/0 2-->
  <button
    id="add"
  >
    Add
  </button>
  <!--M_*1 #button/1-->
  <button
    id="remove"
  >
    Remove
  </button>
  <!--M_*1 #button/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      items: [
      {
        name: "Marko",
        description: "HTML Reimagined"
      }]
    }]),
    "__tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("#add").click();
```
```html
<div>
  <div>
    Marko
    <!--M_*2 #text/0-->
    : 
    <!---->
    HTML Reimagined
    <!--M_*2 #text/1-->
  </div>
  <div>
    JavaScript: Java, but scriptier
  </div>
  <!--M_|1 #text/0 2-->
  <button
    id="add"
  >
    Add
  </button>
  <!--M_*1 #button/1-->
  <button
    id="remove"
  >
    Remove
  </button>
  <!--M_*1 #button/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      items: [
      {
        name: "Marko",
        description: "HTML Reimagined"
      }]
    }]),
    "__tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/div1
```

# Render
```js
container.querySelector("#remove").click();
```
```html
<div>
  <div>
    Marko
    <!--M_*2 #text/0-->
    : 
    <!---->
    HTML Reimagined
    <!--M_*2 #text/1-->
  </div>
  <!--M_|1 #text/0 2-->
  <button
    id="add"
  >
    Add
  </button>
  <!--M_*1 #button/1-->
  <button
    id="remove"
  >
    Remove
  </button>
  <!--M_*1 #button/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      items: [
      {
        name: "Marko",
        description: "HTML Reimagined"
      }]
    }]),
    "__tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE div after div/div
```

# Render
```js
container.querySelector("#remove").click();
```
```html
<div>
  <!--M_|1 #text/0 2-->
  <button
    id="add"
  >
    Add
  </button>
  <!--M_*1 #button/1-->
  <button
    id="remove"
  >
    Remove
  </button>
  <!--M_*1 #button/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      items: [
      {
        name: "Marko",
        description: "HTML Reimagined"
      }]
    }]),
    "__tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE div/#comment0 after div
INSERT div/#comment0
REMOVE div before div/#comment0
```

# Render
```js
container.querySelector("#add").click();
```
```html
<div>
  <div>
    JavaScript: Java, but scriptier
  </div>
  <button
    id="add"
  >
    Add
  </button>
  <!--M_*1 #button/1-->
  <button
    id="remove"
  >
    Remove
  </button>
  <!--M_*1 #button/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      items: [
      {
        name: "Marko",
        description: "HTML Reimagined"
      }]
    }]),
    "__tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment before div/button0
INSERT div/div
```