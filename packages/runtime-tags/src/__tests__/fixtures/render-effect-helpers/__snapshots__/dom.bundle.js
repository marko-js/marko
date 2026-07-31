// template.marko
const $Chunk_content__n = /*@__PURE__*/ _closure_get(40, ($scope) => _text($scope, "a", $scope._.a4));
const $Chunk_content = _content_resume("a8", "chunk <!>", "b%", $Chunk_content__n);
const $on__OR__Chunk = /*@__PURE__*/ _or(37, ($scope) => _attr_content($scope, "o", $scope.a9 && $scope.aa));
const $on = /*@__PURE__*/ _const(35, ($scope) => {
	_attr_class($scope, "b", $scope.a9 && "active");
	_attr_class_item($scope, "d", "odd", !$scope.a9);
	_attr_class_items($scope, "e", {
		a: $scope.a9,
		b: !$scope.a9
	});
	_attr_style_item($scope, "g", "color", $scope.a9 ? "red" : "blue");
	_attr_input_checked_default($scope, "q", $scope.a9);
	_attr_input_checkedValue_default($scope, "s", $scope.a9 ? "a" : "b", "b");
	_attr($scope, "v", "type", $scope.a9 ? "text" : "hidden");
	_attr_select_value_default($scope, "y", $scope.a9 ? "one" : "two");
	_attr_details_or_dialog_open_default($scope, "a0", $scope.a9);
	_attr_details_or_dialog_open_default($scope, "a2", $scope.a9);
	_style_rule_item($scope, "a3", "--M_a7", $scope.a9 ? "green" : "purple");
	$on__OR__Chunk($scope);
});
const $spread__script = _script("a9", ($scope) => {
	_attrs_script($scope, "k");
	_attrs_script($scope, "l");
	_attrs_script($scope, "m");
	_attrs_script($scope, "n");
});
const $spread = /*@__PURE__*/ _const(38, ($scope) => {
	_attrs_content($scope, "k", $scope.ac);
	_attrs_partial_content($scope, "l", $scope.ac, { "data-fixed": 1 });
	_attrs($scope, "m", {
		src: "x.png",
		...$scope.ac
	});
	_attrs_partial($scope, "n", $scope.ac, { alt: 1 });
	$spread__script($scope);
});
const $hidden = /*@__PURE__*/ _let(39, ($scope) => _attr_input_value($scope, "w", $scope.ad, $valueChange2($scope), _attr_input_value_attribute_default));
const $n__OR__on = ($scope) => {
	_attr_style_items($scope, "h", {
		color: $scope.a9 ? "red" : "blue",
		opacity: $scope.a4
	});
	_attr_input_checked($scope, "p", $scope.a9, $checkedChange($scope));
};
const $n__closure = /*@__PURE__*/ _closure($Chunk_content__n);
const $n = /*@__PURE__*/ _let(30, ($scope) => {
	_attr($scope, "b", "data-n", $scope.a4);
	_text($scope, "c", $scope.a4);
	_attr_style($scope, "f", `width:${$scope.a4}px`);
	_text_content($scope, "i", `
  { "imports": { "${_to_text($scope.a4)}": "https://markojs.com" } }
`);
	_html($scope, "j", `<b>html ${$scope.a4}</b>`);
	_attr_input_value_default($scope, "u", `v${$scope.a4}`);
	_attr_input_value_dynamic_default($scope, "v", `d${$scope.a4}`);
	$on($scope, $scope.a4 % 2 === 0);
	$spread($scope, {
		"data-a": $scope.a4,
		title: `t${$scope.a4}`
	});
	$hidden($scope, `h${$scope.a4}`);
	$n__OR__on($scope);
	$n__closure($scope);
});
const $txt = /*@__PURE__*/ _let(31, ($scope) => _attr_input_value($scope, "t", $scope.a5, $valueChange($scope)));
const $pick = /*@__PURE__*/ _let(32, ($scope) => _attr_input_checkedValue($scope, "r", $scope.a6, $checkedValueChange($scope), "a"));
const $sel = /*@__PURE__*/ _let(33, ($scope) => _attr_select_value($scope, "x", $scope.a7, $valueChange3($scope)));
const $opened = /*@__PURE__*/ _let(34, ($scope) => {
	_attr_details_or_dialog_open($scope, "z", $scope.a8, $openChange($scope));
	_attr_details_or_dialog_open($scope, "a1", $scope.a8, $openChange2($scope));
});
const $setup__script = _script("a7", ($scope) => {
	_on($scope.a, "click", function() {
		$n($scope, $scope.a4 + 1);
	});
	_on($scope.i, "click", function() {});
	_attr_input_checked_script($scope, "p");
	_attr_input_checkedValue_script($scope, "r");
	_attr_input_value_script($scope, "t");
	_attr_input_value_script($scope, "w");
	_attr_select_value_script($scope, "x");
	_attr_details_or_dialog_open_script($scope, "z");
	_attr_details_or_dialog_open_script($scope, "a1");
});
function $valueChange2($scope) {
	return function(v) {
		$hidden($scope, v);
	};
}
function $checkedChange($scope) {
	return function(v) {
		$n($scope, $scope.a4 + 0);
	};
}
function $valueChange($scope) {
	return function(v) {
		$txt($scope, v);
	};
}
function $checkedValueChange($scope) {
	return function(v) {
		$pick($scope, v);
	};
}
function $valueChange3($scope) {
	return function(v) {
		$sel($scope, v);
	};
}
function $openChange2($scope) {
	return function(v) {
		$opened($scope, v);
	};
}
function $openChange($scope) {
	return function(v) {
		$opened($scope, v);
	};
}
_resume("a3", $valueChange2);
_resume("a0", $checkedChange);
_resume("a2", $valueChange);
_resume("a1", $checkedValueChange);
_resume("a4", $valueChange3);
_resume("a6", $openChange2);
_resume("a5", $openChange);
