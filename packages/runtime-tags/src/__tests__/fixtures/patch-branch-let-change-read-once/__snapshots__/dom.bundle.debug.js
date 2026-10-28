// template.marko
const $template = "<main><p>last <!></p><!></main>";
const $walks = "Eb%l%l";
const reads = new WeakSet();
function read($global, handler) {
	if (reads.has($global)) {
		throw new Error("A `valueChange` was read twice in one render.");
	}
	reads.add($global);
	queueMicrotask(() => reads.delete($global));
	return handler;
}
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/template.marko_fill1", "count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $if_content__input_start__OR__onCount__$global = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_1_input_start#0:5_onCount#0:7_$global#0:9", ($scope) => $if_content__count($scope, $scope._.input_start, read($scope.$global, $scope._.onCount)), "");
const $if_content__input_start__OR__onCount = /*@__PURE__*/ _fill_signal("input_start __tests__/template.marko_fill0", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_start#0:5_onCount#0:7/init", 2, $if_content__input_start__OR__onCount__$global), _if_closure, "#text/1", 0);
const $if_content__input_start = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_start__OR__onCount);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_start._($scope);
	$if_content__onCount._($scope);
	$if_content__setup__script($scope);
};
const $if_content__onCount = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_start__OR__onCount);
const $last = /*@__PURE__*/ _let("last/6", ($scope) => _text($scope["#text/0"], $scope.last));
const $onCount2 = /*@__PURE__*/ _const("onCount");
function $setup($scope) {
	$last($scope, 0);
	$onCount2($scope, $onCount($scope));
}
const $if = /*@__PURE__*/ _if("#text/1", "<button> </button>", " D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_start($scope, input.start);
};
const $input_start = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_start", $if_content__input_start);
const $onCount = ($scope) => (next) => {
	$last($scope, next);
};
_resumed["__tests__/template.marko_0/onCount"] = $onCount;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
