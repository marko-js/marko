// tags/child.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b2"]];
_shells({ b: "b !b2; b%;<button>toggle</button><!><!>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_v = _filled_guard($scope0_reason, 1), $fg__input_w = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			let x = input.v;
			_html(`<p>${_text_mark($scope1_id, "a", x)} ${_text_mark($scope1_id, "b", input.w, _write_guard($scope0_reason, 2) * 2)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b1");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b2");
	$fg__input_v && _patch_render($scope0_id, "b0", "e");
	$fg__input_w && _patch_render($scope0_id, "b1", "f");
	_patch_fill($scope0_id, "vb3", on, 1);
	_scope($scope0_id, {
		e: input.v,
		f: input.w,
		g: on
	}) || ($fg__input_v && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 1)), $fg__input_w && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		v: input.v,
		w: input.w
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
