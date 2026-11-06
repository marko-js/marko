// tags/gate.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({
	b: "b;b%bD ;<!><!><p> </p>",
	b0: "b0,<b>shown</b>"
});
var gate_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const flag = $global().flag;
	_if(() => {
		if (flag && input.on) {
			const $scope1_id = _scope_id();
			_html("<b>shown</b>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $scope0_page || _write_guard($scope0_reason, 0), 1, 0, 0, ["b0"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
	_html(`<p>${_text_mark($scope0_id, "b", flag && input.on ? "on" : "off", 1, (2 | _updates_from($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("b1", $scope0_id);
	_unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "we", input.on, 1);
	_patch_render($scope0_id, "b2", [_filled_guard($scope0_reason, 0) && "e", "f"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
	_scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 0) && input.on,
		f: _unfilled_if($scope0_reason, 0) && flag
	}) || _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", flag);
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button>toggle</button>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	gate_default({ on });
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: on,
		b: _existing_scope($childScope)
	});
}, 1);
