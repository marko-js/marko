// template.marko
const $template = "<button id=clear>clear</button><div></div><!><!>";
const $walks = " b b%c";
const $if_content__item__script = _script("__tests__/template.marko_2_item", ($scope) => $signal($scope, 0).onabort = () => _el_read($scope._._["#div/1"]).append(`destroyed ${$scope._.item}`));
const $if_content__item = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => {
	_text($scope["#text/0"], $scope._.item);
	$signalReset($scope, 0);
	$if_content__item__script($scope);
});
const $if_content__setup = $if_content__item;
const $for_content__if = /*@__PURE__*/ _if("#div/0", "<span> </span>", "D l", $if_content__setup);
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	$for_content__if($scope, $scope.item ? 0 : 1);
	$if_content__item($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/2", "<div></div>", " b", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/3", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, []);
}));
function $setup($scope) {
	$items($scope, ["first", "second"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
