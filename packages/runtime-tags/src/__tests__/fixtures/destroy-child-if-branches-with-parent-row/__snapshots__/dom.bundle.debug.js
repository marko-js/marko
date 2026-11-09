// tags/c2.marko
const $template$1 = "<!><!><!><button class=inc></button>";
const $walks$1 = "b%b%b b";
const $if_content2__setup__script = _script("__tests__/tags/c2.marko_2", ($scope) => _lifecycle($scope, { onDestroy: function() {
	console.log("destroy static");
} }));
const $if_content2__setup = $if_content2__setup__script;
const $if_content__n__script = _script("__tests__/tags/c2.marko_1_n#0:6", ($scope) => _lifecycle($scope, { onDestroy: function() {
	console.log("destroy reading state", $scope._.n);
} }));
const $if_content__n = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__n__script);
const $if_content__setup = $if_content__n;
const $n = /*@__PURE__*/ _let("n/6", $if_content__n);
const $setup__script$1 = _script("__tests__/tags/c2.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content2__setup);
const $if2 = /*@__PURE__*/ _if("#text/1", 0, 0, $if_content__setup);
const $input_on = ($scope, input_on) => {
	$if($scope, input_on ? 0 : 1);
	$if2($scope, input_on ? 0 : 1);
};
const $input = ($scope, input) => $input_on($scope, input.on);
var c2_default = /*@__PURE__*/ _template("__tests__/tags/c2.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<!><!><button id=clear></button>";
const $walks = "b%b b";
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_on($scope["#childScope/0"], true);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $for_content__setup);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, []);
}));
function $setup($scope) {
	$items($scope, [{ id: 1 }, { id: 2 }]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
