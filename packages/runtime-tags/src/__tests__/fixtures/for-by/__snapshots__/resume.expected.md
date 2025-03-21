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
        <!--M_=1 #div/0 4 3 2-->
      </div>
      <div
        class="by-function"
      >
        first
        <!--M_*5 #text/0-->
        second
        <!--M_*6 #text/0-->
        third
        <!--M_*7 #text/0-->
        <!--M_=1 #div/1 7 6 5-->
      </div>
      <div
        class="by-unknown-string"
      >
        first
        <!--M_*8 #text/0-->
        second
        <!--M_*9 #text/0-->
        third
        <!--M_*10 #text/0-->
        <!--M_=1 #div/2 10 9 8-->
      </div>
      <div
        class="by-unknown-function"
      >
        first
        <!--M_*11 #text/0-->
        second
        <!--M_*12 #text/0-->
        third
        <!--M_*13 #text/0-->
        <!--M_=1 #div/3 13 12 11-->
      </div>
      <div
        class="by-unknown-missing"
      >
        first
        <!--M_*14 #text/0-->
        second
        <!--M_*15 #text/0-->
        third
        <!--M_*16 #text/0-->
        <!--M_=1 #div/4 16 15 14-->
      </div>
      <button>
        Rotate
      </button>
      <!--M_*1 #button/5-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.u={1:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"LoopScopeMap:#div/0":new Map(_.a=[[0,_.f={}],[1,_.g={}],[2,_.h={}]]),"LoopScopeMap:#div/1":new Map(_.b=[[0,_.i={}],[1,_.j={}],[2,_.k={}]]),"LoopScopeMap:#div/2":new Map(_.c=[[0,_.l={}],[1,_.m={}],[2,_.n={}]]),"LoopScopeMap:#div/3":new Map(_.d=[[0,_.o={}],[1,_.p={}],[2,_.q={}]]),"LoopScopeMap:#div/4":new Map(_.e=[[0,_.r={}],[1,_.s={}],[2,_.t={}]])},2:_.f,3:_.g,4:_.h,5:_.i,6:_.j,7:_.k,8:_.l,9:_.m,10:_.n,11:_.o,12:_.p,13:_.q,14:_.r,15:_.s,16:_.t}),1,"__tests__/template.marko_0_items"];M._.w()
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
        <!--M_=1 #div/0 4 3 2-->
        first
      </div>
      <div
        class="by-function"
      >
        <!--M_*5 #text/0-->
        second
        <!--M_*6 #text/0-->
        third
        <!--M_*7 #text/0-->
        <!--M_=1 #div/1 7 6 5-->
        first
      </div>
      <div
        class="by-unknown-string"
      >
        <!--M_*8 #text/0-->
        second
        <!--M_*9 #text/0-->
        third
        <!--M_*10 #text/0-->
        <!--M_=1 #div/2 10 9 8-->
        first
      </div>
      <div
        class="by-unknown-function"
      >
        <!--M_*11 #text/0-->
        second
        <!--M_*12 #text/0-->
        third
        <!--M_*13 #text/0-->
        <!--M_=1 #div/3 13 12 11-->
        first
      </div>
      <div
        class="by-unknown-missing"
      >
        second
        <!--M_*14 #text/0-->
        third
        <!--M_*15 #text/0-->
        first
        <!--M_*16 #text/0-->
        <!--M_=1 #div/4 16 15 14-->
      </div>
      <button>
        Rotate
      </button>
      <!--M_*1 #button/5-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.u={1:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"LoopScopeMap:#div/0":new Map(_.a=[[0,_.f={}],[1,_.g={}],[2,_.h={}]]),"LoopScopeMap:#div/1":new Map(_.b=[[0,_.i={}],[1,_.j={}],[2,_.k={}]]),"LoopScopeMap:#div/2":new Map(_.c=[[0,_.l={}],[1,_.m={}],[2,_.n={}]]),"LoopScopeMap:#div/3":new Map(_.d=[[0,_.o={}],[1,_.p={}],[2,_.q={}]]),"LoopScopeMap:#div/4":new Map(_.e=[[0,_.r={}],[1,_.s={}],[2,_.t={}]])},2:_.f,3:_.g,4:_.h,5:_.i,6:_.j,7:_.k,8:_.l,9:_.m,10:_.n,11:_.o,12:_.p,13:_.q,14:_.r,15:_.s,16:_.t}),1,"__tests__/template.marko_0_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/div0/#text2 before html/body/div/div0/#comment0
INSERT html/body/div/div0/#text2
REMOVE html/body/div/div1/#text2 before html/body/div/div1/#comment0
INSERT html/body/div/div1/#text2
REMOVE html/body/div/div2/#text2 before html/body/div/div2/#comment0
INSERT html/body/div/div2/#text2
REMOVE html/body/div/div3/#text2 before html/body/div/div3/#comment0
INSERT html/body/div/div3/#text2
UPDATE html/body/div/div4/#text0 "first" => "second"
UPDATE html/body/div/div4/#text1 "second" => "third"
UPDATE html/body/div/div4/#text2 "third" => "first"
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
        <!--M_=1 #div/0 4 3 2-->
        firstsecond
      </div>
      <div
        class="by-function"
      >
        <!--M_*5 #text/0-->
        <!--M_*6 #text/0-->
        third
        <!--M_*7 #text/0-->
        <!--M_=1 #div/1 7 6 5-->
        firstsecond
      </div>
      <div
        class="by-unknown-string"
      >
        <!--M_*8 #text/0-->
        <!--M_*9 #text/0-->
        third
        <!--M_*10 #text/0-->
        <!--M_=1 #div/2 10 9 8-->
        firstsecond
      </div>
      <div
        class="by-unknown-function"
      >
        <!--M_*11 #text/0-->
        <!--M_*12 #text/0-->
        third
        <!--M_*13 #text/0-->
        <!--M_=1 #div/3 13 12 11-->
        firstsecond
      </div>
      <div
        class="by-unknown-missing"
      >
        third
        <!--M_*14 #text/0-->
        first
        <!--M_*15 #text/0-->
        second
        <!--M_*16 #text/0-->
        <!--M_=1 #div/4 16 15 14-->
      </div>
      <button>
        Rotate
      </button>
      <!--M_*1 #button/5-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.u={1:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"LoopScopeMap:#div/0":new Map(_.a=[[0,_.f={}],[1,_.g={}],[2,_.h={}]]),"LoopScopeMap:#div/1":new Map(_.b=[[0,_.i={}],[1,_.j={}],[2,_.k={}]]),"LoopScopeMap:#div/2":new Map(_.c=[[0,_.l={}],[1,_.m={}],[2,_.n={}]]),"LoopScopeMap:#div/3":new Map(_.d=[[0,_.o={}],[1,_.p={}],[2,_.q={}]]),"LoopScopeMap:#div/4":new Map(_.e=[[0,_.r={}],[1,_.s={}],[2,_.t={}]])},2:_.f,3:_.g,4:_.h,5:_.i,6:_.j,7:_.k,8:_.l,9:_.m,10:_.n,11:_.o,12:_.p,13:_.q,14:_.r,15:_.s,16:_.t}),1,"__tests__/template.marko_0_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/div0/#text2 after html/body/div/div0/#comment0
INSERT html/body/div/div0/#text2
REMOVE html/body/div/div1/#text2 after html/body/div/div1/#comment0
INSERT html/body/div/div1/#text2
REMOVE html/body/div/div2/#text2 after html/body/div/div2/#comment0
INSERT html/body/div/div2/#text2
REMOVE html/body/div/div3/#text2 after html/body/div/div3/#comment0
INSERT html/body/div/div3/#text2
UPDATE html/body/div/div4/#text0 "second" => "third"
UPDATE html/body/div/div4/#text1 "third" => "first"
UPDATE html/body/div/div4/#text2 "first" => "second"
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
        <!--M_=1 #div/0 4 3 2-->
        firstsecondthird
      </div>
      <div
        class="by-function"
      >
        <!--M_*5 #text/0-->
        <!--M_*6 #text/0-->
        <!--M_*7 #text/0-->
        <!--M_=1 #div/1 7 6 5-->
        firstsecondthird
      </div>
      <div
        class="by-unknown-string"
      >
        <!--M_*8 #text/0-->
        <!--M_*9 #text/0-->
        <!--M_*10 #text/0-->
        <!--M_=1 #div/2 10 9 8-->
        firstsecondthird
      </div>
      <div
        class="by-unknown-function"
      >
        <!--M_*11 #text/0-->
        <!--M_*12 #text/0-->
        <!--M_*13 #text/0-->
        <!--M_=1 #div/3 13 12 11-->
        firstsecondthird
      </div>
      <div
        class="by-unknown-missing"
      >
        first
        <!--M_*14 #text/0-->
        second
        <!--M_*15 #text/0-->
        third
        <!--M_*16 #text/0-->
        <!--M_=1 #div/4 16 15 14-->
      </div>
      <button>
        Rotate
      </button>
      <!--M_*1 #button/5-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.u={1:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"LoopScopeMap:#div/0":new Map(_.a=[[0,_.f={}],[1,_.g={}],[2,_.h={}]]),"LoopScopeMap:#div/1":new Map(_.b=[[0,_.i={}],[1,_.j={}],[2,_.k={}]]),"LoopScopeMap:#div/2":new Map(_.c=[[0,_.l={}],[1,_.m={}],[2,_.n={}]]),"LoopScopeMap:#div/3":new Map(_.d=[[0,_.o={}],[1,_.p={}],[2,_.q={}]]),"LoopScopeMap:#div/4":new Map(_.e=[[0,_.r={}],[1,_.s={}],[2,_.t={}]])},2:_.f,3:_.g,4:_.h,5:_.i,6:_.j,7:_.k,8:_.l,9:_.m,10:_.n,11:_.o,12:_.p,13:_.q,14:_.r,15:_.s,16:_.t}),1,"__tests__/template.marko_0_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/div0/#text2 after html/body/div/div0/#comment1
INSERT html/body/div/div0/#text2
REMOVE html/body/div/div1/#text2 after html/body/div/div1/#comment1
INSERT html/body/div/div1/#text2
REMOVE html/body/div/div2/#text2 after html/body/div/div2/#comment1
INSERT html/body/div/div2/#text2
REMOVE html/body/div/div3/#text2 after html/body/div/div3/#comment1
INSERT html/body/div/div3/#text2
UPDATE html/body/div/div4/#text0 "third" => "first"
UPDATE html/body/div/div4/#text1 "first" => "second"
UPDATE html/body/div/div4/#text2 "second" => "third"
```