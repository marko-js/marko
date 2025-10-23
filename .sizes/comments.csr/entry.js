// size: 809 (min) 446 (brotli)
const $if_content__setup = ($scope) => {
    ($scope[0],
      $if_content__comment_comments._($scope),
      $if_content__id._($scope));
  },
  $if_content__comment_comments = _if_closure(
    8,
    4,
    0,
    ($scope, comment_comments) => $input_comments($scope[0], comment_comments),
  ),
  $if_content__id = _if_closure(11, 4, 0, ($scope, id) =>
    $input_path($scope[0], id),
  ),
  $if_content = _content_branch("<ul></ul>", "/ b&", $if_content__setup),
  $for_content__id = _const(11, ($scope, id) => {
    (_attr($scope[0], "id", id), $if_content__id($scope));
  }),
  $for_content__input_path__OR__i = _or(10, ($scope) => {
    let {
      _: { 4: input_path },
      9: i,
    } = $scope;
    $for_content__id($scope, `${input_path || "c"}-${i}`);
  }),
  $for_content__input_path = _for_closure(
    4,
    0,
    $for_content__input_path__OR__i,
  ),
  $for_content__i = _const(9, $for_content__input_path__OR__i),
  $for_content__open__script = _script("a0", ($scope, { 12: open }) =>
    _on($scope[2], "click", function () {
      $for_content__open($scope, (open = !open));
    }),
  ),
  $for_content__open = _let(12, ($scope, open) => {
    (_attr($scope[0], "hidden", !open),
      _text($scope[3], open ? "[-]" : "[+]"),
      $for_content__open__script($scope));
  }),
  $for_content__setup = ($scope) => {
    ($for_content__input_path._($scope), $for_content__open($scope, !0));
  },
  $for_content__comment_text = _const(7, ($scope, comment_text) =>
    _text($scope[1], comment_text),
  ),
  $for_content__if = _if(4, $if_content),
  $for_content__comment_comments = _const(8, ($scope, comment_comments) => {
    ($for_content__if($scope, comment_comments ? 0 : 1),
      $if_content__comment_comments($scope));
  }),
  $for_content__$params = _const(5, ($scope, $params2) => {
    ($for_content__comment($scope, $params2[0]),
      $for_content__i($scope, $params2[1]));
  }),
  $for_content__comment = _const(6, ($scope, comment) => {
    ($for_content__comment_text($scope, comment?.text),
      $for_content__comment_comments($scope, comment?.comments));
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
  $input_comments = _const(3, ($scope, input_comments) =>
    $for($scope, [input_comments]),
  ),
  $input_path = _const(4, $for_content__input_path);
function $setup($scope) {
  $scope[0];
}
_template(
  "b",
  "<ul></ul>",
  "/ b&",
  $setup,
  _const(2, ($scope, input) => {
    const $comments_input_spread = input;
    ($input_comments($scope[0], $comments_input_spread.comments),
      $input_path($scope[0], $comments_input_spread.path));
  }),
).mount();
