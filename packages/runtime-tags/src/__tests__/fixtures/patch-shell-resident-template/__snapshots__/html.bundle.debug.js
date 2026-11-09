// counter.marko
const $template$3 = "<b> </b>";
const $walks$3 = "D l";
const $setup$3 = [[], []];
_shells({ "__tests__/counter.marko": "__tests__/counter.marko;D ;<b> </b>" });
var counter_default = _template("__tests__/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {}, "__tests__/counter.marko", 0);
});

// other.marko
const $template$2 = "<i> </i>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/other.marko": "__tests__/other.marko;D ;<i> </i>" });
var other_default = _template("__tests__/other.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {}, "__tests__/other.marko", 0);
});

// tags/chooser.marko
const $template$1 = "<button>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/chooser.marko_0"]];
_shells({ "__tests__/tags/chooser.marko": "__tests__/tags/chooser.marko !__tests__/tags/chooser.marko_0; b%;<button>toggle</button><!><!>" });
var chooser_default = _template("__tests__/tags/chooser.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_label = _write_guard($scope0_reason, 0), $fg__input_Tag = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.Tag, { label: input.label }, 0, 0, 0, $wg__input_Tag__OR__input_label);
			_patch_render($scope1_id, "__tests__/tags/chooser.marko_1_input_Tag#0:4_input_label#0:5/setup", [_filled_guard($scope0_reason, 1) && ">input_Tag", _filled_guard($scope0_reason, 2) && ">input_label"], $scope0_reason, 0);
			_scope($scope1_id, {}, "__tests__/tags/chooser.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/chooser.marko_0");
	$fg__input_Tag && _patch_render($scope0_id, "__tests__/tags/chooser.marko_1_input_Tag#0:4/setup", "input_Tag");
	$fg__input_label && _patch_render($scope0_id, "__tests__/tags/chooser.marko_1_input_label#0:5/setup", "input_label");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/chooser.marko_0_show#6/fill", show, 1);
	_scope($scope0_id, {
		input_Tag: input.Tag,
		input_label: input.label,
		show
	}, "__tests__/tags/chooser.marko", 0, {
		input_Tag: ["input.Tag"],
		input_label: ["input.label"],
		show: "1:6"
	}) || ($fg__input_Tag && _patch_write($scope0_id, "PatchMarkedWrite:input_Tag", input.Tag, !_server_guard($scope0_reason, 1)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_which__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 2), $ui__input_which = _unfilled_if($scope0_reason, 1), $fg__input_which = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.which ? counter_default : other_default, { label: input.label }, 5, 0, 0, $wg__input_which__OR__input_label, $scope0_reason, 0);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 1);
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_patch_child_end();
	_patch_render($scope0_id, "__tests__/template.marko_0_input_which#4_input_label#5/setup", [$fg__input_which && "input_which", $fg__input_label && "input_label"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_which: ($ui__input_label || $ui__input_which__OR__input_label) && input.which,
		input_label: ($ui__input_which || $ui__input_which__OR__input_label) && input.label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_label: ["input.label"]
	}) || ($fg__input_which && $ui__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_which", input.which, !_server_guard($scope0_reason, 1)), $fg__input_label && $ui__input_which && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
