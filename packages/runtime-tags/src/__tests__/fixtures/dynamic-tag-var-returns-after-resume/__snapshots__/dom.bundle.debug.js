// tags/counter.marko
const $template$1 = "";
const $walks$1 = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, {
	n: $scope.n,
	set: $_return($scope)
}));
function $setup$1($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed["__tests__/tags/counter.marko_0/_return"] = $_return;
var counter_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("__tests__/tags/counter.marko", "", "", $setup$1));

// template.marko
const $template = "<!><!><!><button class=counter> </button><button class=doubled> </button>";
const $walks = "b1b1b D l D l";
_dynamic_tag_var_resume("#text/0");
_dynamic_tag_var_resume("#text/2");
const $Double_content__value = /*@__PURE__*/ _const("value", ($scope) => _return($scope, $scope.value * 2));
const $Double_content__$params = ($scope, $params2) => $Double_content__value($scope, ($params2?.[0]).value);
const $Double_content = _content_return(_content("__tests__/template.marko_1*content", 0, 0, 0, $Double_content__$params));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2", 0, () => $doubled);
const $count__OR__DoubleTag = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag2($scope, $scope.DoubleTag, () => ({ value: $scope.count })));
const $DoubleTag = /*@__PURE__*/ _let("DoubleTag/11", $count__OR__DoubleTag);
const $Double = $DoubleTag;
const $count = /*@__PURE__*/ _let("count/9", $count__OR__DoubleTag);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $counter);
const $CounterTag = /*@__PURE__*/ _let("CounterTag/10", ($scope) => $dynamicTag($scope, $scope.CounterTag));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/4"], "click", function() {
		$scope.counter.set($scope.counter?.n + 1);
	});
	_on($scope["#button/6"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
});
function $setup($scope) {
	$Double($scope, { content: $Double_content($scope) });
	$count($scope, 1);
	$CounterTag($scope, counter_default);
	$setup__script($scope);
}
const $counter = _var_resume("__tests__/template.marko_0_counter#13/var", /*@__PURE__*/ _const("counter", ($scope) => $counter_n($scope, $scope.counter?.n)));
const $counter_n = ($scope, counter_n) => _text($scope["#text/5"], counter_n);
const $doubled = _var_resume("__tests__/template.marko_0_doubled#15/var", ($scope, doubled) => _text($scope["#text/7"], doubled));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
