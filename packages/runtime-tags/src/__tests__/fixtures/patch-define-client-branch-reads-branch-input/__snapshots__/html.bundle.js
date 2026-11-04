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
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wi__input_v = _write_if($scope0_reason, 1), $wg__input_v = _write_guard($scope0_reason, 1), $ui__input_v = _unfilled_if($scope0_reason, 1), $ui__input_on = _unfilled_if($scope0_reason, 2), $fg__input_v = _filled_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 2), $fg__input_on = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_v__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			const D = { content: _content("b2", ({ on }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0), $wi__on = _write_if($scope2_reason, 0);
				_if(() => {
					if (on) {
						const $scope3_id = _scope_id();
						_html(`<span>${_text_mark($scope3_id, "a", input.v, 1, $scope0_reason, 1)}</span>`);
						$cg__input_v && _patch_render($scope3_id, "b0");
						_subscribe(_unfilled_if($scope0_reason, 1) && $input_v__closures, _scope($scope3_id, { _: ($wi__input_v || $wi__on) && _scope_with_id($scope2_id) }), $cg__input_v && "b0");
						return 0;
					}
				}, $scope2_id, "a", 1, $wg__on, 1, 0, 0, ["b1"], $scope2_reason, 0);
				($wi__input_v || $wi__on) && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id, 0) };
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			D.content({ on: input.on });
			_patch_child_end();
			$cg__input_on && _patch_render($scope1_id, "b4");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_v, 1, 0, 0, ["b3"], $scope0_reason, 1);
	$fg__input_v && $cg__input_on && _patch_subscribers($scope0_id, "b5", "d");
	$fg__input_on && $cg__input_v && _patch_render($scope0_id, "b4", "e");
	_scope($scope0_id, {
		d: ($ui__input_on || $ui__input_v) && input.v,
		e: ($ui__input_v || $ui__input_on) && input.on,
		f: $wi__input_v && $input_v__closures
	}) || ($fg__input_v && $ui__input_on && _patch_write($scope0_id, "xd", input.v, !_server_guard($scope0_reason, 1)), $fg__input_on && $ui__input_v && _patch_write($scope0_id, "xe", input.on, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	child_default({
		v: input.v,
		on
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: on,
		b: _existing_scope($childScope)
	});
}, 1);
