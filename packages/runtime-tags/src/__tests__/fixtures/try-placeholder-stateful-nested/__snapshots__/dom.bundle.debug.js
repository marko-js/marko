// tags/note.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_label__script = _script("__tests__/tags/note.marko_0_input_label#3", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("mounted", $scope.input_label);
	},
	onDestroy: function() {
		console.log("destroyed", $scope.input_label);
	}
}));
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/0"], $scope.input_label);
	$input_label__script($scope);
});
const $input = ($scope, input) => $input_label($scope, input.label);
var note_default = /*@__PURE__*/ _template("__tests__/tags/note.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = "<button>clicks <!></button><!><!>";
const $walks = " Db%l%c";
const $placeholder_content2__setup = ($scope) => $input_label($scope["#childScope/0"], "inner placeholder");
const $placeholder_content2 = _content_resume("__tests__/template.marko_6*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $placeholder_content2__setup);
const $placeholder_content__setup = ($scope) => $input_label($scope["#childScope/0"], "outer placeholder");
const $placeholder_content = _content_resume("__tests__/template.marko_5*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $placeholder_content__setup);
const $await_content2__clicks__OR__inner = /*@__PURE__*/ _or(3, ($scope) => $input_label($scope["#childScope/0"], `${$scope.inner} ${$scope._._._._.clicks}`));
const $await_content2__clicks = /*@__PURE__*/ _closure_get("clicks", $await_content2__clicks__OR__inner, ($scope) => $scope._._._._, "__tests__/template.marko_4_clicks#3/pending");
const $await_content2__setup = $await_content2__clicks;
const $await_content2__inner = /*@__PURE__*/ _const("inner", $await_content2__clicks__OR__inner);
const $await_content2__$params = ($scope, $params3) => $await_content2__inner($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter("inner", 4));
};
const $await_content__clicks = /*@__PURE__*/ _closure_get("clicks", ($scope) => _text($scope["#text/1"], $scope._._.clicks), ($scope) => $scope._._, "__tests__/template.marko_2_clicks#3/pending");
const $await_content__try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup);
const $await_content__setup = ($scope) => {
	$await_content__clicks($scope);
	$await_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
};
const $await_content__outer = ($scope, outer) => _text($scope["#text/0"], outer);
const $await_content__$params = ($scope, $params2) => $await_content__outer($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!> <!></p><!><!>", "D%c%l%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("outer", 2));
};
const $clicks__closure = /*@__PURE__*/ _closure($await_content__clicks, $await_content2__clicks);
const $clicks = /*@__PURE__*/ _let("clicks/3", ($scope) => {
	_text($scope["#text/1"], $scope.clicks);
	$clicks__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, +$scope.clicks + 1);
}));
function $setup($scope) {
	$clicks($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
