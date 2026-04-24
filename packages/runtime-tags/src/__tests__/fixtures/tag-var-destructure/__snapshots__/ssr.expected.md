# Write
```html
  <button><pre>a    1    <!>0<!--M_*1 #text/1--></pre><pre>b    2    <!>0<!--M_*1 #text/2--></pre><pre>c  {c:4}  <!>{}<!--M_*1 #text/3--></pre><pre>d    7    <!>0<!--M_*1 #text/4--></pre><pre>f   [9]   <!>[]<!--M_*1 #text/5--></pre></button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<button>
  <pre>
    a    1    
    <!---->
    0
    <!--M_*1 #text/1-->
  </pre>
  <pre>
    b    2    
    <!---->
    0
    <!--M_*1 #text/2-->
  </pre>
  <pre>
    c  {c:4}  
    <!---->
    {}
    <!--M_*1 #text/3-->
  </pre>
  <pre>
    d    7    
    <!---->
    0
    <!--M_*1 #text/4-->
  </pre>
  <pre>
    f   [9]   
    <!---->
    []
    <!--M_*1 #text/5-->
  </pre>
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT button/pre0
INSERT button/pre0/#text0
INSERT button/pre0/#comment0
INSERT button/pre0/#text1
INSERT button/pre0/#comment1
INSERT button/pre1
INSERT button/pre1/#text0
INSERT button/pre1/#comment0
INSERT button/pre1/#text1
INSERT button/pre1/#comment1
INSERT button/pre2
INSERT button/pre2/#text0
INSERT button/pre2/#comment0
INSERT button/pre2/#text1
INSERT button/pre2/#comment1
INSERT button/pre3
INSERT button/pre3/#text0
INSERT button/pre3/#comment0
INSERT button/pre3/#text1
INSERT button/pre3/#comment1
INSERT button/pre4
INSERT button/pre4/#text0
INSERT button/pre4/#comment0
INSERT button/pre4/#text1
INSERT button/pre4/#comment1
INSERT #comment
INSERT script
INSERT script/#text
```