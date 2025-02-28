# Render
```html
<html>
  <head />
  <body>
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:{"items/3":[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},2:_.b}),1,"__tests__/template.marko_0_items",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:{"items/3":[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},2:_.b}),1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/div1
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:{"items/3":[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},2:_.b}),1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE div after html/body/div/div
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:{"items/3":[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},2:_.b}),1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment0 after div
INSERT html/body/div/#comment0
REMOVE div before html/body/div/#comment0
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:{"items/3":[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},2:_.b}),1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #comment before html/body/div/button0
INSERT html/body/div/div
```