// tags/reveal.marko
const $template = "<button>show</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["c1"]];
_shells({ c: "c !c1; b%;<button>show</button><!><!>" });
var reveal_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>show</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "c1");
	$fg__input_content && _patch_render($scope0_id, "c0", "e");
	_patch_fill($scope0_id, "vc2", show, 1);
	_scope($scope0_id, {
		e: input.content,
		f: show
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// tags/card.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<section>${_w0}</section>`)($template)}` });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	reveal_default({ content: input.content });
	_patch_child_end();
	_html("</section>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a0: "a0",
	a: "a;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_rows = _client_guard($scope0_reason, 1), $wg__input_wrap = _write_guard($scope0_reason, 2), $wi__input_rows__OR__input_wrap = _write_if($scope0_reason, 0), $ui__input_rows = _unfilled_if($scope0_reason, 1), $fg__input_wrap = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id(), $ui__input_wrap = _unfilled_if($scope0_reason, 2), $fg__input_rows = _filled_guard($scope0_reason, 1);
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.wrap ? card_default : "div", {}, 2, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<b>${_text_mark($scope2_id, "a", row.label, 1, $scope0_reason, 1)}</b>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a1", $cg__input_rows);
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__row_label__closures, _scope($scope2_id, { _: $wi__input_rows__OR__input_wrap && _scope_with_id($scope1_id) }), $cg__input_rows && "a1");
		}, $scope1_id, ($scope) => $scope0_page ? [{ d: row?.label }] : []), 0, $wg__input_wrap, $scope0_reason, 2, 0, void 0, 0, 0, "a0");
		$fg__input_rows && _patch_subscribers($scope1_id, "a2", "d");
		_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a3");
		$wi__input_rows__OR__input_wrap && _scope($scope1_id, {
			d: ($ui__input_wrap || _unfilled_if($scope0_reason, 1)) && row?.label,
			_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
			g: _write_if($scope0_reason, 1) && $for_content__row_label__closures
		});
		$fg__input_rows && (_client_branch_if("a0", $scope1_id) || $ui__input_wrap) && _patch_write($scope1_id, "xd", row?.label, !_server_guard($scope0_reason, 1));
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 1);
	$fg__input_wrap && $cg__input_rows && _patch_render($scope0_id, "a3", "e");
	_scope($scope0_id, { e: ($ui__input_rows || _unfilled_if($scope0_reason, 2)) && input.wrap }) || $fg__input_wrap && $ui__input_rows && _patch_write($scope0_id, "xe", input.wrap, !_server_guard($scope0_reason, 2));
}, 1);
