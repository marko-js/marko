// heading.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $inputtype_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/heading.marko_1_input_content#4/subscribe");
const $inputtype_content__setup = $inputtype_content__input_content;
const $inputtype_content = /*@__PURE__*/ _content("__tests__/heading.marko_1*content", "<!><!><!>", "b%", $inputtype_content__setup);
const $inputtype_content2 = /*@__PURE__*/ _content_resume($inputtype_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $input_type = $dynamicTag;
const $input = ($scope, input) => {
	$input_type($scope, input.type);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($inputtype_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
const $renders = [$inputtype_content2];
var heading_default = /*@__PURE__*/ _template("__tests__/heading.marko", $template, "b%c", 0, $input, $renders);

// template.marko
const $template = "<button id=inc> </button><!><!>";
const $walks = " D l%/&c";
let $load_Heading_setup = /*@__PURE__*/ _load_setup(() => import("./v:heading.marko.setup.mjs"));
let $load_Heading_tag_input_content = /*@__PURE__*/ _load_signal(() => import("./v:heading.marko.input_content.mjs"));
let $load_Heading_tag_input_type = /*@__PURE__*/ _load_signal(() => import("./v:heading.marko.input_type.mjs"));
const $Heading_content = _content("__tests__/template.marko_1*content", "lazy child: registered");
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$load_Heading_tag_input_type($scope["#childScope/3"], $scope.count % 2 ? "h2" : "h1");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$load_Heading_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$load_Heading_tag_input_content($scope["#childScope/3"], $Heading_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:heading.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
