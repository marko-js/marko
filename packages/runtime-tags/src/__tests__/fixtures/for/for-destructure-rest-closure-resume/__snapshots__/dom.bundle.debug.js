// template.marko
const $template = "<button id=toggle>toggle</button><!><!><!>";
const $walks = " b%b%c";
const $if_content2__first = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.first));
const $if_content2__setup = ($scope) => {
	$if_content2__first._($scope);
	$if_content2__$temp2_._($scope);
};
const $if_content2__$temp2_ = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.$temp2_1));
const $if_content__id = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.id));
const $if_content__setup = ($scope) => {
	$if_content__id._($scope);
	$if_content__$temp_extra._($scope);
};
const $if_content__$temp_extra = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.$temp_extra));
const $for_content2__if = /*@__PURE__*/ _if("#text/0", "<b><!><!></b>", "D%b%", $if_content2__setup);
const $for_content2__show = /*@__PURE__*/ _for_closure("#text/2", ($scope) => $for_content2__if($scope, $scope._.show ? 0 : 1));
const $for_content2__setup = $for_content2__show;
const $for_content2__$params = ($scope, $params3) => {
	$for_content2__first($scope, ($params3?.[0])[0]);
	$for_content2__$temp2_($scope, ($params3?.[0])[1]);
};
const $for_content2__first = /*@__PURE__*/ _const("first", $if_content2__first);
const $for_content2__$temp2_ = /*@__PURE__*/ _const("$temp2_1", $if_content2__$temp2_);
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<span><!>:<!></span>", "D%c%", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1));
const $for_content__setup = $for_content__show;
const $for_content__$params = ($scope, $params2) => {
	$for_content__id($scope, ($params2?.[0]).id);
	$for_content__$temp_extra($scope, ($params2?.[0]).extra);
};
const $for_content__id = /*@__PURE__*/ _const("id", $if_content__id);
const $for_content__$temp_extra = /*@__PURE__*/ _const("$temp_extra", $if_content__$temp_extra);
const $show = /*@__PURE__*/ _let("show/7", ($scope) => {
	$for_content__show($scope);
	$for_content2__show($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<!><!><!>", "b%", $for_content2__setup, $for_content2__$params);
const $input_lists = ($scope, input_lists) => $for2($scope, [input_lists]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_lists($scope, input.lists);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
