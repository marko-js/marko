# Write
  <div>{"foo":1,"bar":2}<!--M_*0 #text/0--></div><button>1<!--M_*0 #text/2--></button><!--M_*0 #button/1--><!--M_$0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      {"foo":1,"bar":2}
      <!--M_*0 #text/0-->
    </div>
    <button>
      1
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
inserted #document/html0/body1/div0/#comment1
inserted #document/html0/body1/button1
inserted #document/html0/body1/button1/#text0
inserted #document/html0/body1/button1/#comment1
inserted #document/html0/body1/#comment2
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/script4
inserted #document/html0/body1/script4/#text0
```