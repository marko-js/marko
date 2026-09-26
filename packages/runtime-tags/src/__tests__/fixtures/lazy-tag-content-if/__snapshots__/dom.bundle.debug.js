// child.marko
const $template = "<section><!></section>";
const $walks = "D%l";
const $setup = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D%l", 0, $input);

// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_content = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_content.mjs"));
const $Child_content__if = /*@__PURE__*/ _if("#text/0", "shown");
const $Child_content__show = /*@__PURE__*/ _closure_get("show/4", ($scope) => $Child_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#3/subscribe");
const $Child_content__setup = $Child_content__show;
const $Child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Child_content__setup);
const $show__closure = /*@__PURE__*/ _closure($Child_content__show);
const $show = /*@__PURE__*/ _let("show/3", $show__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$load_Child_tag_input_content($scope["#childScope/2"], $Child_content($scope));
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D%l",
	$setup
];
