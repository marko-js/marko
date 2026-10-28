// tags/toggle-panel/index.marko
const $template = "<div></div>";
const $setup$1 = [[], []];
_shells({
	b: "b; ;<div></div>",
	b0: "b0,<em>on</em>"
});
var toggle_panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<em>on</em>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b0"], $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)(" b")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	toggle_panel_default({ show: true });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
}, 1);
