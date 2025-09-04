// size: 394 (min) 211 (brotli)
const $obj = _._let(6, ($scope, obj) => {
    (_._text($scope[0], JSON.stringify(obj)),
      (({ a: a, ...partialObj }) => {
        $partialObj($scope, partialObj);
      })(obj),
      $a($scope, obj.a),
      $partialObj_b($scope, obj.b));
  }),
  $partialObj = _._const(8, ($scope, partialObj) => {
    (_._text($scope[1], JSON.stringify(partialObj)),
      $partialObj_a($scope, partialObj.a));
  }),
  $partialObj_a = _._const(10, ($scope, partialObj_a) =>
    _._text(
      $scope[4],
      void 0 === partialObj_a ? "removed a" : "didn't remove a",
    ),
  ),
  $a = _._const(7, ($scope, a) => _._text($scope[2], a)),
  $partialObj_b = _._const(9, ($scope, partialObj_b) =>
    _._text($scope[3], partialObj_b),
  );
(_._script("a0", ($scope) =>
  _._on($scope[5], "click", function () {
    $obj($scope, { a: 4, b: 5, d: 6 });
  }),
),
  init());
