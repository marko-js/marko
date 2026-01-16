# Write
```html
  <div><button>hello<!--M_*2 #text/1--></button><!--M_*2 #button/0--><!--M_}1 #div/0 2--></div><!--M_|1 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={messages:["hello"]},{index:0,_:_.a,"#LoopKey":"hello"}]),"__tests__/template.marko_1_messages_index 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <button>
        hello
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
      <!--M_}1 #div/0 2-->
    </div>
    <!--M_|1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          messages: ["hello"]
        },
        {
          index: 0,
          _: _.a,
          "#LoopKey": "hello"
        }]),
        "__tests__/template.marko_1_messages_index 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/button/#comment
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```