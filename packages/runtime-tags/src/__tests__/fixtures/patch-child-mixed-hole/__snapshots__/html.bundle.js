// tags/combo/index.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var combo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_label__OR__input_qty = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_qty = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.label + input.qty, 1, $scope0_reason, 0)}</p>`);
	_patch_render($scope0_id, "b0", (($fg__input_label ? " d" : "") + ($fg__input_qty ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_label__OR__input_qty && input.label,
		e: _write_if($scope0_reason, 1) && $ui__input_label__OR__input_qty && input.qty
	}) || ($fg__input_label && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 1)), $fg__input_qty && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.qty, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("D l")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	combo_default({
		label: input.title,
		qty: count
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);
