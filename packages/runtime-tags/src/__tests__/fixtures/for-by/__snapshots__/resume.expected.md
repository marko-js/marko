# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <div
        class="by-string"
      >
        first
        <!--M_*1 #text/0-->
        second
        <!--M_*2 #text/0-->
        third
        <!--M_*3 #text/0-->
        <!--M_|0 #div/0 3 2 1-->
      </div>
      <!--M_*0 #div/0-->
      <div
        class="by-function"
      >
        first
        <!--M_*4 #text/0-->
        second
        <!--M_*5 #text/0-->
        third
        <!--M_*6 #text/0-->
        <!--M_|0 #div/1 6 5 4-->
      </div>
      <!--M_*0 #div/1-->
      <div
        class="by-unknown-string"
      >
        first
        <!--M_*7 #text/0-->
        second
        <!--M_*8 #text/0-->
        third
        <!--M_*9 #text/0-->
        <!--M_|0 #div/2 9 8 7-->
      </div>
      <!--M_*0 #div/2-->
      <div
        class="by-unknown-function"
      >
        first
        <!--M_*10 #text/0-->
        second
        <!--M_*11 #text/0-->
        third
        <!--M_*12 #text/0-->
        <!--M_|0 #div/3 12 11 10-->
      </div>
      <!--M_*0 #div/3-->
      <div
        class="by-unknown-missing"
      >
        first
        <!--M_*13 #text/0-->
        second
        <!--M_*14 #text/0-->
        third
        <!--M_*15 #text/0-->
        <!--M_|0 #div/4 15 14 13-->
      </div>
      <!--M_*0 #div/4-->
      <button>
        Rotate
      </button>
      <!--M_*0 #button/5-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.u={0:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#div/0(":new Map(_.a=[[0,_.f={}],[1,_.g={}],[2,_.h={}]]),"#div/1(":new Map(_.b=[[0,_.i={}],[1,_.j={}],[2,_.k={}]]),"#div/2(":new Map(_.c=[[0,_.l={}],[1,_.m={}],[2,_.n={}]]),"#div/3(":new Map(_.d=[[0,_.o={}],[1,_.p={}],[2,_.q={}]]),"#div/4(":new Map(_.e=[[0,_.r={}],[1,_.s={}],[2,_.t={}]])},1:_.f,2:_.g,3:_.h,4:_.i,5:_.j,6:_.k,7:_.l,8:_.m,9:_.n,10:_.o,11:_.p,12:_.q,13:_.r,14:_.s,15:_.t}),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <div
        class="by-string"
      >
        <!--M_*1 #text/0-->
        second
        <!--M_*2 #text/0-->
        third
        <!--M_*3 #text/0-->
        <!--M_|0 #div/0 3 2 1-->
        first
      </div>
      <!--M_*0 #div/0-->
      <div
        class="by-function"
      >
        <!--M_*4 #text/0-->
        second
        <!--M_*5 #text/0-->
        third
        <!--M_*6 #text/0-->
        <!--M_|0 #div/1 6 5 4-->
        first
      </div>
      <!--M_*0 #div/1-->
      <div
        class="by-unknown-string"
      >
        <!--M_*7 #text/0-->
        second
        <!--M_*8 #text/0-->
        third
        <!--M_*9 #text/0-->
        <!--M_|0 #div/2 9 8 7-->
        first
      </div>
      <!--M_*0 #div/2-->
      <div
        class="by-unknown-function"
      >
        <!--M_*10 #text/0-->
        second
        <!--M_*11 #text/0-->
        third
        <!--M_*12 #text/0-->
        <!--M_|0 #div/3 12 11 10-->
        first
      </div>
      <!--M_*0 #div/3-->
      <div
        class="by-unknown-missing"
      >
        second
        <!--M_*13 #text/0-->
        third
        <!--M_*14 #text/0-->
        first
        <!--M_*15 #text/0-->
        <!--M_|0 #div/4 15 14 13-->
      </div>
      <!--M_*0 #div/4-->
      <button>
        Rotate
      </button>
      <!--M_*0 #button/5-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.u={0:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#div/0(":new Map(_.a=[[0,_.f={}],[1,_.g={}],[2,_.h={}]]),"#div/1(":new Map(_.b=[[0,_.i={}],[1,_.j={}],[2,_.k={}]]),"#div/2(":new Map(_.c=[[0,_.l={}],[1,_.m={}],[2,_.n={}]]),"#div/3(":new Map(_.d=[[0,_.o={}],[1,_.p={}],[2,_.q={}]]),"#div/4(":new Map(_.e=[[0,_.r={}],[1,_.s={}],[2,_.t={}]])},1:_.f,2:_.g,3:_.h,4:_.i,5:_.j,6:_.k,7:_.l,8:_.m,9:_.n,10:_.o,11:_.p,12:_.q,13:_.r,14:_.s,15:_.t}),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/div0/#text6 before #document/html0/body1/div0/div0/#comment0
inserted #document/html0/body1/div0/div0/#text6
removed #document/html0/body1/div0/div2/#text6 before #document/html0/body1/div0/div2/#comment0
inserted #document/html0/body1/div0/div2/#text6
removed #document/html0/body1/div0/div4/#text6 before #document/html0/body1/div0/div4/#comment0
inserted #document/html0/body1/div0/div4/#text6
removed #document/html0/body1/div0/div6/#text6 before #document/html0/body1/div0/div6/#comment0
inserted #document/html0/body1/div0/div6/#text6
#document/html0/body1/div0/div8/#text0: "first" => "second"
#document/html0/body1/div0/div8/#text2: "second" => "third"
#document/html0/body1/div0/div8/#text4: "third" => "first"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <div
        class="by-string"
      >
        <!--M_*1 #text/0-->
        <!--M_*2 #text/0-->
        third
        <!--M_*3 #text/0-->
        <!--M_|0 #div/0 3 2 1-->
        firstsecond
      </div>
      <!--M_*0 #div/0-->
      <div
        class="by-function"
      >
        <!--M_*4 #text/0-->
        <!--M_*5 #text/0-->
        third
        <!--M_*6 #text/0-->
        <!--M_|0 #div/1 6 5 4-->
        firstsecond
      </div>
      <!--M_*0 #div/1-->
      <div
        class="by-unknown-string"
      >
        <!--M_*7 #text/0-->
        <!--M_*8 #text/0-->
        third
        <!--M_*9 #text/0-->
        <!--M_|0 #div/2 9 8 7-->
        firstsecond
      </div>
      <!--M_*0 #div/2-->
      <div
        class="by-unknown-function"
      >
        <!--M_*10 #text/0-->
        <!--M_*11 #text/0-->
        third
        <!--M_*12 #text/0-->
        <!--M_|0 #div/3 12 11 10-->
        firstsecond
      </div>
      <!--M_*0 #div/3-->
      <div
        class="by-unknown-missing"
      >
        third
        <!--M_*13 #text/0-->
        first
        <!--M_*14 #text/0-->
        second
        <!--M_*15 #text/0-->
        <!--M_|0 #div/4 15 14 13-->
      </div>
      <!--M_*0 #div/4-->
      <button>
        Rotate
      </button>
      <!--M_*0 #button/5-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.u={0:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#div/0(":new Map(_.a=[[0,_.f={}],[1,_.g={}],[2,_.h={}]]),"#div/1(":new Map(_.b=[[0,_.i={}],[1,_.j={}],[2,_.k={}]]),"#div/2(":new Map(_.c=[[0,_.l={}],[1,_.m={}],[2,_.n={}]]),"#div/3(":new Map(_.d=[[0,_.o={}],[1,_.p={}],[2,_.q={}]]),"#div/4(":new Map(_.e=[[0,_.r={}],[1,_.s={}],[2,_.t={}]])},1:_.f,2:_.g,3:_.h,4:_.i,5:_.j,6:_.k,7:_.l,8:_.m,9:_.n,10:_.o,11:_.p,12:_.q,13:_.r,14:_.s,15:_.t}),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/div0/#text6 after #document/html0/body1/div0/div0/#comment0
inserted #document/html0/body1/div0/div0/#text6
removed #document/html0/body1/div0/div2/#text6 after #document/html0/body1/div0/div2/#comment0
inserted #document/html0/body1/div0/div2/#text6
removed #document/html0/body1/div0/div4/#text6 after #document/html0/body1/div0/div4/#comment0
inserted #document/html0/body1/div0/div4/#text6
removed #document/html0/body1/div0/div6/#text6 after #document/html0/body1/div0/div6/#comment0
inserted #document/html0/body1/div0/div6/#text6
#document/html0/body1/div0/div8/#text0: "second" => "third"
#document/html0/body1/div0/div8/#text2: "third" => "first"
#document/html0/body1/div0/div8/#text4: "first" => "second"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <div
        class="by-string"
      >
        <!--M_*1 #text/0-->
        <!--M_*2 #text/0-->
        <!--M_*3 #text/0-->
        <!--M_|0 #div/0 3 2 1-->
        firstsecondthird
      </div>
      <!--M_*0 #div/0-->
      <div
        class="by-function"
      >
        <!--M_*4 #text/0-->
        <!--M_*5 #text/0-->
        <!--M_*6 #text/0-->
        <!--M_|0 #div/1 6 5 4-->
        firstsecondthird
      </div>
      <!--M_*0 #div/1-->
      <div
        class="by-unknown-string"
      >
        <!--M_*7 #text/0-->
        <!--M_*8 #text/0-->
        <!--M_*9 #text/0-->
        <!--M_|0 #div/2 9 8 7-->
        firstsecondthird
      </div>
      <!--M_*0 #div/2-->
      <div
        class="by-unknown-function"
      >
        <!--M_*10 #text/0-->
        <!--M_*11 #text/0-->
        <!--M_*12 #text/0-->
        <!--M_|0 #div/3 12 11 10-->
        firstsecondthird
      </div>
      <!--M_*0 #div/3-->
      <div
        class="by-unknown-missing"
      >
        first
        <!--M_*13 #text/0-->
        second
        <!--M_*14 #text/0-->
        third
        <!--M_*15 #text/0-->
        <!--M_|0 #div/4 15 14 13-->
      </div>
      <!--M_*0 #div/4-->
      <button>
        Rotate
      </button>
      <!--M_*0 #button/5-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.u={0:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#div/0(":new Map(_.a=[[0,_.f={}],[1,_.g={}],[2,_.h={}]]),"#div/1(":new Map(_.b=[[0,_.i={}],[1,_.j={}],[2,_.k={}]]),"#div/2(":new Map(_.c=[[0,_.l={}],[1,_.m={}],[2,_.n={}]]),"#div/3(":new Map(_.d=[[0,_.o={}],[1,_.p={}],[2,_.q={}]]),"#div/4(":new Map(_.e=[[0,_.r={}],[1,_.s={}],[2,_.t={}]])},1:_.f,2:_.g,3:_.h,4:_.i,5:_.j,6:_.k,7:_.l,8:_.m,9:_.n,10:_.o,11:_.p,12:_.q,13:_.r,14:_.s,15:_.t}),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/div0/#text6 after #document/html0/body1/div0/div0/#comment1
inserted #document/html0/body1/div0/div0/#text6
removed #document/html0/body1/div0/div2/#text6 after #document/html0/body1/div0/div2/#comment1
inserted #document/html0/body1/div0/div2/#text6
removed #document/html0/body1/div0/div4/#text6 after #document/html0/body1/div0/div4/#comment1
inserted #document/html0/body1/div0/div4/#text6
removed #document/html0/body1/div0/div6/#text6 after #document/html0/body1/div0/div6/#comment1
inserted #document/html0/body1/div0/div6/#text6
#document/html0/body1/div0/div8/#text0: "third" => "first"
#document/html0/body1/div0/div8/#text2: "first" => "second"
#document/html0/body1/div0/div8/#text4: "second" => "third"
```