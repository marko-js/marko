# Render
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div>
      mounted
    </div>
    <!--M_*1 #div/1-->
    <div>
      child
    </div>
    <!--M_$3-->
    <!--M_|1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={"#childScope/0":_.d={input:_.c={}}}},2:_.b,3:_.d},_.b._=_.a,_.c.write=_._["__tests__/template.marko_1/write"](_.b),_.e),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div0/#text
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
    <div>
      destroyed
    </div>
    <!--M_*1 #div/1-->
    <!--M_|1 #text/2 2-->
    <!--M_$3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={"#childScope/0":_.d={input:_.c={}}}},2:_.b,3:_.d},_.b._=_.a,_.c.write=_._["__tests__/template.marko_1/write"](_.b),_.e),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment2 after html/body/#comment3
INSERT html/body/#comment2
REMOVE #text in html/body/div
INSERT html/body/div/#text
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
    <div>
      mounted
    </div>
    <!--M_*1 #div/1-->
    <div>
      child
    </div>
    <!--M_$3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={"#childScope/0":_.d={input:_.c={}}}},2:_.b,3:_.d},_.b._=_.a,_.c.write=_._["__tests__/template.marko_1/write"](_.b),_.e),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div1
REMOVE #comment after html/body/div1
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
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
    <div>
      destroyed
    </div>
    <!--M_*1 #div/1-->
    <!--M_|1 #text/2 2-->
    <!--M_$3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={"#childScope/0":_.d={input:_.c={}}}},2:_.b,3:_.d},_.b._=_.a,_.c.write=_._["__tests__/template.marko_1/write"](_.b),_.e),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment2
REMOVE #text in html/body/div
INSERT html/body/div/#text
REMOVE div after html/body/#comment2
```