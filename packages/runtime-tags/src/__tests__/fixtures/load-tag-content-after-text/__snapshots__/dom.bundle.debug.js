// child.marko
const $template = "<!>";
const $walks = "%b";
const $setup = ($_) => {};
const $input_n = ($scope, input_n) => _text($scope["#text/0"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", "<!>", "%b", 0, $input);

// template.marko
const $template = "<div>hello <!></div><button>+</button>";
const $walks = "Db%/&l b";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_n = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_n.mjs"));
const $n = /*@__PURE__*/ _let("n/3", ($scope) => $load_Child_tag_input_n($scope["#childScope/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	"<!>",
	"%b",
	$setup
];
