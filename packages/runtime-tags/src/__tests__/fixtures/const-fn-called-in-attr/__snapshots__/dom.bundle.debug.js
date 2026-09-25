// template.marko
const $template = "<button id=pick> </button><div></div><div></div><button id=mode>mode</button><button id=toggle>toggle</button>";
const $walks = " D l b b b b";
const $pick2__script = _script("__tests__/template.marko_0_pick#12", ($scope) => _on($scope["#button/0"], "click", $scope.pick()));
const $pick2 = /*@__PURE__*/ _const("pick", $pick2__script);
const $mode = /*@__PURE__*/ _let("mode/9", ($scope) => $pick2($scope, $pick($scope)));
const $out = /*@__PURE__*/ _let("out/10", ($scope) => _text($scope["#text/1"], $scope.out));
const $getAttrs2__script = _script("__tests__/template.marko_0_getAttrs#13", ($scope) => _attrs_script($scope, "#div/2"));
const $getAttrs2 = /*@__PURE__*/ _const("getAttrs", ($scope) => {
	_attrs_content($scope, "#div/2", {
		id: "spread",
		...$scope.getAttrs()
	});
	$getAttrs2__script($scope);
});
const $input_rest__OR__cls__script = _script("__tests__/template.marko_0_input_rest#8_cls#14", ($scope) => _attrs_script($scope, "#div/3"));
const $input_rest__OR__cls = /*@__PURE__*/ _or(15, ($scope) => {
	_attrs_content($scope, "#div/3", {
		id: "before-spread",
		class: $scope.cls(),
		...$scope.input_rest
	});
	$input_rest__OR__cls__script($scope);
});
const $cls2 = /*@__PURE__*/ _const("cls", $input_rest__OR__cls);
const $active = /*@__PURE__*/ _let("active/11", ($scope) => {
	$getAttrs2($scope, $getAttrs($scope));
	$cls2($scope, $cls($scope));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/4"], "click", function() {
		$mode($scope, "b");
	});
	_on($scope["#button/5"], "click", function() {
		$active($scope, !$scope.active);
	});
});
function $setup($scope) {
	$mode($scope, "a");
	$out($scope, "");
	$active($scope, false);
	$setup__script($scope);
}
const $input_rest = /*@__PURE__*/ _const("input_rest", $input_rest__OR__cls);
const $input = ($scope, input) => $input_rest($scope, input.rest);
const $pick = ($scope) => function() {
	return $scope.mode === "a" ? () => {
		$out($scope, "A");
	} : () => {
		$out($scope, "B");
	};
};
const $getAttrs = ($scope) => function() {
	return { class: $scope.active ? "on" : "off" };
};
const $cls = ($scope) => function() {
	return $scope.active ? "on" : "off";
};
_resumed["__tests__/template.marko_0/pick"] = $pick;
_resumed["__tests__/template.marko_0/getAttrs"] = $getAttrs;
_resumed["__tests__/template.marko_0/cls"] = $cls;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
