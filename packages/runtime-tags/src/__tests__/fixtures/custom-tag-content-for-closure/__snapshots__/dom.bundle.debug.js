// tags/menu.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content2__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $if_content2__dynamicTag($scope, $scope._._.input_content), ($scope) => $scope._._);
const $if_content2__setup = $if_content2__input_content;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content2__setup);
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__if($scope, $scope._.input_content ? 0 : 1));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => {
	_text($scope["#text/1"], $scope.open ? "collapse" : "expand");
	$if($scope, $scope.open ? 0 : 1);
});
const $setup__script = _script("__tests__/tags/menu.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($if_content2__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", ($scope) => {
	$if_content__input_content($scope);
	$input_content__closure($scope);
});
var menu_default = /*@__PURE__*/ _template("__tests__/tags/menu.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const PEOPLE = [
	"alice",
	"bob",
	"carol"
];
const $for_content__person = ($scope, person) => _text($scope["#text/0"], person);
const $for_content__$params = ($scope, $params2) => $for_content__person($scope, $params2[0]);
const $menu_content__for = /*@__PURE__*/ _for_of("#text/0", "<div>person: <!></div>", "Db%", 0, $for_content__$params);
const $menu_content__setup = ($scope) => $menu_content__for($scope, [PEOPLE]);
const $menu_content = _content_resume("__tests__/template.marko_1*content", "<!><!><!>", "b%", $menu_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $menu_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
