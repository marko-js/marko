# Render
```html
<html>
  <head />
  <body>
    <div>
      <div
        class="by-string"
      >
        first
        <!--M_*2 #text/0-->
        second
        <!--M_*3 #text/0-->
        third
        <!--M_*4 #text/0-->
        <!--M_|1 #div/0 4 3 2-->
      </div>
      <!--M_*1 #div/0-->
      <button>
        Rotate
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#div/0(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},2:_.b,3:_.c,4:_.d}),1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <div
        class="by-string"
      >
        <!--M_*2 #text/0-->
        second
        <!--M_*3 #text/0-->
        third
        <!--M_*4 #text/0-->
        <!--M_|1 #div/0 4 3 2-->
        first
      </div>
      <!--M_*1 #div/0-->
      <button>
        Rotate
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#div/0(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},2:_.b,3:_.c,4:_.d}),1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/div/#text2 before html/body/div/div/#comment0
INSERT html/body/div/div/#text2
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <div
        class="by-string"
      >
        <!--M_*2 #text/0-->
        <!--M_*3 #text/0-->
        third
        <!--M_*4 #text/0-->
        <!--M_|1 #div/0 4 3 2-->
        firstsecond
      </div>
      <!--M_*1 #div/0-->
      <button>
        Rotate
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#div/0(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},2:_.b,3:_.c,4:_.d}),1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/div/#text2 after html/body/div/div/#comment0
INSERT html/body/div/div/#text2
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <div
        class="by-string"
      >
        <!--M_*2 #text/0-->
        <!--M_*3 #text/0-->
        <!--M_*4 #text/0-->
        <!--M_|1 #div/0 4 3 2-->
        firstsecondthird
      </div>
      <!--M_*1 #div/0-->
      <button>
        Rotate
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#div/0(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},2:_.b,3:_.c,4:_.d}),1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/div/#text2 after html/body/div/div/#comment1
INSERT html/body/div/div/#text2
```