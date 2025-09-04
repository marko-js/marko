// size: 1224 (min) 492 (brotli)
const $template = "<div><!> a</div><span><!> a</span><p><!> a</p>",
  $name__OR__write__script = _._script(
    "a0",
    ($scope, { 5: name, 6: write }) => {
      (write(`${name} mounted`),
        (_.$signal($scope, 0).onabort = () => {
          write(`${name} destroyed`);
        }));
    },
  ),
  $name__OR__write = _._or(7, ($scope) => {
    (_.$signalReset($scope, 0), $name__OR__write__script($scope));
  }),
  $name = _._const(5, ($scope, name) => {
    (_._text($scope[0], name),
      _._text($scope[1], name),
      _._text($scope[2], name),
      $name__OR__write($scope));
  }),
  $write$1 = _._const(6, $name__OR__write),
  $if_content3__setup = ($scope) => {
    ($scope[0], $name($scope[0], "Inner"), $if_content3__write($scope));
  },
  $if_content3__write = _._closure_get(
    8,
    ($scope, write) => $write$1($scope[0], write),
    ($scope) => $scope._._._,
  ),
  $if_content3 = _._content_branch(
    $template,
    "/D%lD%lD%l&",
    $if_content3__setup,
  ),
  $if_content2__setup = ($scope) => {
    ($scope[0],
      $name($scope[0], "Middle"),
      $if_content2__showInner($scope),
      $if_content2__write($scope));
  },
  $if_content2__write = _._closure_get(
    8,
    ($scope, write) => $write$1($scope[0], write),
    ($scope) => $scope._._,
  ),
  $if_content2__if = _._if(1, $if_content3),
  $if_content2__showInner = _._closure_get(
    7,
    ($scope, showInner) => $if_content2__if($scope, showInner ? 0 : 1),
    ($scope) => $scope._._,
  ),
  $if_content2 = _._content_branch(
    `<div>${$template}<!></div>`,
    "D/D%lD%lD%l&%l",
    $if_content2__setup,
  ),
  $if_content__setup = ($scope) => {
    ($scope[0],
      $name($scope[0], "Outer"),
      $if_content__showMiddle._($scope),
      $if_content__write._($scope));
  },
  $if_content__write = _._if_closure(8, 4, 0, ($scope, write) =>
    $write$1($scope[0], write),
  ),
  $if_content__if = _._if(1, $if_content2),
  $if_content__showMiddle = _._if_closure(6, 4, 0, ($scope, showMiddle) =>
    $if_content__if($scope, showMiddle ? 0 : 1),
  ),
  $if_content = _._content_branch(
    `<div>${$template}<!></div>`,
    "D/D%lD%lD%l&%l",
    $if_content__setup,
  ),
  $if = _._if(4, $if_content),
  $showOuter__script = _._script("b1", ($scope, { 5: showOuter }) =>
    _._on($scope[0], "click", function () {
      $showOuter($scope, (showOuter = !showOuter));
    }),
  ),
  $showOuter = _._let(5, ($scope, showOuter) => {
    ($if($scope, showOuter ? 0 : 1), $showOuter__script($scope));
  }),
  $showMiddle__script = _._script("b2", ($scope, { 6: showMiddle }) =>
    _._on($scope[1], "click", function () {
      $showMiddle($scope, (showMiddle = !showMiddle));
    }),
  ),
  $showMiddle = _._let(6, ($scope) => {
    ($if_content__showMiddle($scope), $showMiddle__script($scope));
  }),
  $showInner__closure = _._closure($if_content2__showInner),
  $showInner__script = _._script("b3", ($scope, { 7: showInner }) =>
    _._on($scope[2], "click", function () {
      $showInner($scope, (showInner = !showInner));
    }),
  ),
  $showInner = _._let(7, ($scope) => {
    ($showInner__closure($scope), $showInner__script($scope));
  });
(_._resume("b0", function ($scope) {
  return function (msg) {
    $scope[3].innerHTML += "\n" + msg;
  };
}),
  init());
