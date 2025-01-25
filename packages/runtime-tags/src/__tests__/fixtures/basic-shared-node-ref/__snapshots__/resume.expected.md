# Render
```html
<html>
  <head />
  <body>
    <ul>
      <li>
        1
        <!--M_*1 #text/0-->
      </li>
      <li>
        2
        <!--M_*2 #text/0-->
      </li>
      <li>
        3
        <!--M_*3 #text/0-->
      </li>
      <!--M_|0 #ul/0 3 2 1-->
    </ul>
    <!--M_*0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:{open:!0,list:[1,2,3],"#ul/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0,"__tests__/template.marko_0_list",0,"__tests__/template.marko_0_open",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#toggle").click();
```
```html
<html>
  <head />
  <body>
    <ul
      hidden=""
    >
      <li>
        1
        <!--M_*1 #text/0-->
      </li>
      <li>
        2
        <!--M_*2 #text/0-->
      </li>
      <li>
        3
        <!--M_*3 #text/0-->
      </li>
      <!--M_|0 #ul/0 3 2 1-->
    </ul>
    <!--M_*0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:{open:!0,list:[1,2,3],"#ul/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0,"__tests__/template.marko_0_list",0,"__tests__/template.marko_0_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul[hidden] null => ""
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<html>
  <head />
  <body>
    <ul>
      <li>
        1
        <!--M_*1 #text/0-->
      </li>
      <li>
        2
        <!--M_*2 #text/0-->
      </li>
      <li>
        3
        <!--M_*3 #text/0-->
      </li>
      <!--M_|0 #ul/0 3 2 1-->
    </ul>
    <!--M_*0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:{open:!0,list:[1,2,3],"#ul/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0,"__tests__/template.marko_0_list",0,"__tests__/template.marko_0_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul[hidden] "" => null
```

# Render
```js
container.querySelector("#reverse").click();
```
```html
<html>
  <head />
  <body>
    <ul>
      <li>
        3
        <!--M_*3 #text/0-->
      </li>
      <li>
        2
        <!--M_*2 #text/0-->
      </li>
      <li>
        1
        <!--M_*1 #text/0-->
      </li>
      <!--M_|0 #ul/0 3 2 1-->
    </ul>
    <!--M_*0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:{open:!0,list:[1,2,3],"#ul/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0,"__tests__/template.marko_0_list",0,"__tests__/template.marko_0_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/ul/li1 after html/body/ul/li2
INSERT html/body/ul/li1
REMOVE html/body/ul/li0 after html/body/ul/li2
INSERT html/body/ul/li0
```