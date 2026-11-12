// tags/picker/card.marko
_shells({ b: "b;D%c%;<em><!> <!></em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)} ${_text_mark($scope0_id, "b", $global$1.brand, 2, 4, 0)}</em>`);
	_global_subscribe("b0", $scope0_id);
	_scope($scope0_id, {});
});

// tags/picker/index.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var picker_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_on__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.on ? card_default : null, { label: input.label }, 1, 0, 0, $wg__input_on__OR__input_label, $scope0_reason, 0);
	_patch_render($scope0_id, "c0", (($fg__input_on ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_on__OR__input_label && input.on,
		e: _write_if($scope0_reason, 1) && $ui__input_on__OR__input_label && input.label
	}) || ($fg__input_on && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html("<main>");
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	picker_default({
		on,
		label: input.label
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: on,
		a: _existing_scope($childScope)
	});
}, 1);
