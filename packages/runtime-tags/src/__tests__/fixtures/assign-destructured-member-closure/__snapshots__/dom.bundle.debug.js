// template.marko
const $template = "<button class=open>open</button><button class=read>read</button>";
const $walks = " b b";
const $state = ($scope, state) => $state_box($scope, state.box);
const $state_box__script = _script("__tests__/template.marko_0_state_box#3", ($scope) => _on($scope["#button/1"], "click", function() {
	console.log("read", $scope.state_box.open, $scope.state_box?.open);
}));
const $state_box = /*@__PURE__*/ _const("state_box", ($scope) => {
	$box($scope, $scope.state_box);
	$state_box__script($scope);
});
const $box__script = _script("__tests__/template.marko_0_box#5", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.state_box.open = true;
}));
const $box = $box__script;
function $setup($scope) {
	$state($scope, { box: { open: false } });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
