# Write
```html
  <button>$0.00<!--M_*2 #text/1--></button><!--M_*2 #button/0--><button>$0.00<!--M_*3 #text/1--></button><!--M_*3 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{input:{format:_._["__tests__/template.marko_0/formatNumber"]},count:0},{input:{format:_._["__tests__/template.marko_0/formatNumber2"]},count:0}]),"__tests__/tags/counter.marko_0_count",2,3];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      $0.00
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      $0.00
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          input:
          {
            format: _._[
              "__tests__/template.marko_0/formatNumber"
              ]
          },
          count: 0
        },
        {
          input:
          {
            format: _._[
              "__tests__/template.marko_0/formatNumber2"
              ]
          },
          count: 0
        }]),
        "__tests__/tags/counter.marko_0_count",
        2, 3
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
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/button0/#comment
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/button1/#comment
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```