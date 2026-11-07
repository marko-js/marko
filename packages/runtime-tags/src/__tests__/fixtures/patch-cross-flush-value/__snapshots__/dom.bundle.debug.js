// tags/tagged/index.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/tagged/index.marko_0_count#8/fill", "count/8", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/tags/tagged/index.marko_0", ($scope) => _on($scope["#button/0"], "click", function(event) {
	$count($scope, +$scope.count + 1);
	const shared = window.shared;
	if (shared) event.target.dataset.same = String($scope.input_tag === shared);
	else window.shared = $scope.input_tag;
}));
function $setup$1($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_id = ($scope, input_id) => _attr($scope["#button/0"], "id", input_id);
const $input$1 = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_id($scope, input.id);
};
const $input_tag = /*@__PURE__*/ _const("input_tag", ($scope) => _text($scope["#text/1"], $scope.input_tag?.name));
var tagged_default = /*@__PURE__*/ _template("__tests__/tags/tagged/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_id($scope["#childScope/0"], "b");
};
const $await_content2__$params = ($scope, $params3) => $input_tag($scope["#childScope/0"], $params3[0]?.tag);
const $await_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_id($scope["#childScope/0"], "a");
};
const $await_content__$params = ($scope, $params2) => $input_tag($scope["#childScope/0"], $params2[0]?.tag);
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
}
const $input_first = $await_promise;
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content2__setup);
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $input_second = $await_promise2;
const $input = ($scope, input) => {
	$input_first($scope, input.first);
	$input_second($scope, input.second);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
