# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_|1 #text/0-->
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{id:0,items:[]}}),1,"__tests__/template.marko_0_items",1,"__tests__/template.marko_0_id_items"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#add").click();
```
```html
<html>
  <head />
  <body>
    <div>
      1
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{id:0,items:[]}}),1,"__tests__/template.marko_0_items",1,"__tests__/template.marko_0_id_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #comment before html/body/div/button0
INSERT html/body/div/#text
```

# Render
```js
container.querySelector("#add").click();
```
```html
<html>
  <head />
  <body>
    <div>
      12
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{id:0,items:[]}}),1,"__tests__/template.marko_0_items",1,"__tests__/template.marko_0_id_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text1
```

# Render
```js
container.querySelector("#remove").click();
```
```html
<html>
  <head />
  <body>
    <div>
      1
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{id:0,items:[]}}),1,"__tests__/template.marko_0_items",1,"__tests__/template.marko_0_id_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text after html/body/div/#text
```

# Render
```js
container.querySelector("#add").click();
```
```html
<html>
  <head />
  <body>
    <div>
      13
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{id:0,items:[]}}),1,"__tests__/template.marko_0_items",1,"__tests__/template.marko_0_id_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text1
```