// size: 757 (min) 416 (brotli)
const $if_content__setup = ($scope) => {
    ($scope.a,
      $if_content__comment_comments._($scope),
      $if_content__id._($scope));
  },
  $if_content__comment_comments = _if_closure(4, 0, ($scope) =>
    $input_comments($scope.a, $scope._.i),
  ),
  $if_content__id = _if_closure(4, 0, ($scope) =>
    $input_path($scope.a, $scope._.l),
  ),
  $if_content = _content_branch("<ul></ul>", "/ b&", $if_content__setup),
  $for_content__id = _const(11, ($scope) => {
    (_attr($scope.a, "id", $scope.l), $if_content__id($scope));
  }),
  $for_content__input_path__OR__i = _or(10, ($scope) =>
    $for_content__id($scope, `${$scope._.e || "c"}-${$scope.j}`),
  ),
  $for_content__input_path = _for_closure(0, $for_content__input_path__OR__i),
  $for_content__i = _const(9, $for_content__input_path__OR__i),
  $for_content__open__script = _script("a0", ($scope) =>
    _on($scope.c, "click", function () {
      $for_content__open($scope, !$scope.m);
    }),
  ),
  $for_content__open = _let(12, ($scope) => {
    (_attr($scope.a, "hidden", !$scope.m),
      _text($scope.d, $scope.m ? "[-]" : "[+]"),
      $for_content__open__script($scope));
  }),
  $for_content__setup = ($scope) => {
    ($for_content__input_path._($scope), $for_content__open($scope, !0));
  },
  $for_content__comment_text = _const(7, ($scope) => _text($scope.b, $scope.h)),
  $for_content__if = _if(4, $if_content),
  $for_content__comment_comments = _const(8, ($scope) => {
    ($for_content__if($scope, $scope.i ? 0 : 1),
      $if_content__comment_comments($scope));
  }),
  $for_content__$params = _const(5, ($scope) => {
    ($for_content__comment($scope, $scope.f[0]),
      $for_content__i($scope, $scope.f[1]));
  }),
  $for_content__comment = _const(6, ($scope) => {
    ($for_content__comment_text($scope, $scope.g?.text),
      $for_content__comment_comments($scope, $scope.g?.comments));
  }),
  $for = _for_of(
    0,
    _content_branch(
      "<li><span> </span><button> </button><!></li>",
      " E l D l%l",
      $for_content__setup,
      $for_content__$params,
    ),
  ),
  $input_comments = _const(3, ($scope) => $for($scope, [$scope.d])),
  $input_path = _const(4, $for_content__input_path);
function $setup($scope) {
  $scope.a;
}
_template(
  "b",
  "<ul></ul>",
  "/ b&",
  $setup,
  _const(2, ($scope) => {
    const $comments_input_spread = $scope.c;
    ($input_comments($scope.a, $comments_input_spread.comments),
      $input_path($scope.a, $comments_input_spread.path));
  }),
).mount();
