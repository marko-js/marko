// size: 158 (min) 86 (brotli)
(_._resume("a2", _._hoist(0)),
  _._resume("a3", _._hoist(4)),
  _._resume(
    "a1",
    function ({
      _: {
        _: { 3: input_value },
      },
    }) {
      return () => input_value;
    },
  ),
  _._resume("a0", function ({ 3: input_value }) {
    return () => input_value;
  }),
  init());
