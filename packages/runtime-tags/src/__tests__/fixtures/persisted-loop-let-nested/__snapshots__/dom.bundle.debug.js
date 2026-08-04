// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $if_content__notes = /*@__PURE__*/ _fill_let("__tests__/template.marko0", "notes/2", ($scope) => _text($scope["#text/0"], $scope.notes));
const $if_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__notes($scope, $scope.notes + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__notes($scope, 0);
	$if_content__setup__script($scope);
};
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/0"], item_label);
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<span> </span><button>note</button>", "D l ", $if_content__setup);
const $for_content__item_detailed = ($scope, item_detailed) => $for_content__if($scope, item_detailed ? 0 : 1);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_label($scope, $params2[0]?.label);
	$for_content__item_detailed($scope, $params2[0]?.detailed);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!><!></li>", "D%b%", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
