# Render {}
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <pre>
      
mounted
    </pre>
    <!--M_*0 #pre/1-->
    <div>
      child
    </div>
    <!--M_$1-->
    <!--M_|0 #text/2 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_1",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/pre2/#text0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <pre>
      
mounted
destroyed
    </pre>
    <!--M_*0 #pre/1-->
    <!--M_|0 #text/2 1-->
    <!--M_$1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_1",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment4 after #document/html0/body1/#comment5
inserted #document/html0/body1/#comment4
removed #text in #document/html0/body1/pre2
inserted #document/html0/body1/pre2/#text0
removed div after #document/html0/body1/#comment4
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <pre>
      
mounted
destroyed
mounted
    </pre>
    <!--M_*0 #pre/1-->
    <div>
      child
    </div>
    <!--M_$1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_1",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div4
removed #comment after #document/html0/body1/div4
removed #text in #document/html0/body1/pre2
inserted #document/html0/body1/pre2/#text0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <pre>
      
mounted
destroyed
mounted
destroyed
    </pre>
    <!--M_*0 #pre/1-->
    <!--M_|0 #text/2 1-->
    <!--M_$1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_1",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#comment4
removed #text in #document/html0/body1/pre2
inserted #document/html0/body1/pre2/#text0
removed div after #document/html0/body1/#comment4
```