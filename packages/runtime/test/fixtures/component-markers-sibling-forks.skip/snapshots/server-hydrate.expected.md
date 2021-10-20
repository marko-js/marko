# write
  <!M$0>
_flush_

# write
  a<!M$0/><!M$1>b<!M$1/><!M$2>c<!M$2/><script>M$c=(window.M$c||[]).concat([[0,"first",{}],[1,"second",{}],[2,"third",{}]])</script>
_flush_

# end

# final HTML
  <!--M$0-->
  <html>
    <head />
    <body>
      a
      <!--M$0/-->
      <!--M$1-->
      b
      <!--M$1/-->
      <!--M$2-->
      c
      <!--M$2/-->
      <script>
        M$c=(window.M$c||[]).concat([[0,"first",{}],[1,"second",{}],[2,"third",{}]])
      </script>
    </body>
  </html>
