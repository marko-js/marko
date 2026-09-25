// template.marko
const $template = "<button class=open>open</button><button class=read>read</button>";
const $walks = " b b";
const $live = /*@__PURE__*/ _const("live");
const $input_show = ($scope, input_show) => $live($scope, input_show ? { open: false } : null);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		if ($scope.live) $scope.live.open = true;
	});
	_on($scope["#button/1"], "click", function() {
		console.log("read", $scope.live?.open);
	});
});
const $setup = $setup__script;
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
