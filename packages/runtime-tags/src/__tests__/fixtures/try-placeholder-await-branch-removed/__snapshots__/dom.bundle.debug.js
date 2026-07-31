// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $await_content__value = ($scope, value) => _text($scope, "#text/0", value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, resolveAfter("loaded", 2));
};
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "LOADING...");
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1));
const $try_content__setup = $try_content__show;
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
const $show = /*@__PURE__*/ _let("show/2", $show__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><div>settled</div>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
