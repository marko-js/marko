# write
  <!M$0>xyz<!M$0/><!M$1>a<script>M$c=(window.M$c||[]).concat([[0,"first",{}]])</script>
_flush_

# write
  b
_flush_

# write
  c<!M$1/><script>M$c=(window.M$c||[]).concat([[1,"second",{}]])</script>
_flush_

# end

# final HTML
  <!--M$0-->
  <html>
    <head />
    <body>
      xyz
      <!--M$0/-->
      <!--M$1-->
      a
      <script>
        M$c=(window.M$c||[]).concat([[0,"first",{}]])
      </script>
      bc
      <!--M$1/-->
      <script>
        M$c=(window.M$c||[]).concat([[1,"second",{}]])
      </script>
    </body>
  </html>
