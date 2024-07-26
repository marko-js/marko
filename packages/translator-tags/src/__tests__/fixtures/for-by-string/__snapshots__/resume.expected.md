# Render {}
```html
<html>
  <head />
  <body>
    <div>
      first
      <!--M*1 #text/0-->
      second
      <!--M*2 #text/0-->
      third
      <!--M*3 #text/0-->
      <!--M|0 #text/0 1,2,3-->
      <button>
        Rotate
      </button>
      <!--M*0 #button/1-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.e={0:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#text/0(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},1:_.b,2:_.c,3:_.d}),[0,"packages/translator-tags/src/__tests__/fixtures/for-by-string/template.marko_0_items",])
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
      <!--M*1 #text/0-->
      second
      <!--M*2 #text/0-->
      thirdfirst
      <!--M*3 #text/0-->
      <!--M|0 #text/0 1,2,3-->
      <button>
        Rotate
      </button>
      <!--M*0 #button/1-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.e={0:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#text/0(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},1:_.b,2:_.c,3:_.d}),[0,"packages/translator-tags/src/__tests__/fixtures/for-by-string/template.marko_0_items",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/#text4 before #document/html0/body1/div0/#comment0
inserted #document/html0/body1/div0/#text4
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <!--M*1 #text/0-->
      <!--M*2 #text/0-->
      thirdfirstsecond
      <!--M*3 #text/0-->
      <!--M|0 #text/0 1,2,3-->
      <button>
        Rotate
      </button>
      <!--M*0 #button/1-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.e={0:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#text/0(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},1:_.b,2:_.c,3:_.d}),[0,"packages/translator-tags/src/__tests__/fixtures/for-by-string/template.marko_0_items",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/#text4 after #document/html0/body1/div0/#comment0
inserted #document/html0/body1/div0/#text4
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <!--M*1 #text/0-->
      <!--M*2 #text/0-->
      firstsecondthird
      <!--M*3 #text/0-->
      <!--M|0 #text/0 1,2,3-->
      <button>
        Rotate
      </button>
      <!--M*0 #button/1-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.e={0:{items:[{id:0,text:"first"},{id:1,text:"second"},{id:2,text:"third"}],"#text/0(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},1:_.b,2:_.c,3:_.d}),[0,"packages/translator-tags/src/__tests__/fixtures/for-by-string/template.marko_0_items",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/#text4 after #document/html0/body1/div0/#comment1
inserted #document/html0/body1/div0/#text4
```