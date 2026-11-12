// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/panel.marko
const $template = "<button class=count> </button><button class=open>open</button><!><!><!>";
const $walks = " D l b%b%c";
const summarize = (data) => ({ n: data.items.length });
var rows;
const $for_content__count = /*@__PURE__*/ _for_closure_patch("__tests__/tags/panel.marko_2_count#0:10/setup", "#text/4", ($scope) => _text($scope["#text/1"], $scope._.count), 14);
const $for_content__setup = $for_content__count;
const $for_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]?.name);
const $if_content__summary = /*@__PURE__*/ _if_closure_patch("__tests__/tags/panel.marko_1_summary#0:6/setup", "#text/3", 0, ($scope) => _text($scope["#text/0"], JSON.stringify($scope._.summary)));
const $if_content__setup = ($scope) => {
	$if_content__summary._($scope);
	$if_content__pending_length._($scope);
};
const $if_content__pending_length = /*@__PURE__*/ _if_closure_patch("__tests__/tags/panel.marko_1_pending_length#0:9/setup", "#text/3", 0, ($scope) => _text($scope["#text/1"], $scope._.pending_length));
const $for = /*@__PURE__*/ _for_of("#text/4", "<p><!>/<!></p>", "D%c%", $for_content__setup, $for_content__$params);
const $pending = ($scope, pending) => {
	$pending_length($scope, pending?.length);
	$for($scope, [pending, "id"]);
};
const $data__OR__summary = /*@__PURE__*/ _or(7, ($scope) => $pending($scope, rows($scope.data, $scope.summary)));
const $summary = /*@__PURE__*/ _const("summary", ($scope) => {
	$data__OR__summary($scope);
	$if_content__summary($scope);
});
const $data = /*@__PURE__*/ _const("data", ($scope) => {
	$summary($scope, summarize($scope.data));
	$data__OR__summary($scope);
});
const $global_data_key = /*@__PURE__*/ _global_key("data");
const $global_data = /*@__PURE__*/ _global_closure($global_data_key, "__tests__/tags/panel.marko_0_$global_data#4/subscribe", ($scope) => $data($scope, $scope.$global.data));
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/panel.marko_0_count#10/fill", "count/10", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$for_content__count($scope);
});
const $if = /*@__PURE__*/ _if("#text/3", "<p class=summary> </p><p class=total> </p>", "D lD ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/panel.marko_0_open#11/fill", "open/11", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/panel.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$open($scope, !$scope.open);
	});
});
function $setup($scope) {
	$global_data($scope);
	$setup__script($scope);
	$count($scope, 0);
	$open($scope, false);
}
const $pending_length = /*@__PURE__*/ _const("pending_length", $if_content__pending_length);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template, $walks, $setup);
