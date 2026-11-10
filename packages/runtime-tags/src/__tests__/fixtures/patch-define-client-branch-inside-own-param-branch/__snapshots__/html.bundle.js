// tags/child.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b2: "b2;b%;<!><!><!>",
	b: "b;b%;<!><!><!>",
	b3: `b3 a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template)}`,
	b1: "b1;D ;<span> </span>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_on = _client_guard($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_y = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			const D = { content: _content("b2", ({ x }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__x = _write_guard($scope2_reason, 0), $wi__x = _write_if($scope2_reason, 0);
				_if(() => {
					if (x) {
						const $scope3_id = _scope_id();
						_html(`<span>${_text_mark($scope3_id, "a", input.on, 1, $scope0_reason, 1)}</span>`);
						$cg__input_on && _patch_render($scope3_id, "b0");
						_subscribe(_unfilled_if($scope0_reason, 1) && $input_on__closures, _scope($scope3_id, { _: ($wi__input_on || $wi__x) && _scope_with_id($scope2_id) }), $cg__input_on && "b0");
						return 0;
					}
				}, $scope2_id, "a", 1, $wg__x, 1, 0, 0, ["b1"], $scope2_reason, 0);
				($wi__input_on || $wi__x) && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id, 0) };
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			D.content({ x: input.y });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b4");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_on, 1, 0, 0, ["b3"], $scope0_reason, 1);
	$fg__input_on && $cg__input_on && _patch_subscribers($scope0_id, "b5", "d");
	$fg__input_y && $cg__input_on && _patch_render($scope0_id, "b4", "e");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.on,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		f: $wi__input_on && $input_on__closures
	}) || ($fg__input_on && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 1)), $fg__input_y && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.y, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	child_default({
		on: input.on,
		y
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: y,
		b: _existing_scope($childScope)
	});
}, 1);
