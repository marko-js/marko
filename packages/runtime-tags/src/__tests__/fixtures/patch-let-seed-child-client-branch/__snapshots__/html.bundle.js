// tags/child.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button>toggle</button><!><!>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			let x = input.v;
			_html(`<p>${_text_resume($scope1_id, "a", x)} ${_text_resume($scope1_id, "b", input.w, _write_guard($scope0_reason, 2) * 2)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb3", on, 1);
	_scope($scope0_id, {
		e: input.v,
		f: input.w,
		g: on
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.v, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb2", input.w, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		v: input.v,
		w: input.w
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
