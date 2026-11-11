// counter.marko
_shells({ a: "a;D ;<b> </b>" });
var counter_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {});
});

// other.marko
_shells({ b: "b;D ;<i> </i>" });
var other_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {});
});

// tags/chooser.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["d1"]];
_shells({ d: "d !d1; b%;<button>toggle</button><!><!>" });
var chooser_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $fg__input_Tag = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "d1");
	$fg__input_Tag && _patch_render($scope0_id, "d2", "e");
	$fg__input_label && _patch_render($scope0_id, "d3", "f");
	_patch_fill($scope0_id, "vd4", show, 1);
	_scope($scope0_id, {
		e: input.Tag,
		f: input.label,
		g: show
	}) || ($fg__input_Tag && _patch_write($scope0_id, "xe", input.Tag, !_server_guard($scope0_reason, 1)), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ c: `c${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}` });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_which__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_which = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.which ? counter_default : other_default, { label: input.label }, 5, 0, 0, $wg__input_which__OR__input_label, $scope0_reason, 0);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 1);
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_patch_child_end();
	_patch_render($scope0_id, "c0", (($fg__input_which ? " e" : "") + ($fg__input_label ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: $ui__input_which__OR__input_label && input.which,
		f: $ui__input_which__OR__input_label && input.label,
		b: _existing_scope($childScope)
	}) || ($fg__input_which && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.which, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
