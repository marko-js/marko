# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <div>
        Marko
        <!--M_*1 #text/0-->
        : 
        <!---->
        HTML Reimagined
        <!--M_*1 #text/1-->
      </div>
      <!--M_|0 #text/0 1-->
      <button
        id="add"
      >
        Add
      </button>
      <!--M_*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M_*0 #button/2-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},1:_.b}),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("#add").click()

```html
<html>
  <head />
  <body>
    <div>
      <div>
        Marko
        <!--M_*1 #text/0-->
        : 
        <!---->
        HTML Reimagined
        <!--M_*1 #text/1-->
      </div>
      <div>
        JavaScript: Java, but scriptier
      </div>
      <!--M_|0 #text/0 1-->
      <button
        id="add"
      >
        Add
      </button>
      <!--M_*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M_*0 #button/2-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},1:_.b}),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/div1
```


# Render 
container.querySelector("#remove").click()

```html
<html>
  <head />
  <body>
    <div>
      <div>
        Marko
        <!--M_*1 #text/0-->
        : 
        <!---->
        HTML Reimagined
        <!--M_*1 #text/1-->
      </div>
      <!--M_|0 #text/0 1-->
      <button
        id="add"
      >
        Add
      </button>
      <!--M_*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M_*0 #button/2-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},1:_.b}),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed div after #document/html0/body1/div0/div0
```


# Render 
container.querySelector("#remove").click()

```html
<html>
  <head />
  <body>
    <div>
      <!--M_|0 #text/0 1-->
      <button
        id="add"
      >
        Add
      </button>
      <!--M_*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M_*0 #button/2-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},1:_.b}),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/#comment0 after div
inserted #document/html0/body1/div0/#comment0
removed div before #document/html0/body1/div0/#comment0
```


# Render 
container.querySelector("#add").click()

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
      <!--M_*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M_*0 #button/2-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map(_.a=[[0,_.b={}]])},1:_.b}),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/div0
removed #comment before #document/html0/body1/div0/div0
```