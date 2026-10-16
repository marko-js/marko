// template.marko
const $template = "<main><button class=show>show</button><button class=inc>inc</button><!></main>";
const $walks = "D b b%l";
const $if_content__count = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _start_late($scope["#script/0"], `document.querySelector("main").dataset.count = ${_to_text($scope._.count)};`));
const $if_content__setup = $if_content__count;
const $if = /*@__PURE__*/ _if("#text/2", "<script><\/script>", "! ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $count = /*@__PURE__*/ _let("count/4", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$show($scope, true);
	});
	_on($scope["#button/1"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
});
function $setup($scope) {
	$show($scope, false);
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
