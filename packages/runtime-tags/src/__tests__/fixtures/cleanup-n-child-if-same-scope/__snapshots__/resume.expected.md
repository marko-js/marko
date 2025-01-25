# Render
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
    <!--M_[1-->
    <div>
      a
    </div>
    <span>
      b
    </span>
    <p>
      c
    </p>
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_1",0,"__tests__/template.marko_0_show",0];M._.w()
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
    <!--M_*0 #button/0-->
    <pre>
      
mounted
destroyed
    </pre>
    <!--M_*0 #pre/1-->
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_1",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment2 after p
INSERT html/body/#comment2
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
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
    <!--M_*0 #button/0-->
    <pre>
      
mounted
destroyed
mounted
    </pre>
    <!--M_*0 #pre/1-->
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_1",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
INSERT html/body/span
INSERT html/body/p
REMOVE #comment after html/body/p
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
    <!--M_*0 #button/0-->
    <pre>
      
mounted
destroyed
mounted
destroyed
    </pre>
    <!--M_*0 #pre/1-->
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_1",0,"__tests__/template.marko_0_show",0];M._.w()
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
REMOVE span after html/body/#comment2
REMOVE p after html/body/#comment2
```