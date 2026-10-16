// template.marko
const $template = "<main><button class=show>show</button><button class=add>add</button><script><\/script><script><\/script><!><!></main>";
const $walks = "D b b! b! b%b%l";
const $for_content__item = ($scope, item) => _attr($scope["#script/0"], "data-item", item);
const $for_content__setup = ($scope) => _start_late($scope["#script/0"], "(window.ran ||= []).push(\"row \" + document.currentScript.dataset.item)");
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__input_attrs__script = _script("__tests__/template.marko_1_input_attrs#0:10", ($scope) => _attrs_script($scope, "#script/1"));
const $if_content__input_attrs = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => {
	_attrs($scope, "#script/1", {
		nonce: $scope.$global.cspNonce,
		...$scope._.input_attrs
	});
	_start_late($scope["#script/1"], "(window.ran ||= []).push(\"spread\")");
	$if_content__input_attrs__script($scope);
});
const $if_content__setup = ($scope) => {
	$if_content__input_attrs._($scope);
	$if_content__input_src._($scope);
	$if_content__input_external._($scope);
	$if_content__input_a._($scope);
	$if_content__type._($scope);
	_start_late($scope["#script/0"], "(window.ran ||= []).push(\"plain\")");
	_start_late($scope["#script/2"], void 0, "/never.js");
	_start_late($scope["#script/6"], "(window.ran ||= []).push(\"both \" + document.currentScript.dataset.a)");
};
const $if_content__input_src = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => _start_late($scope["#script/3"], void 0, $scope._.input_src));
const $if_content__input_external__script = _script("__tests__/template.marko_1_input_external#0:12", ($scope) => _attrs_script($scope, "#script/4"));
const $if_content__input_external = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => {
	_attrs($scope, "#script/4", {
		nonce: $scope.$global.cspNonce,
		...$scope._.input_external
	});
	_start_late($scope["#script/4"], "(window.ran ||= []).push(\"inline\")");
	$if_content__input_external__script($scope);
});
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => {
	_attr($scope["#script/5"], "data-a", $scope._.input_a);
	_attr($scope["#script/6"], "data-a", $scope._.input_a);
});
const $if_content__type = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => {
	_attr($scope["#script/0"], "type", $scope._.type);
	_attr($scope["#script/2"], "type", $scope._.type);
	_attr($scope["#script/3"], "type", $scope._.type);
	_start_late($scope["#script/5"], `(window.ran ||= []).push(${_to_text(JSON.stringify($scope._.type))} + " " + document.currentScript.dataset.a)`);
	_attr($scope["#script/6"], "type", $scope._.type && "module" && "text/javascript");
});
const $if = /*@__PURE__*/ _if("#text/4", "<script><\/script><script><\/script><script><\/script><script><\/script><script><\/script><script><\/script><script><\/script>", "! b! b! b! b! b! b! ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/14", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $type = /*@__PURE__*/ _let("type/15");
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/5", "<script><\/script>", "! ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/16", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$show($scope, true);
	});
	_on($scope["#button/1"], "click", function() {
		$items($scope, [...$scope.items, "b"]);
	});
});
function $setup($scope) {
	_start_late($scope["#script/2"], "(window.ran ||= []).push(\"root \" + document.currentScript.dataset.root)");
	$show($scope, false);
	$type($scope, "text/plain");
	$items($scope, ["a"]);
	$setup__script($scope);
}
const $input_root = ($scope, input_root) => _attr($scope["#script/2"], "data-root", input_root);
const $input_rootAttrs__script = _script("__tests__/template.marko_0_input_rootAttrs#9", ($scope) => _attrs_script($scope, "#script/3"));
const $input_rootAttrs = /*@__PURE__*/ _const("input_rootAttrs", ($scope) => {
	_attrs($scope, "#script/3", {
		nonce: $scope.$global.cspNonce,
		...$scope.input_rootAttrs
	});
	_start_late($scope["#script/3"], "(window.ran ||= []).push(\"inline\")");
	$input_rootAttrs__script($scope);
});
const $input = ($scope, input) => {
	$input_root($scope, input.root);
	$input_rootAttrs($scope, input.rootAttrs);
	$input_attrs($scope, input.attrs);
	$input_src($scope, input.src);
	$input_external($scope, input.external);
	$input_a($scope, input.a);
};
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $if_content__input_attrs);
const $input_src = /*@__PURE__*/ _const("input_src", $if_content__input_src);
const $input_external = /*@__PURE__*/ _const("input_external", $if_content__input_external);
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
