# Render
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <pre>
      
mounted
    </pre>
    <!--M_*1 #pre/1-->
    <div>
      child
    </div>
    <!--M_|1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"show/3":!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b},_.b._=_.a,_.c),2,"__tests__/template.marko_1",1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/pre/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <pre>
      
mounted
destroyed
    </pre>
    <!--M_*1 #pre/1-->
    <!--M_|1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"show/3":!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b},_.b._=_.a,_.c),2,"__tests__/template.marko_1",1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment2 after div
INSERT html/body/#comment2
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
REMOVE div after html/body/#comment2
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
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
      child
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"show/3":!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b},_.b._=_.a,_.c),2,"__tests__/template.marko_1",1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE #comment after html/body/div
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
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
    <!--M_|1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"show/3":!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b},_.b._=_.a,_.c),2,"__tests__/template.marko_1",1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment2
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
REMOVE div after html/body/#comment2
```