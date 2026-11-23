// template.marko
const $Counter_content__walks = " D l";
const $Counter_content__template = "<button class=counter> </button>";
const $Pair_content__walks = " D l";
const $Pair_content__template = "<button class=side> </button>";
const $Label_content__walks = " D%c%l";
const $Label_content__template = "<button class=label><!> <!></button>";
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}<!>${_w1}${_w2}<div><!> <!> <!> <!></div>`)($Counter_content__template, $Pair_content__template, $Label_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&%b/${_w1}&/${_w2}&D%c%c%c%l`)($Counter_content__walks, $Pair_content__walks, $Label_content__walks);
const $Label_content__textChange__script = _script("__tests__/template.marko_4_textChange#5", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.textChange($scope.text + "!");
}));
const $Label_content__textChange = /*@__PURE__*/ _const("textChange", ($scope) => {
	_text($scope["#text/2"], typeof $scope.textChange);
	$Label_content__textChange__script($scope);
});
const $Label_content__text = /*@__PURE__*/ _const("text", ($scope) => _text($scope["#text/1"], $scope.text));
const $Label_content__$params = ($scope, $params5) => $Label_content__$temp($scope, $params5[0]);
const $Label_content__$temp = ($scope, $temp4) => {
	$Label_content__textChange($scope, $temp4.textChange);
	$Label_content__text($scope, $temp4.text);
};
const $Pair_content__$sideChange__script = _script("__tests__/template.marko_3_$sideChange#6", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$sideChange(+$scope.side - 1);
}));
const $Pair_content__$sideChange = /*@__PURE__*/ _const("$sideChange", $Pair_content__$sideChange__script);
const $Pair_content__side = /*@__PURE__*/ _const("side", ($scope) => _text($scope["#text/1"], $scope.side));
const $Pair_content__tag_input_pair = ($scope, $pair) => {
	$Pair_content__side($scope, $pair.side);
	$Pair_content__$sideChange($scope, $pair.sideChange);
};
const $Pair_content__$params = ($scope, $params4) => $Pair_content__$temp($scope, $params4[0]);
const $Pair_content__$temp = ($scope, $temp3) => $Pair_content__tag_input_pair($scope, $temp3.pair);
const $for_content__$amountChange__script = _script("__tests__/template.marko_2_$amountChange#5", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$amountChange($scope.amount + 5);
}));
const $for_content__$amountChange = /*@__PURE__*/ _const("$amountChange", $for_content__$amountChange__script);
const $for_content__amount = /*@__PURE__*/ _const("amount", ($scope) => _text($scope["#text/1"], $scope.amount));
const $for_content__$params = ($scope, $temp2) => {
	$for_content__amount($scope, $temp2.amount);
	$for_content__$amountChange($scope, $temp2.amountChange);
};
const $Counter_content__$valueChange__script = _script("__tests__/template.marko_1_$valueChange#5", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$valueChange(+$scope.value + 1);
}));
const $Counter_content__$valueChange = /*@__PURE__*/ _const("$valueChange", $Counter_content__$valueChange__script);
const $Counter_content__value = /*@__PURE__*/ _const("value", ($scope) => _text($scope["#text/1"], $scope.value));
const $Counter_content__$params = ($scope, $params2) => $Counter_content__$temp($scope, $params2[0]);
const $Counter_content__$temp = ($scope, $temp) => {
	$Counter_content__value($scope, $temp.value);
	$Counter_content__$valueChange($scope, $temp.valueChange);
};
const $count = /*@__PURE__*/ _let("count/8", ($scope) => {
	$Counter_content__value($scope["#childScope/0"], $scope.count);
	_text($scope["#text/4"], $scope.count);
});
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<button class=amount> </button>", " D ", 0, $for_content__$params);
const $total = /*@__PURE__*/ _let("total/9", ($scope) => {
	_text($scope["#text/5"], $scope.total);
	$for($scope, [[{
		amount: $scope.total,
		amountChange: $of($scope)
	}]]);
});
const $left = /*@__PURE__*/ _let("left/10", ($scope) => {
	$Pair_content__tag_input_pair($scope["#childScope/2"], {
		side: $scope.left,
		sideChange: $pair2($scope)
	});
	_text($scope["#text/6"], $scope.left);
});
const $label = /*@__PURE__*/ _let("label/11", ($scope) => {
	$Label_content__text($scope["#childScope/3"], $scope.label);
	_text($scope["#text/7"], $scope.label);
});
function $setup($scope) {
	$Counter_content__$valueChange($scope["#childScope/0"], $valueChange2($scope));
	$Label_content__textChange($scope["#childScope/3"], $textChange($scope));
	$count($scope, 1);
	$total($scope, 10);
	$left($scope, 100);
	$label($scope, "a");
}
const $of = ($scope) => function(next) {
	$total($scope, next);
};
const $pair2 = ($scope) => function(next) {
	$left($scope, next);
};
const $textChange = ($scope) => (_new_label) => $label($scope, _new_label);
const $valueChange2 = ($scope) => (_new_count) => $count($scope, _new_count);
_resumed["__tests__/template.marko_0/of"] = $of;
_resumed["__tests__/template.marko_0/pair2"] = $pair2;
_resumed["__tests__/template.marko_0/textChange"] = $textChange;
_resumed["__tests__/template.marko_0/valueChange2"] = $valueChange2;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
