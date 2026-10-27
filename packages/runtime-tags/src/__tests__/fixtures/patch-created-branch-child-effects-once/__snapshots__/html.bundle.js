// tags/inner.marko
const $template$2 = "<span>inner</span>";
const $setup$2 = [[], ["b0"]];
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
const $setup$1 = _shell_setup([[], ["c0"]], ["a>", $setup$2]);
_shells({ c: /*@__PURE__*/ ((_w0) => `c${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("b")};${_w0}`)($template$2) });
var outer_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "a", 0);
	inner_default({});
	_patch_child_end();
	_script($scope0_id, "c0");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/wrap.marko
const $template = "<div><!></div>";
const $setup = [[], []];
_shells({ d: "d;D%;<div><!></div>" });
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.body, {}, 2, 0, 0, $wg__input_body, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $Body_content__walks = "b";
const $Body_content__template = "<b>define</b>";
_shells({
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], ["a15"]], ["a>", $setup$2]))}`)(),
	a5: "a5 !a12;b%;<em>content</em><!><!>",
	a: "a !a23; D l%;<button> </button><!><!>",
	a6: /*@__PURE__*/ (() => `a6${_shell_marker(_shell_setup([["a31"], ["a19"]], ["a>", $setup$1], [">b>", [[], ["a1"]]], ["e>", $setup]))};${/*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&%b%b/${_w2}&%c`)($walks, $Body_content__walks, "D%l")};${/*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}<!><!>${_w2}<!><!>`)($template$1, $Body_content__template, $template)}`)(),
	a3: "a3;D ;<i> </i>",
	a7: "a7 !a10,<u>nested</u>",
	a8: "a8,",
	a9: "a9,"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_items = _server_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_items = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_items__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const Body = { content: _content("a0", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html("<b>define</b>");
		_script($scope4_id, "a1", 0);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a", 0);
			outer_default({});
			_patch_child_end();
			const $childScope2 = _patch_child($scope1_id, "b", 1);
			Body.content({});
			_patch_child_end();
			_for_of(input.items, (item) => {
				const $scope5_id = _scope_id();
				_filled_guard($scope0_reason, 4) && _patch_write($scope5_id, "xc", item, !$sg__input_items);
				_html(`<i>${_patch_text($scope5_id, "a", item, void 0, $scope0_reason, 4)}</i>`);
				_script($scope5_id, "a2");
				_filled_guard($scope0_reason, 4) && _patch_effect($scope5_id, $cg__input_items ? "ha2" : "ea2", "c");
				$scope0_page && _scope($scope5_id, { c: item });
			}, 0, $scope1_id, "c", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 4);
			_if(() => {
				if (input.nested) {
					const $scope6_id = _scope_id();
					_html("<u>nested</u>");
					_script($scope6_id, "a10", 0);
					$scope0_page && _write_if($scope0_reason, 5) && _scope($scope6_id, {});
					return 0;
				}
			}, $scope1_id, "d", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["a7"], $scope0_reason, 5);
			_set_scope_reason(0);
			const $childScope3 = _patch_child($scope1_id, "e", 2);
			wrap_default({ body: attrTag({ content: _content_elide("a5", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				_html("<em>content</em>");
				_for_of(input.items, (item) => {
					const $scope7_id = _scope_id();
					_filled_guard($scope0_reason, 4) && _patch_write($scope7_id, "xb", item, !$sg__input_items);
					_script($scope7_id, "a11", 0);
					_filled_guard($scope0_reason, 4) && _patch_effect($scope7_id, $cg__input_items ? "ha11" : "ea11", "b");
					$scope2_page && _scope($scope7_id, { b: item });
				}, 0, $scope2_id, "a", 1, void 0, void 0, void 0, void 0, "a8", $scope0_reason, 4);
				_script($scope2_id, "a12");
				$cg__input_items && _patch_init($scope2_id, "a13");
				$scope2_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }));
			}, $scope1_id) }) });
			_patch_child_end();
			_dynamic_tag($scope1_id, "f", input.tag, {}, 34, _content_resume("a4", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				const $scope3_page = _page_render();
				const $childScope4 = _patch_child($scope3_id, "a", 3);
				inner_default({});
				_patch_child_end();
				_for_of(input.items, (item) => {
					const $scope8_id = _scope_id();
					_filled_guard($scope0_reason, 4) && _patch_write($scope8_id, "xb", item, !$sg__input_items);
					_script($scope8_id, "a14", 0);
					_filled_guard($scope0_reason, 4) && _patch_effect($scope8_id, $cg__input_items ? "ha14" : "ea14", "b");
					$scope3_page && _scope($scope8_id, { b: item });
				}, 0, $scope3_id, "b", 1, void 0, void 0, void 0, void 0, "a9", $scope0_reason, 4);
				_script($scope3_id, "a15");
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, $cg__input_items ? "a16" : "a17");
				$scope3_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _scope($scope3_id, {
					_: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id),
					a: _existing_scope($childScope4),
					Ck: $wi__input_items && 1
				}));
			}, $scope1_id, ($scope) => $scope0_page ? [{ g: input.items }, { _: $scope($scope0_id) }] : []), 0, _write_guard($scope0_reason, 6), $scope0_reason, 6);
			_script($scope1_id, "a18");
			_script($scope1_id, "a19");
			$cg__input_items && _patch_init($scope1_id, "a20");
			_client_guard($scope0_reason, 5) && _patch_init($scope1_id, "a21");
			_client_guard($scope0_reason, 6) && _patch_init($scope1_id, "a22");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2),
				e: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["a6"], $scope0_reason, 3);
	_script($scope0_id, "a23");
	$scope0_page ? _scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && input.items,
		h: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.nested,
		i: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 6)) && input.tag,
		j: count,
		k: $wi__input_items && $input_items__closures
	}) : (_filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "va24", input.items, !$sg__input_items) : _content_withheld("a4", $scope0_id) && _patch_fill($scope0_id, "va25", input.items)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "va26", input.nested, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "va27", input.tag, !_server_guard($scope0_reason, 6)), $cg__input_show && _content_withhold(input.tag));
}, 1);
