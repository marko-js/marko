// template.marko
const $template = "<pre id=log></pre><div id=d></div><main><!><button>+</button></main>";
const $walks = "b bD%b l";
const $if_content__pick = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], typeof $scope._.pick));
const $if_content__setup = $if_content__pick;
const $pick__script = _script("__tests__/template.marko_0_pick#9", ($scope) => {
	{
		const log = document.getElementById("log");
		log.textContent += log.last === $scope.pick ? "same;" : "new;";
		log.last = $scope.pick;
	}
});
const $pick = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("pick", ($scope) => {
	$if_content__pick($scope);
	$pick__script($scope);
}));
const $input_upper__OR__fa__OR__fb = /*@__PURE__*/ _or(8, ($scope) => $pick($scope, $scope.input_upper ? $scope.fa : $scope.fb), 2);
const $fa2 = /*@__PURE__*/ _const("fa", $input_upper__OR__fa__OR__fb);
const $fb2 = /*@__PURE__*/ _const("fb", $input_upper__OR__fa__OR__fb);
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/10", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$fa2($scope, $fa($scope));
	$fb2($scope, $fb($scope));
	$open($scope, false);
	$setup__script($scope);
}
const $input_upper = /*@__PURE__*/ _const("input_upper", $input_upper__OR__fa__OR__fb);
const $input = ($scope, input) => $input_upper($scope, input.upper);
const $fa = ($scope) => () => "a:" + _el_read($scope["#div/0"]).id;
const $fb = ($scope) => () => "b:" + _el_read($scope["#div/0"]).id;
_resumed["__tests__/template.marko_0/fa"] = $fa;
_resumed["__tests__/template.marko_0/fb"] = $fb;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
