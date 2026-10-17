// template.marko
const $template = "<button>go</button><!><!>";
const $walks = " b%c";
const $placeholder_content = _content("__tests__/template.marko_4*content", "Loading");
const $for_content__params_q__OR__item = /*@__PURE__*/ _or(4, ($scope) => _attr($scope["#a/0"], "href", `?q=${$scope._._._.params_q.trim()}&i=${$scope.item}`));
const $for_content__params_q = /*@__PURE__*/ _closure_get("params_q/4", $for_content__params_q__OR__item, ($scope) => $scope._._._);
const $for_content__setup = $for_content__params_q;
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	_text($scope["#text/1"], $scope.item);
	$for_content__params_q__OR__item($scope);
});
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $await_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<a> </a>", " D ", $for_content__setup, $for_content__$params);
const $await_content__items = ($scope, items) => $await_content__for($scope, [items]);
const $await_content__$params = ($scope, $params2) => $await_content__items($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup__$global_data = /*@__PURE__*/ _fill_global_path_join("data", "__tests__/template.marko_1_$global_data#0:5", ($scope) => $try_content__await_promise($scope, $scope.$global.data.items), ["items"]);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__setup__$global_data($scope);
};
const $params4 = ($scope, params) => $params_q($scope, params?.q);
const $params_q__closure = /*@__PURE__*/ _closure($for_content__params_q);
const $params_q = /*@__PURE__*/ _const("params_q", $params_q__closure);
const $setup__$global_data = /*@__PURE__*/ _fill_global_path_join("data", "__tests__/template.marko_0_$global_data#5", ($scope) => $params4($scope, $scope.$global.data.params), ["params"]);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {}));
function $setup($scope) {
	$try($scope);
	$setup__script($scope);
	$setup__$global_data($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
