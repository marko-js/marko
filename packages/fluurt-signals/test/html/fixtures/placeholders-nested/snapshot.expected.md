# write
  a<!--M:R1-->i...<!--/M:R1-->j
_flush_

# write
  kl
_flush_

# write
  <script>R_M = REORDER_RUNTIME;</script><noscript id="M:R1">bcd<!--M:R0-->h...<!--/M:R0--></noscript><script>R_M("M:R1")</script>
_flush_

# write
  <noscript id="M:R0">efg</noscript><script>R_M("M:R0")</script>
_flush_

# end
