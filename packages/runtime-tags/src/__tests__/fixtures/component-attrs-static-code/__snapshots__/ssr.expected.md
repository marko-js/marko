# Write
```html
  <button>$0.00<!--M_*2 #text/1--></button><!--M_*2 #button/0--><button>$0.00<!--M_*3 #text/1--></button><!--M_*3 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{input:{format:_._["__tests__/template.marko_0/formatNumber"]},count:0},{input:{format:_._["__tests__/template.marko_0/formatNumber2"]},count:0}]),"__tests__/tags/counter.marko_0_count 2 3"];M._.w()</script>
```

# Render End
```html
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
    "__tests__/tags/counter.marko_0_count 2 3"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button0
INSERT button0/#text
INSERT button0/#comment
INSERT #comment0
INSERT button1
INSERT button1/#text
INSERT button1/#comment
INSERT #comment1
INSERT script
INSERT script/#text
```