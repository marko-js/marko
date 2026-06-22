// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope._, []);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/1"], item_id);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = ($scope, item) => $for_content__item_id($scope, item?.id);
const $for = /* @__PURE__ */ _for_of("#text/0", "<button> </button>", " D l", $for_content__setup, $for_content__$params);
const $items = /* @__PURE__ */ _let("items/4", ($scope) => $for($scope, [$scope.items, () => "dup"]));
const $input_items = $items;
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
