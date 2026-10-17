// template.marko
const $template = "<button class=bad>bad</button><button class=next>next</button><ul><li>head</li><!></ul>";
const $walks = " b bDb%l";
function check(item) {
	if (item.bad) throw new Error("row params");
	return item.id;
}
const $for_content__item = ($scope, item) => _text($scope["#text/0"], check(item));
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/2", "<li> </li>", "D ", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/3", ($scope) => $for($scope, [$scope.items, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$items($scope, [{
			id: 5,
			bad: true
		}, { id: 9 }]);
	});
	_on($scope["#button/1"], "click", function() {
		$items($scope, [{ id: 7 }]);
	});
});
function $setup($scope) {
	$items($scope, [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
