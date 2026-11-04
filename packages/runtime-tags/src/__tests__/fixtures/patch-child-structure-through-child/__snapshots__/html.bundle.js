// tags/leaf.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;D ;<em> </em>"
});
var leaf_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag = _write_guard($scope0_reason, 0), $ui__input_flag = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.flag) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 1)}</em>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_flag, 1, 0, 0, ["b1"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: ($ui__input_flag || _unfilled_if($scope0_reason, 1)) && input.label }) || $fg__input_label && $ui__input_flag && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
});

// tags/mid.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c2: `c2${_shell_marker([[], []], ["a>", $setup$2])};${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c")};${/*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$1)}`
});
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_flag = _filled_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			leaf_default({
				flag: input.flag,
				label: input.label
			});
			_patch_child_end();
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "c0");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "c1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["c2"], $scope0_reason, 1);
	$fg__input_flag && $cg__input_show && _patch_render($scope0_id, "c0", "e");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "c1", "f");
	_scope($scope0_id, {
		e: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.flag,
		f: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.label
	}) || ($fg__input_flag && $ui__input_show && _patch_write($scope0_id, "xe", input.flag, !_server_guard($scope0_reason, 2)), $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(8 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 5 | _updates_from($scope0_reason, 2) << 7));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	mid_default({
		show: true,
		flag: input.flag,
		label: input.label
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1);
