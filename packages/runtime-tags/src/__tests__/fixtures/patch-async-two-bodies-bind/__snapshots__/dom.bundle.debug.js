// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $await_content2__second__OR__handler__script = _script("__tests__/template.marko_2_second#3_handler#4", ($scope) => _attrs_script($scope, "#button/0"));
const $await_content2__second__OR__handler = /*@__PURE__*/ _or(5, ($scope) => {
	_attrs($scope, "#button/0", {
		title: $scope.second,
		onClick: $scope.handler
	});
	$await_content2__second__OR__handler__script($scope);
});
const $await_content2__handler = /*@__PURE__*/ _const("handler", $await_content2__second__OR__handler);
const $await_content2__second = /*@__PURE__*/ _const("second", ($scope) => {
	$await_content2__handler($scope, $handler($scope));
	$await_content2__second__OR__handler($scope);
	_text($scope["#text/1"], $scope.second);
});
const $await_content2__$params = ($scope, $params3) => $await_content2__second($scope, $params3[0]);
const $await_content__first = ($scope, first) => _text($scope["#text/0"], first);
const $await_content__$params = ($scope, $params2) => $await_content__first($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
}
const $input_first = $await_promise;
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<button> </button>", " D ");
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $input_second = $await_promise2;
const $input = ($scope, input) => {
	$input_first($scope, input.first);
	$input_second($scope, input.second);
};
const $handler = ($scope) => (event) => event.target.dataset.seen = $scope.second;
_resumed["__tests__/template.marko_2/handler"] = $handler;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
