// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_class = ($scope, input_class) => _attr_class($scope["#button/0"], input_class);
const $input = ($scope, input) => $input_class($scope, input.class);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<html lang=en><head><title>x</title></head><body><main><p> </p><!><!></main></body></html>";
const $walks = "DbF l%b%n";
let $load_Counter_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:counter.marko.setup.mjs"));
let $load_Counter_tag_input_class = /*@__PURE__*/ _load_signal(($_) => import("./v:counter.marko.input_class.mjs"));
const $await_content2__v = ($scope, v) => {
	_attr_class($scope["#button/0"], v);
	_text($scope["#text/1"], v);
};
const $await_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope._, +$scope._.clicks + 1);
}));
const $await_content2__setup = ($scope) => {
	$load_Counter_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$load_Counter_tag_input_class($scope["#childScope/3"], "lazy-b");
	$await_content2__setup__script($scope);
};
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $await_content__v = ($scope, v) => {
	_attr_class($scope["#button/0"], v);
	_text($scope["#text/1"], v);
};
const $await_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope._, +$scope._.clicks + 1);
}));
const $await_content__setup = ($scope) => {
	$load_Counter_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$load_Counter_tag_input_class($scope["#childScope/3"], "lazy-a");
	$await_content__setup__script($scope);
};
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $clicks = /*@__PURE__*/ _let("clicks/3", ($scope) => _text($scope["#text/0"], $scope.clicks));
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<button> </button><!><!>", " D l%/&", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/2", "<button> </button><!><!>", " D l%/&", $await_content2__setup);
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/2", $await_content2__$params);
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
	$clicks($scope, 0);
	$await_promise($scope, resolveAfter("a", 1));
	$await_promise2($scope, resolveAfter("b", 2));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/v:counter.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
