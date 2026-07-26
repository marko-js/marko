// template.marko
const $template = "<button>toggle</button><ul></ul><!><!><!>";
const $walks = " b b%b%c";
const $for_content3__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content3__$params = ($scope, $params6) => $for_content3__item($scope, $params6[0]);
const $for_content2__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content2__$params = ($scope, $params4) => $for_content2__item($scope, $params4[0]);
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $await_content2__for = /*@__PURE__*/ _for_of("#ol/0", "<em> </em>", "D l", 0, $for_content3__$params);
const $await_content2__hide__OR__tail = /*@__PURE__*/ _or(3, ($scope) => $await_content2__for($scope, [$scope._.hide ? [] : $scope.tail]));
const $await_content2__hide = /*@__PURE__*/ _closure_get("hide", $await_content2__hide__OR__tail);
const $await_content2__setup = $await_content2__hide;
const $await_content2__tail = /*@__PURE__*/ _const("tail", $await_content2__hide__OR__tail);
const $await_content2__$params = ($scope, $params5) => $await_content2__tail($scope, $params5[0]);
const $await_content__for = /*@__PURE__*/ _for_of("#ol/0", "<b> </b>", "D l", 0, $for_content2__$params);
const $await_content__hide__OR__mid = /*@__PURE__*/ _or(3, ($scope) => $await_content__for($scope, [$scope._.hide ? [] : $scope.mid]));
const $await_content__hide = /*@__PURE__*/ _closure_get("hide", $await_content__hide__OR__mid);
const $await_content__setup = $await_content__hide;
const $await_content__mid = /*@__PURE__*/ _const("mid", $await_content__hide__OR__mid);
const $await_content__$params = ($scope, $params3) => $await_content__mid($scope, $params3[0]);
const $for = /*@__PURE__*/ _for_of("#ul/1", "<i> </i>", "D l", 0, $for_content__$params);
const $input_head__OR__hide = /*@__PURE__*/ _or(10, ($scope) => $for($scope, [$scope.hide ? [] : $scope.input_head]));
const $hide__closure = /*@__PURE__*/ _closure($await_content__hide, $await_content2__hide);
const $hide = /*@__PURE__*/ _let("hide/9", ($scope) => {
	$input_head__OR__hide($scope);
	$hide__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$hide($scope, !$scope.hide);
}));
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
	$hide($scope, false);
	$setup__script($scope);
}
const $input_head = /*@__PURE__*/ _const("input_head", $input_head__OR__hide);
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<ol></ol>", " b", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $input_mid = ($scope, input_mid) => $await_promise($scope, resolveAfter(input_mid, 1));
const $await_content2 = /*@__PURE__*/ _await_content("#text/3", "<ol></ol>", " b", $await_content2__setup);
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/3", $await_content2__$params);
const $input_tail = ($scope, input_tail) => $await_promise2($scope, resolveAfter(input_tail, 5));
const $input = ($scope, input) => {
	$input_head($scope, input.head);
	$input_mid($scope, input.mid);
	$input_tail($scope, input.tail);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
