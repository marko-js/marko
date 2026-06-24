// tags/comments.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $if_content__comment_comments = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => $input_comments$1($scope["#childScope/0"], $scope._.comment_comments));
const $if_content__setup = ($scope) => {
	$if_content__comment_comments._($scope);
	$if_content__id._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $if_content__id = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => $input_path$1($scope["#childScope/0"], $scope._.id));
const $for_content__id = /*@__PURE__*/ _const("id", ($scope) => {
	_attr($scope["#li/0"], "id", $scope.id);
	$if_content__id($scope);
});
const $for_content__input_path = /*@__PURE__*/ _for_closure("#ul/0", ($scope) => $for_content__id($scope, `${$scope._.input_path || "c"}-${$scope["#LoopKey"]}`));
const $for_content__open__script = _script("__tests__/tags/comments.marko_1_open", ($scope) => _on($scope["#button/2"], "click", function() {
	$for_content__open($scope, !$scope.open);
}));
const $for_content__open = /*@__PURE__*/ _let("open/12", ($scope) => {
	_attr($scope["#li/0"], "hidden", !$scope.open);
	_text($scope["#text/3"], $scope.open ? "[-]" : "[+]");
	$for_content__open__script($scope);
});
const $for_content__setup = ($scope) => {
	$for_content__input_path._($scope);
	$for_content__open($scope, true);
};
const $for_content__comment_text = ($scope, comment_text) => _text($scope["#text/1"], comment_text);
const $for_content__if = /*@__PURE__*/ _if("#text/4", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $for_content__comment_comments = /*@__PURE__*/ _const("comment_comments", ($scope) => {
	$for_content__if($scope, $scope.comment_comments ? 0 : 1);
	$if_content__comment_comments($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__comment($scope, $params2[0]);
const $for_content__comment = ($scope, comment) => {
	$for_content__comment_text($scope, comment?.text);
	$for_content__comment_comments($scope, comment?.comments);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><span> </span><button> </button><!></li>", " E l D l%l", $for_content__setup, $for_content__$params);
const $input_comments$1 = ($scope, input_comments) => $for($scope, [input_comments]);
const $input_path$1 = /*@__PURE__*/ _const("input_path", $for_content__input_path);
const $input$1 = ($scope, input) => {
	$input_comments$1($scope, input.comments);
	$input_path$1($scope, input.path);
};
var comments_default = /*@__PURE__*/ _template("__tests__/tags/comments.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
}
const $input_comments = ($scope, input_comments) => $input_comments$1($scope["#childScope/0"], input_comments);
const $input_path = ($scope, input_path) => $input_path$1($scope["#childScope/0"], input_path);
const $input = ($scope, input) => {
	$input_comments($scope, input.comments);
	$input_path($scope, input.path);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
