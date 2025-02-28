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
    <!--M_[2-->
    <div>
      a
    </div>
    <span>
      b
    </span>
    <p>
      c
    </p>
    <!--M_$3-->
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={show:!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b,3:{input:{write:_._["__tests__/template.marko_1/write"](_.b)}}},_.b._=_.a,_.c),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()
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
    <!--M_]1 #text/2-->
    <!--M_$3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={show:!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b,3:{input:{write:_._["__tests__/template.marko_1/write"](_.b)}}},_.b._=_.a,_.c),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()
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
REMOVE #comment after html/body/#comment2
REMOVE div after html/body/#comment2
REMOVE span after html/body/#comment2
REMOVE p after html/body/#comment2
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
      a
    </div>
    <span>
      b
    </span>
    <p>
      c
    </p>
    <!--M_$3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={show:!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b,3:{input:{write:_._["__tests__/template.marko_1/write"](_.b)}}},_.b._=_.a,_.c),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div1, html/body/span, html/body/p
REMOVE #comment after html/body/p
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
    <!--M_]1 #text/2-->
    <!--M_$3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={show:!0,"#text/2(":0,"#text/2!":_.b={}},2:_.b,3:{input:{write:_._["__tests__/template.marko_1/write"](_.b)}}},_.b._=_.a,_.c),3,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0_show",0];M._.w()
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
REMOVE span after html/body/#comment2
REMOVE p after html/body/#comment2
```