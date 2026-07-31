// template.marko
const $template = "<button>drop</button><!><!>";
const $walks = " b%c";
const $for_content__if = /*@__PURE__*/ _if("#text/1", "never");
const $for_content__i = ($scope, i) => {
	_text($scope, "#text/0", i);
	$for_content__if($scope, i > 9 ? 0 : 1);
};
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/1", "<div>item <!></div><!><!>", "Db%l%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [1]);
}));
function $setup($scope) {
	$items($scope, [1, 2]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
