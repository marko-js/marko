// tags/child.marko
const $template = "<i> </i>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<i> </i>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_x__OR__input_k = _unfilled_if($scope0_reason, 0), $fg__input_x = _filled_guard($scope0_reason, 1), $fg__input_k = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<i>${_text_mark($scope0_id, "a", input.x + input.k, 1, $scope0_reason, 0)}</i>`);
	_patch_render($scope0_id, "b0", (($fg__input_x ? " d" : "") + ($fg__input_k ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_x__OR__input_k && input.x,
		e: _write_if($scope0_reason, 1) && $ui__input_x__OR__input_k && input.k
	}) || ($fg__input_x && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.x, !_server_guard($scope0_reason, 1)), $fg__input_k && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.k, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&D l`)("D l")};${((_w0) => `<button>+</button>${_w0}<span> </span>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	child_default({
		x: "a",
		k: n
	});
	_patch_child_end();
	_html(`<span>${_text_mark($scope0_id, "c", input.y, 1, $scope0_reason, 0)}</span>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: n,
		b: _existing_scope($childScope)
	});
}, 1);
