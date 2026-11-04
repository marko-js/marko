// tags/inner.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;D ;<p> </p>"
});
var inner_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 1);
			const v = "v";
			_html(`<p>${_text_mark($scope1_id, "a", v + input.label, 1, $scope0_reason, 1)}</p>`);
			$ui__input_label && _patch_write($scope1_id, "wb", v, 1);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {
				b: $ui__input_label && v,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b2", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>label</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	_html(`<button>label</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(8 | _updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	inner_default({
		show: input.show,
		label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: label,
		b: _existing_scope($childScope)
	});
}, 1);
