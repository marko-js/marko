// tags/list.marko
const $template$2 = "<div></div>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $for_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content$1 = $for_content__dynamicTag$1;
const $for_content__$params$1 = ($scope, $params2) => $for_content__item_content$1($scope, $params2[0]?.content);
const $for$1 = /*@__PURE__*/ _for_of_unkeyed("#div/0", "<!><!><!>", "b%", 0, $for_content__$params$1);
const $input_item$1 = ($scope, input_item) => $for$1($scope, [input_item]);
const $input$1 = ($scope, input) => $input_item$1($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$2, " b", 0, $input$1);

// tags/labeled-list.marko
const $template$1 = "<div><!><!></div>";
const $walks$1 = "D%b%l";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $input_label_text = ($scope, input_label_text) => _text($scope["#text/0"], input_label_text);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_item($scope, input.item);
};
const $input_label = ($scope, input_label) => $input_label_text($scope, input_label?.text);
var labeled_list_default = /*@__PURE__*/ _template("__tests__/tags/labeled-list.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5) => `<button id=add>add</button><button id=mode>mode</button>${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}`)($template$2, $template$2, $template$2, $template$2, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5) => ` b b/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&`)(" b", " b", " b", " b", " b", $walks$1);
const $item_content6 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_6*content", "labeled <!>", "b%"), { $i4($scope) {
	_text($scope["#text/0"], $scope.$i4);
} });
const $item_content5 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_5*content", "for-if <!>", "b%"), { j($scope) {
	_text($scope["#text/0"], $scope.j);
} });
const $item_content4 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_4*content", "else <!>", "b%"), { $i3($scope) {
	_text($scope["#text/0"], $scope.$i3);
} });
const $item_content3 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_3*content", "else-if <!>", "b%"), { $i2($scope) {
	_text($scope["#text/0"], $scope.$i2);
} });
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "if <!>", "b%"), { $i($scope) {
	_text($scope["#text/0"], $scope.$i);
} });
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "static <!>", "b%"), { i($scope) {
	_text($scope["#text/0"], $scope.i);
} });
const $count__OR__mode = /*@__PURE__*/ _or(10, ($scope) => {
	let $item2;
	if ($scope.mode === 0) {
		forUntil($scope.count, 0, 1, ($i) => {
			$item2 = attrTags($item2, { content: $item_content2($scope, { $i }) });
		});
	}
	$input_item$1($scope["#childScope/3"], $item2);
	let $item3;
	if ($scope.mode === 0) {} else if ($scope.mode === 1) {
		forUntil($scope.count, 0, 1, ($i2) => {
			$item3 = attrTags($item3, { content: $item_content3($scope, { $i2 }) });
		});
	}
	$input_item$1($scope["#childScope/4"], $item3);
	let $item4;
	if ($scope.mode !== 2) {} else {
		if ($scope.count) {
			forUntil($scope.count, 0, 1, ($i3) => {
				$item4 = attrTags($item4, { content: $item_content4($scope, { $i3 }) });
			});
		}
	}
	$input_item$1($scope["#childScope/5"], $item4);
	let $item5;
	forUntil($scope.count, 0, 1, (j) => {
		if (j % 2 === $scope.mode % 2) {
			$item5 = attrTags($item5, { content: $item_content5($scope, { j }) });
		}
	});
	$input_item$1($scope["#childScope/6"], $item5);
	let $label, $item6;
	if ($scope.mode === 0) {
		$label = attrTag({ text: "zero" });
	} else {
		forUntil($scope.count, 0, 1, ($i4) => {
			$item6 = attrTags($item6, { content: $item_content6($scope, { $i4 }) });
		});
	}
	$input_label($scope["#childScope/7"], $label);
	$input_item($scope["#childScope/7"], $item6);
});
const $count = /*@__PURE__*/ _let("count/8", $count__OR__mode);
const $mode = /*@__PURE__*/ _let("mode/9", $count__OR__mode);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/1"], "click", function() {
		$mode($scope, ($scope.mode + 1) % 3);
	});
});
function $setup($scope) {
	let $item;
	if (true) {
		forUntil(3, 0, 1, (i) => {
			$item = attrTags($item, { content: $item_content($scope, { i }) });
		});
	}
	$input_item$1($scope["#childScope/2"], $item);
	$count($scope, 2);
	$mode($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
