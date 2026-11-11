// tags/combo/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/combo/index.marko": "__tests__/tags/combo/index.marko;D ;<p> </p>" });
var combo_default = _template("__tests__/tags/combo/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_label__OR__input_qty = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_qty = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.label + input.qty, 1, $scope0_reason, 0)}</p>`);
	_patch_render($scope0_id, "__tests__/tags/combo/index.marko_0_input_label#3_input_qty#4/setup", (($fg__input_label ? " input_label" : "") + ($fg__input_qty ? " input_qty" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_label: $ui__input_label__OR__input_qty && input.label,
		input_qty: $ui__input_label__OR__input_qty && input.qty
	}, "__tests__/tags/combo/index.marko", 0, {
		input_label: ["input.label"],
		input_qty: ["input.qty"]
	}) || ($fg__input_label && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)), $fg__input_qty && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_qty", input.qty, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("D l")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	combo_default({
		label: input.title,
		qty: count
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
