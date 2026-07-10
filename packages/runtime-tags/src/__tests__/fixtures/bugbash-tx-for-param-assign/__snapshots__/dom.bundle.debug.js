// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__$Change__script = _script("__tests__/template.marko_1_$Change", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$Change("clicked");
}));
const $for_content__$Change = /*@__PURE__*/ _const("$Change", $for_content__$Change__script);
const $for_content__item = ($scope, item) => _text($scope["#text/1"], item);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item($scope, $params2[0]);
	$for_content__$Change($scope, $params2["0Change"]);
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<button> </button>", " D l", 0, $for_content__$params);
const $input_list = ($scope, input_list) => $for($scope, [input_list]);
const $input = ($scope, input) => $input_list($scope, input.list);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
