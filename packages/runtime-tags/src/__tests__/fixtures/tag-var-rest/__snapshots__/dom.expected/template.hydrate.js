// size: 384 (min) 203 (brotli)
const $obj = _$.state(6, ($scope, obj) => {
    (_$.data($scope[0], JSON.stringify(obj)),
      (({ a: a, ...partialObj }) => {
        $partialObj($scope, partialObj);
      })(obj),
      $a($scope, obj.a),
      $partialObj_b($scope, obj.b));
  }),
  $partialObj = _$.value(8, ($scope, partialObj) => {
    (_$.data($scope[1], JSON.stringify(partialObj)),
      $partialObj_a($scope, partialObj.a));
  }),
  $partialObj_a = _$.value(10, ($scope, partialObj_a) =>
    _$.data(
      $scope[4],
      void 0 === partialObj_a ? "removed a" : "didn't remove a",
    ),
  ),
  $a = _$.value(7, ($scope, a) => _$.data($scope[2], a)),
  $partialObj_b = _$.value(9, ($scope, partialObj_b) =>
    _$.data($scope[3], partialObj_b),
  );
(_$.effect("a0", ($scope) =>
  _$.on($scope[5], "click", function () {
    $obj($scope, { a: 4, b: 5, d: 6 });
  }),
),
  init());
