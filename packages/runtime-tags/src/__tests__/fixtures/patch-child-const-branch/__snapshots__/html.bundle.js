// tags/badge/index.marko
const $template = "<div></div>";
const $setup$1 = [[], []];
_shells({
	b: "b !; ;<div></div>",
	b1: "b1;D ;<i> </i>"
});
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.label) {
			const $scope1_id = _scope_id();
			_html(`<i>${_text_resume($scope1_id, "a", input.note, 1, $scope0_reason, 1)}</i>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_label, void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "a", $wg__input_label)}`);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.note }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.note, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& D m`)(" b")};${((_w0) => `<main>${_w0}<button> </button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	badge_default({
		label: "hi",
		note: input.title
	});
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1);
