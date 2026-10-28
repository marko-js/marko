// tags/field.marko
const $template = "<textarea></textarea>";
const $setup = [[], []];
_shells({ b: "b; ;<textarea></textarea>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea></textarea>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, _filled_guard($scope0_reason, 0), "d");
	_scope($scope0_id, { d: input.onKeyDown }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.onKeyDown, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a;b%bD ;<!><!><p> </p>",
	a3: "a3;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], ["a1"]], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}& b`)(" b")};${/*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_for_of([1, 2], (i) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(($scope0_page ? 1 : 0) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				field_default({ onKeyDown: _resume(function() {
					count += i;
				}, "a0", $scope2_id) });
				_patch_child_end();
				_html(`<button>+</button>${_el_resume($scope2_id, "b")}`);
				_script($scope2_id, "a1");
				_patch_write($scope2_id, "wd", i, 1);
				_scope($scope2_id, {
					d: i,
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
			}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a2", 0, 0);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", count)}</p>`);
	_scope($scope0_id, { f: count });
}, 1);
