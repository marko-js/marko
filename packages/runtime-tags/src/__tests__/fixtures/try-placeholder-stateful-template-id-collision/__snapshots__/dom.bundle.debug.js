// tags/n2.marko
const $template$3 = "<div class=n2> </div>";
const $walks$3 = "D l";
const $setup$3 = () => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var n2_default = /*@__PURE__*/ _template("__tests__/tags/n2.marko", $template$3, "D l", 0, $input$2);

// tags/n5.marko
const $template$2 = "<button class=n5><!> <!></button>";
const $walks$2 = " D%c%l";
const $n$1 = /*@__PURE__*/ _let("n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script$2 = _script("__tests__/tags/n5.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n$1($scope, +$scope.n + 1);
}));
function $setup$2($scope) {
	$n$1($scope, 0);
	$setup__script$2($scope);
}
const $input_label$1 = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var n5_default = /*@__PURE__*/ _template("__tests__/tags/n5.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/n1.marko
const $template$1 = "<button class=n1><!> <!></button>";
const $walks$1 = " D%c%l";
const $n = /*@__PURE__*/ _let("n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script$1 = _script("__tests__/tags/n1.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var n1_default = /*@__PURE__*/ _template("__tests__/tags/n1.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<button>clicks <!></button><button class=swap>swap</button><!><!>";
const $walks = " Db%l b%c";
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content__clicks__OR__tag__OR__body = /*@__PURE__*/ _or(3, ($scope) => $await_content__dynamicTag($scope, $scope._._.tag, () => ({ label: `${$scope.body} ${$scope._._.clicks}` })), 2);
const $await_content__clicks = /*@__PURE__*/ _closure_get("clicks", $await_content__clicks__OR__tag__OR__body, ($scope) => $scope._._, "__tests__/template.marko_3_clicks#4/pending");
const $await_content__setup = ($scope) => {
	$await_content__clicks($scope);
	$await_content__tag($scope);
};
const $await_content__tag = /*@__PURE__*/ _closure_get("tag", $await_content__clicks__OR__tag__OR__body, ($scope) => $scope._._, "__tests__/template.marko_3_tag#5/pending");
const $await_content__body = /*@__PURE__*/ _const("body", $await_content__clicks__OR__tag__OR__body);
const $await_content__$params = ($scope, $params2) => $await_content__body($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("body", 2));
};
const $placeholder_content__clicks = /*@__PURE__*/ _closure_get("clicks", ($scope) => $input_label($scope["#childScope/0"], `placeholder ${$scope._.clicks}`));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__clicks($scope);
	$setup$1($scope["#childScope/0"]);
};
const $placeholder_content = _content_resume("__tests__/template.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $placeholder_content__setup);
const $clicks__closure = /*@__PURE__*/ _closure($placeholder_content__clicks, $await_content__clicks);
const $clicks = /*@__PURE__*/ _let("clicks/4", ($scope) => {
	_text($scope["#text/1"], $scope.clicks);
	$clicks__closure($scope);
});
const $tag__closure = /*@__PURE__*/ _closure($await_content__tag);
const $tag = /*@__PURE__*/ _let("tag/5", $tag__closure);
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$clicks($scope, +$scope.clicks + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$tag($scope, $scope.tag === n5_default ? n2_default : n5_default);
	});
});
function $setup($scope) {
	$clicks($scope, 0);
	$tag($scope, n5_default);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
