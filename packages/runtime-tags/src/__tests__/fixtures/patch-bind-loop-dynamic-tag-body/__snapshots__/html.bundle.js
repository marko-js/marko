// tags/reveal.marko
const $template = "<button>show</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0; b%;<button>show</button><!><!>" });
var reveal_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>show</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc2", show, 1);
	_scope($scope0_id, {
		e: input.content,
		f: show
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/card.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<section>${_w0}</section>`)($template)}`)() });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	reveal_default({ content: input.content });
	_patch_child_end();
	_html("</section>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a0: "a0",
	a: "a !;b%;<!><!><!>",
	a5: "a5 !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_wrap = _write_guard($scope0_reason, 2), $wi__input_rows__OR__input_wrap = _write_if($scope0_reason, 0), $cg__input_rows = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.wrap ? card_default : "div", {}, 2, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<b>${_text_resume($scope2_id, "a", row.label, void 0, $scope0_reason, 1)}</b>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_rows ? "a1" : "a2");
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__row_label__closures, _scope($scope2_id, { _: $wi__input_rows__OR__input_wrap && _scope_with_id($scope1_id) }));
		}, $scope1_id, ($scope) => $scope0_page ? [{ d: row?.label }] : []), 0, $wg__input_wrap, $scope0_reason, 2);
		_filled_guard($scope0_reason, 1) && _content_withheld("a0", $scope1_id) && _patch_fill($scope1_id, "va3", row?.label);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a4");
		$wi__input_rows__OR__input_wrap && _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && row?.label,
			_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
			g: _write_if($scope0_reason, 1) && $for_content__row_label__closures
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a5", $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.wrap }) || (_filled_guard($scope0_reason, 2) && $cg__input_rows && _patch_fill($scope0_id, "va6", input.wrap, !_server_guard($scope0_reason, 2)), $cg__input_rows && _content_withhold(input.wrap));
}, 1);
