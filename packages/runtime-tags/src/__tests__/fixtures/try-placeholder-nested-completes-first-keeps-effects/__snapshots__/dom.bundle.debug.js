// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $placeholder_content2 = _content_resume("__tests__/template.marko_7*content", "inner");
const $placeholder_content = _content_resume("__tests__/template.marko_6*content", "outer");
const $await_content3__value = /*@__PURE__*/ _closure_get("value/3", ($scope) => _text($scope["#text/1"], $scope._.value), 0, "__tests__/template.marko_5_value#0:2/subscribe");
const $await_content3__setup__script = _script("__tests__/template.marko_5", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope._, +$scope._.value + 1);
}));
const $await_content3__setup = ($scope) => {
	$await_content3__value($scope);
	$await_content3__setup__script($scope);
};
const $await_content2__value = /*@__PURE__*/ _closure_get("value/3", ($scope) => _text($scope["#text/1"], $scope._._._.value), ($scope) => $scope._._._, "__tests__/template.marko_4_value#0:2/subscribe");
const $await_content2__setup__script = _script("__tests__/template.marko_4", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope._._._, +$scope._._._.value + 1);
}));
const $await_content2__setup = ($scope) => {
	$await_content2__value($scope);
	$await_content2__setup__script($scope);
};
const $try_content2__value = /*@__PURE__*/ _closure_get("value/3", ($scope) => _text($scope["#text/2"], $scope._._.value), ($scope) => $scope._._, "__tests__/template.marko_3_value#0:2/subscribe");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<button> </button>", " D ", $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content2__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/1"], "click", function() {
	$value($scope._._, +$scope._._.value + 1);
}));
const $try_content2__setup = ($scope) => {
	$try_content2__value($scope);
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter(2, 2));
	$try_content2__setup__script($scope);
};
const $await_content__value = /*@__PURE__*/ _closure_get("value/3", ($scope) => _text($scope["#text/1"], $scope._._.value), ($scope) => $scope._._, "__tests__/template.marko_2_value#0:2/subscribe");
const $await_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope._._, +$scope._._.value + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__value($scope);
	$await_content__setup__script($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button> </button>", " D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><button> </button>", "b%b D ", $try_content2__setup, $placeholder_content2);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(1, 3));
	$try_content__try($scope);
};
const $value__closure = /*@__PURE__*/ _closure($await_content__value, $try_content2__value, $await_content2__value, $await_content3__value);
const $value = /*@__PURE__*/ _let("value/2", $value__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup, $placeholder_content);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", "<button> </button>", " D ", $await_content3__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1");
function $setup($scope) {
	$await_content3($scope);
	$value($scope, 0);
	$try($scope);
	$await_promise($scope, resolveAfter(3, 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
