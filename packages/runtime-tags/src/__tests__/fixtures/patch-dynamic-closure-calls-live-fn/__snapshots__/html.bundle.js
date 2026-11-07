// tags/panel.marko
const $template = "<!><!><output> </output>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({
	b: "b;b%bD ;<!><!><output> </output>",
	b4: "b4;b%;<!><!><!>",
	b3: "b3 !b1; D ;<button class=read> </button>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 0), $sg__input_a = _server_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	$fg__input_a && _patch_write($scope0_id, "xe", input.a, !$sg__input_a);
	const f = _bind_resume(function() {
		return input.a;
	}, "b0", $scope0_id);
	let out = "";
	_if(() => {
		if (input.y) {
			const $scope1_id = _scope_id();
			_for_of([1], (i) => {
				const $scope2_id = _scope_id();
				_html(`<button class=read>${_text_mark($scope2_id, "b", f(), 1, $scope0_reason, 0)}</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "b1");
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "b2", $cg__input_a);
				_subscribe(_unfilled_if($scope0_reason, 0) && $f2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_a && "b2");
			}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "b3", 0, 0);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b4"], $scope0_reason, 1);
	_html(`<output>${_text_mark($scope0_id, "b", out, 1, 0, 0, 1)}</output>`);
	$fg__input_a && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "b5", ["g", "e"]);
	_scope($scope0_id, {
		e: input.a,
		g: f,
		i: _write_if($scope0_reason, 0) && $f2__closures
	}) || $fg__input_a && _patch_write($scope0_id, "xg", f, !$sg__input_a);
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button class=toggle>toggle</button>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(8 | _updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	panel_default({
		a: input.a,
		y
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: y,
		b: _existing_scope($childScope)
	});
}, 1);
