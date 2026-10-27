// lazy.marko
const $template = "<b>lazy</b>";
const $walks = "b";
const $setup = ($_) => {};
var lazy_default = /*@__PURE__*/ _template("__tests__/lazy.marko", $template, "b");

// layout.marko
const $template$1 = "<html><body><!><!></body></html>";
const $walks$1 = "E%b%m";
const $setup$1 = ($_) => {};
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $if_content__setup = ($scope) => $load_Lazy_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", $if_content__setup);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_open($scope, input.open);
};
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $Layout_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope._, !$scope._.open);
}));
const $Layout_content__setup = $Layout_content__setup__script;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button>toggle</button>", " ", $Layout_content__setup);
const $open = /*@__PURE__*/ _let("open/1", ($scope) => $input_open($scope["#childScope/0"], $scope.open));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Layout_content($scope));
	$open($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:lazy.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
