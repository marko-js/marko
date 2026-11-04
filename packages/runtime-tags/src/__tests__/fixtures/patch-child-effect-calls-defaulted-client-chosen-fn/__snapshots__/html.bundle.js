// tags/label-view.marko
const $template = "<output></output>";
const $setup$1 = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_fmt = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const fmt = input.fmt ?? _resume(() => "none", "b0");
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b1", 1, $fg__input_fmt, "e");
	_scope($scope0_id, { e: fmt }) || $fg__input_fmt && _patch_write($scope0_id, "xe", fmt, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)(" b")};${((_w0) => `${_w0}<button>toggle</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(6);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_view_default({ fmt: low });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_patch_render($scope0_id, "a3", [
		$fg__input_title && "g",
		$fg__input_title && "e",
		$fg__input_title && "h"
	]);
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	}) || ($fg__input_title && _patch_write($scope0_id, "xg", up, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xh", low, !$sg__input_title));
}, 1);
