// tags/list.marko
const $template$4 = "<button id=open>open</button><!><!>";
const $walks$4 = " b%c";
const $for_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag$1;
const $for_content__$params$2 = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $if_content__for$1 = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params$2);
const $if_content__input_item = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for$1($scope, [$scope._.input_item]));
const $if_content__setup$2 = $if_content__input_item;
const $if$2 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$2);
const $open$1 = /*@__PURE__*/ _let("open/5", ($scope) => $if$2($scope, $scope.open ? 0 : 1));
const $setup__script$3 = _script("__tests__/tags/list.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open$1($scope, true);
}));
function $setup$4($scope) {
	$open$1($scope, false);
	$setup__script$3($scope);
}
const $input$3 = ($scope, input) => $input_item$1($scope, input.item);
const $input_item$1 = /*@__PURE__*/ _const("input_item", $if_content__input_item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$4, $walks$4, $setup$4, $input$3);

// tags/grid-row.marko
const $template$3 = "<button>toggle</button><!><!>";
const $walks$3 = " b%c";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__cell_content = $for_content__dynamicTag;
const $for_content__$params$1 = ($scope, $params2) => $for_content__cell_content($scope, $params2[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params$1);
const $if_content__input_row_cell = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.input_row_cell]));
const $if_content__setup$1 = $if_content__input_row_cell;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _let("open/7", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script$2 = _script("__tests__/tags/grid-row.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$3($scope) {
	$open($scope, true);
	$setup__script$2($scope);
}
const $input_index = ($scope, input_index) => _attr($scope["#button/0"], "id", `toggle-${input_index}`);
const $input$2 = ($scope, input) => {
	$input_index($scope, input.index);
	$input_row$1($scope, input.row);
};
const $input_row$1 = ($scope, input_row) => $input_row_cell($scope, input_row?.cell);
const $input_row_cell = /*@__PURE__*/ _const("input_row_cell", $if_content__input_row_cell);
var grid_row_default = /*@__PURE__*/ _template("__tests__/tags/grid-row.marko", $template$3, $walks$3, $setup$3, $input$2);

// tags/grid.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $for_content__setup = ($scope) => {
	$setup$3($scope["#childScope/0"]);
	$input_index($scope["#childScope/0"], $scope["#LoopKey"]);
};
const $for_content__row = ($scope, row) => $input_row$1($scope["#childScope/0"], row);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$3), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$3), $for_content__setup, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);
const $input$1 = ($scope, input) => $input_row($scope, input.row);
var grid_default = /*@__PURE__*/ _template("__tests__/tags/grid.marko", $template$2, "b%c", 0, $input$1);

// tags/last.marko
const $template$1 = "<button id=save-last>save</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__saved_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.saved_content));
const $if_content__setup = $if_content__saved_content;
const $if = /*@__PURE__*/ _if("#text/1", "L<!><!>", "b%", $if_content__setup);
const $saved = /*@__PURE__*/ _let("saved/5", ($scope) => {
	$saved_content($scope, $scope.saved?.content);
	$if($scope, $scope.saved ? 0 : 1);
});
const $saved_content = /*@__PURE__*/ _const("saved_content", $if_content__saved_content);
const $setup__script$1 = _script("__tests__/tags/last.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$saved($scope, [...$scope.input_item].at(-1));
}));
function $setup$1($scope) {
	$saved($scope, null);
	$setup__script$1($scope);
}
const $input = ($scope, input) => $input_item($scope, input.item);
const $input_item = /*@__PURE__*/ _const("input_item");
var last_default = /*@__PURE__*/ _template("__tests__/tags/last.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button id=fail>fail</button><div><!></div>`)($template$4, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& bD%l`)($walks$4, "b%c", $walks$1);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/1"], err_message);
const $catch_content__$params = ($scope, $params7) => $catch_content__err_message($scope, $params7[0]?.message);
const $catch_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_5*content", "caught <!>: <!>", "b%c%", 0, $catch_content__$params), { label($scope) {
	_text($scope["#text/0"], $scope.label);
} });
_resumed["__tests__/template.marko_5*content"] = $catch_content;
const $try_content__fail = /*@__PURE__*/ _closure_get("fail", ($scope) => _text($scope["#text/0"], (() => {
	if ($scope._.fail) throw new Error("click");
	return "ok";
})()), 0, "__tests__/template.marko_4_fail#7/subscribe");
const $try_content__setup = $try_content__fail;
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_3*content", " <b> </b>", " bD "), { i($scope) {
	_text($scope["#text/0"], $scope.i);
	_text($scope["#text/1"], $scope.i);
} });
_resumed["__tests__/template.marko_3*content"] = $item_content2;
const $cell_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em> </em>", "D "), { n($scope) {
	_text($scope["#text/0"], $scope.n);
} });
_resumed["__tests__/template.marko_2*content"] = $cell_content;
const $item_content__items_0__OR__item = /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/1"], $scope.item === $scope._.items_0));
const $item_content__items_ = /*@__PURE__*/ _closure_get("items_0", $item_content__items_0__OR__item);
const $item_content__setup = $item_content__items_;
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<span><!>:<!></span>", "D%c%", $item_content__setup), {
	item_text($scope) {
		_text($scope["#text/0"], $scope.item_text);
	},
	item: $item_content__items_0__OR__item
});
_resumed["__tests__/template.marko_1*content"] = $item_content;
const $items = /*@__PURE__*/ _let("items/5", ($scope) => {
	let $item;
	forOf($scope.items, (item) => {
		$item = attrTags($item, { content: $item_content($scope, {
			item_text: item?.text,
			item
		}) });
	});
	$input_item$1($scope["#childScope/0"], $item);
	$items_($scope, $scope.items?.[0]);
});
const $items_ = /*@__PURE__*/ _const("items_0");
const $fail__closure = /*@__PURE__*/ _closure($try_content__fail);
const $fail = /*@__PURE__*/ _let("fail/7", $fail__closure);
const $try = /*@__PURE__*/ _try("#text/4", " ", " ", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$fail($scope, true);
}));
function $setup($scope) {
	$setup$4($scope["#childScope/0"]);
	let $row;
	forOf(["a", "b"], (row) => {
		let $cell;
		forOf([1], (n) => {
			$cell = attrTags($cell, { content: $cell_content($scope, { n }) });
		});
		$row = attrTags($row, { cell: $cell });
	});
	$input_row($scope["#childScope/1"], $row);
	$setup$1($scope["#childScope/2"]);
	let $item2;
	forOf([1], (i) => {
		$item2 = attrTags($item2, { content: $item_content2($scope, { i }) });
	});
	$input_item($scope["#childScope/2"], $item2);
	let $catch;
	forOf(["static"], (label) => {
		$catch = attrTags($catch, { content: $catch_content($scope, { label }) });
	});
	$items($scope, [{ text: "a" }, { text: "b" }]);
	$fail($scope, false);
	$try($scope, { catch: $catch });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
