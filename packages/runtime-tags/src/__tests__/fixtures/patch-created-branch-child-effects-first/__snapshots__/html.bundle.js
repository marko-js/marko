// tags/inner.marko
const $template$2 = "<span>inner</span>";
_shells({ b: "b !b0,<span>inner</span>" });
var inner_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>inner</span>");
	_script($scope0_id, "b0", 0);
});

// tags/outer.marko
const $template$1 = $template$2;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b");
_shells({ c: /*@__PURE__*/ ((_w0) => `c !c0;${((_w0) => `/${_w0}&`)("b")};${_w0}`)($template$2) });
var outer_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "a");
	inner_default({});
	_script($scope0_id, "c0");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/wrap.marko
const $template = "<div><!></div>";
_shells({ d: "d;D%;<div><!></div>" });
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.body, {}, 0, 0, $wg__input_body, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $Body_content__walks = "b";
const $Body_content__template = "<b>define</b>";
_shells({
	a0: "a0 !a15,",
	a1: "a1 !a12;b%;<em>content</em><!><!>",
	a: "a !a19; D l%;<button> </button><!><!>",
	a2: /*@__PURE__*/ (() => `a2 a28!a18;${/*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&%b%b/${_w2}&%c`)($walks, $Body_content__walks, "D%l")};${/*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}<!><!>${_w2}<!><!>`)($template$1, $Body_content__template, $template)}`)(),
	a3: "a3 !a9;D ;<i> </i>",
	a4: "a4 !a10,<u>nested</u>",
	a5: "a5 !a11,",
	a6: "a6 !a14,"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_items = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_items__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const Body = { content: _content("a7", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html("<b>define</b>");
		_script($scope4_id, "a8", 0);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a");
			outer_default({});
			const $childScope2 = _patch_child($scope1_id, "b");
			Body.content({});
			_for_of(input.items, (item) => {
				const $scope5_id = _scope_id();
				_filled_guard($scope0_reason, 4) && _patch_write($scope5_id, "wc", item, !_server_guard($scope0_reason, 4));
				_html(`<i>${_patch_text($scope5_id, "a", item, void 0, $scope0_reason, 4)}</i>`);
				_script($scope5_id, "a9");
				_server_guard($scope0_reason, 4) && _patch_effect($scope5_id, "ea9", "c");
				_scope($scope5_id, { c: item });
			}, 0, $scope1_id, "c", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 4);
			_if(() => {
				if (input.nested) {
					const $scope6_id = _scope_id();
					_html("<u>nested</u>");
					_script($scope6_id, "a10", 0);
					_write_if($scope0_reason, 5) && _scope($scope6_id, {});
					return 0;
				}
			}, $scope1_id, "d", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["a4"], $scope0_reason, 5);
			_set_scope_reason(0);
			const $childScope3 = _patch_child($scope1_id, "e");
			wrap_default({ body: attrTag({ content: _content_elide("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("<em>content</em>");
				_for_of(input.items, (item) => {
					const $scope7_id = _scope_id();
					_filled_guard($scope0_reason, 4) && _patch_write($scope7_id, "wb", item, !_server_guard($scope0_reason, 4));
					_script($scope7_id, "a11", 0);
					_server_guard($scope0_reason, 4) && _patch_effect($scope7_id, "ea11", "b");
					_scope($scope7_id, { b: item });
				}, 0, $scope2_id, "a", 1, void 0, void 0, void 0, void 0, "a5", $scope0_reason, 4);
				_script($scope2_id, "a12");
				_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, "a13");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }));
			}, $scope1_id) }) });
			_dynamic_tag($scope1_id, "f", input.tag, {}, _content_resume("a0", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				const $childScope4 = _patch_child($scope3_id, "a");
				inner_default({});
				_for_of(input.items, (item) => {
					const $scope8_id = _scope_id();
					_filled_guard($scope0_reason, 4) && _patch_write($scope8_id, "wb", item, !_server_guard($scope0_reason, 4));
					_script($scope8_id, "a14", 0);
					_server_guard($scope0_reason, 4) && _patch_effect($scope8_id, "ea14", "b");
					_scope($scope8_id, { b: item });
				}, 0, $scope3_id, "b", 1, void 0, void 0, void 0, void 0, "a6", $scope0_reason, 4);
				_script($scope3_id, "a15");
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, "a16");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _scope($scope3_id, {
					_: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id),
					a: _existing_scope($childScope4),
					Ck: $wi__input_items && 1
				}));
			}, $scope1_id, ($scope) => $scope0_page ? [{ g: input.items }, { _: $scope($scope0_id) }] : []), 0, _write_guard($scope0_reason, 6), void 0, 2, $scope0_reason, 6);
			_script($scope1_id, "a17", 1, 1);
			_script($scope1_id, "a18");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2),
				e: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["a2"], $scope0_reason, 3);
	_script($scope0_id, "a19");
	_patch_value($scope0_id, "va24", count, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && input.items,
		h: _unfilled_if($scope0_reason, 3) && input.nested,
		i: _unfilled_if($scope0_reason, 3) && input.tag,
		j: count,
		k: $wi__input_items && $input_items__closures
	}) : (_filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 3) ? _patch_value($scope0_id, "va20", input.items, !_server_guard($scope0_reason, 4)) : _content_withheld("a0", $scope0_id) && _patch_value($scope0_id, "va21", input.items)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "va22", input.nested, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "va23", input.tag, !_server_guard($scope0_reason, 6)), _client_guard($scope0_reason, 3) && _content_withhold(input.tag));
}, 1);
