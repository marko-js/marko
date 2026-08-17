// tags/child.marko
const $template$2 = "<button> </button><a>x</a>";
const $walks$2 = " D l b";
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_onToggle();
}));
const $setup$2 = $setup__script;
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => {
	_attr($scope["#a/2"], "href", input.hrefFor("x"));
	$input_onToggle$1($scope, input.onToggle);
	$input_label($scope, input.label);
	$input_count$1($scope, input.count);
};
const $input_count$1 = ($scope, input_count) => _attr_class($scope["#a/2"], input_count % 2 ? "odd" : "even");
const $input_onToggle$1 = /*@__PURE__*/ _const("input_onToggle");
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/parent.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label = /*@__PURE__*/ _or(3, ($scope) => $input$1($scope["#childScope/0"], {
	label: $scope.label,
	count: $scope._.input_count,
	hrefFor: $scope._.hrefFor,
	onToggle: $onToggle$1($scope)
}), 4);
const $if_content__input_count = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label);
const $if_content__setup = ($scope) => {
	$if_content__input_count._($scope);
	$if_content__input_onToggle._($scope);
	$if_content__prefix._($scope);
	$if_content__shut._($scope);
	$if_content__hrefFor._($scope);
	$setup$2($scope["#childScope/0"]);
};
const $if_content__input_onToggle = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label);
const $if_content__label = /*@__PURE__*/ _const("label", $if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label);
const $if_content__prefix__OR__shut = /*@__PURE__*/ _or(1, ($scope) => $if_content__label($scope, $scope._.shut ? `${$scope._.prefix}:shut` : `${$scope._.prefix}:open`));
const $if_content__prefix = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__prefix__OR__shut);
const $if_content__shut = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__prefix__OR__shut($scope);
	$if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label($scope);
});
const $if_content__hrefFor = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label);
const $prefix = /*@__PURE__*/ _const("prefix");
const $shut = /*@__PURE__*/ _let("shut/6", $if_content__shut);
const $hrefFor2 = /*@__PURE__*/ _const("hrefFor");
const $if = /*@__PURE__*/ _if("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $if_content__setup);
function $setup$1($scope) {
	$prefix($scope, "a");
	$shut($scope, false);
	$hrefFor2($scope, $hrefFor);
	$if($scope, true ? 0 : 1);
}
const $input = ($scope, input) => {
	$input_count($scope, input.count);
	$input_onToggle($scope, input.onToggle);
};
const $input_count = /*@__PURE__*/ _const("input_count", $if_content__input_count);
const $input_onToggle = /*@__PURE__*/ _const("input_onToggle", $if_content__input_onToggle);
const $onToggle$1 = ($scope) => function() {
	$shut($scope._, !$scope._.shut);
	$scope._.input_onToggle();
};
function $hrefFor(key) {
	return `#${key}`;
}
_resume("__tests__/tags/parent.marko_1/onToggle", $onToggle$1);
_resume("__tests__/tags/parent.marko_0/hrefFor", $hrefFor);
var parent_default = /*@__PURE__*/ _template("__tests__/tags/parent.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	$input_count($scope["#childScope/0"], $scope.count);
	$input_onToggle($scope["#childScope/0"], $onToggle($scope));
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$count($scope, 0);
}
const $onToggle = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
_resume("__tests__/template.marko_0/onToggle", $onToggle);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
