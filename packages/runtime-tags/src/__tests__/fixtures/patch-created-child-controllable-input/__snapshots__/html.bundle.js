// tags/demo-card.marko
const $template$1 = "<button>tab=<!></button>";
const $walks$1 = " Db%l";
_shells({ b: "b !b1; Db%;<button>tab=<!></button>" });
var demo_card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let selected = input.tab;
	input.tabChange && _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "b0", selected);
	_html(`<button>tab=${_text_resume($scope0_id, "b", String(selected), 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b1");
	_patch_write($scope0_id, "e", input.tab, 1);
	_patch_write($scope0_id, "f", input.tabChange, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b4");
	_patch_value($scope0_id, "b0", selected, 1);
	_patch_bind($scope0_id, "i", input.tabChange || void 0);
	$scope0_page ? _scope($scope0_id, {
		e: _source_if($scope0_reason, 2) && input.tab,
		f: _source_if($scope0_reason, 1) && input.tabChange,
		h: selected,
		i: input.tabChange || void 0
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "b2", input.tab), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b3", input.tabChange));
});

// tags/page-b.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
_shells({ c: /*@__PURE__*/ ((_w0) => `c !;${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var page_b_default = _template_patch("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tab = 0;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	demo_card_default({
		tab,
		tabChange: _resume((_new_tab) => {
			tab = _new_tab;
		}, "c0", $scope0_id)
	});
	_patch_value($scope0_id, "c1", tab, 1);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			page_b_default({});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
