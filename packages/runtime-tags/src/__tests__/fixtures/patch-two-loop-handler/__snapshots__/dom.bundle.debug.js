// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $setup = () => {};
const $for_content2__input_title = /*@__PURE__*/ _for_closure("#text/1", ($scope) => _text($scope["#text/0"], $scope._.input_title));
const $for_content2__setup = $for_content2__input_title;
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	document.body.dataset.label = $scope._.input_title;
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__item = ($scope, item) => _text($scope["#text/1"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button>", " D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<p> </p>", "D ", $for_content2__setup);
const $input_items2 = ($scope, input_items2) => $for2($scope, [input_items2]);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_items($scope, input.items);
	$input_items2($scope, input.items2);
};
const $input_title = /*@__PURE__*/ _const("input_title", $for_content2__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
