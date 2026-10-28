// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button>x</button><!><!>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let rows = [1];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (r) => {
		const $scope1_id = _scope_id();
		_html(`<div${_attr("title", input.label)}>${_text_resume($scope1_id, "b", r)}</div>${_el_resume($scope1_id, "a", _write_guard($scope0_reason, 0))}`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", rows, 1);
	_scope($scope0_id, { e: input.label }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a !;b%;<h1>Rows reading a request value</h1><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<h1>Rows reading a request value</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1));
}, 1);
