// size: 893 (min) 458 (brotli)
const $setup$if$content = ($scope) => {
    ($scope[0],
      $comment_comments$if$content._($scope),
      $id$if$content._($scope));
  },
  $expr_comment_comments_id$if$content = intersection(1, ($scope) => {
    const {
      _: { 8: comment_comments, 11: id },
    } = $scope;
    $input$1($scope[0], { comments: comment_comments, path: id });
  }),
  $comment_comments$if$content = conditionalClosure(
    8,
    4,
    0,
    $expr_comment_comments_id$if$content,
  ),
  $id$if$content = conditionalClosure(
    11,
    4,
    0,
    $expr_comment_comments_id$if$content,
  ),
  $if_content = createRenderer("<ul></ul>", "/ b&", $setup$if$content),
  $id$for$content = value(11, ($scope, id) => {
    (attr($scope[0], "id", id), $id$if$content($scope));
  }),
  $expr_input_path_i$for$content = intersection(10, ($scope) => {
    const {
      _: { 4: input_path },
      9: i,
    } = $scope;
    $id$for$content($scope, `${input_path || "c"}-${i}`);
  }),
  $input_path$for$content = loopClosure(4, 0, $expr_input_path_i$for$content),
  $i$for$content = value(9, $expr_input_path_i$for$content),
  $open$for$content_effect = effect("a0", ($scope, { 12: open }) =>
    on($scope[2], "click", function () {
      $open$for$content($scope, (open = !open));
    }),
  ),
  $open$for$content = state(12, ($scope, open) => {
    (attr($scope[0], "hidden", !open),
      data($scope[3], open ? "[-]" : "[+]"),
      $open$for$content_effect($scope));
  }),
  $setup$for$content = ($scope) => {
    ($input_path$for$content._($scope), $open$for$content($scope, !0));
  },
  $comment_text$for$content = value(7, ($scope, comment_text) =>
    data($scope[1], comment_text),
  ),
  $if$for$content = conditional(4, $if_content),
  $comment_comments$for$content = value(8, ($scope, comment_comments) => {
    ($if$for$content($scope, comment_comments ? 0 : 1),
      $comment_comments$if$content($scope));
  }),
  $params2$for$content = value(5, ($scope, $params2) => {
    ($comment$for$content($scope, $params2[0]),
      $i$for$content($scope, $params2[1]));
  }),
  $comment$for$content = value(6, ($scope, comment) => {
    ($comment_text$for$content($scope, comment?.text),
      $comment_comments$for$content($scope, comment?.comments));
  }),
  $for = loopOf(
    0,
    createRenderer(
      "<li><span> </span><button> </button><!></li>",
      " E l D l%",
      $setup$for$content,
      $params2$for$content,
    ),
  ),
  $input_comments = value(3, ($scope, input_comments) =>
    $for($scope, [input_comments]),
  ),
  $input$1 = value(2, ($scope, input) => {
    ($input_comments($scope, input.comments), $input_path($scope, input.path));
  }),
  $input_path = value(4, $input_path$for$content);
function $setup($scope) {
  $scope[0];
}
createTemplate(
  "b",
  "<ul></ul>",
  "/ b&",
  $setup,
  value(2, ($scope, input) => {
    const $comments_input_spread = input;
    ($input_comments($scope[0], $comments_input_spread.comments),
      $input_path($scope[0], $comments_input_spread.path));
  }),
).mount();
