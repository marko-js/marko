// tags/child.marko
const $R_content__walks = "b%b%c";
const $R_content__template = "<!><!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($R_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($R_content__walks);
const $setup$1 = [["a>"], []];
_shells({
	b2: `b2;${$R_content__walks};${$R_content__template}`,
	b: `b a>;${((_w0) => `b/${_w0}&%c`)($R_content__walks)};${((_w0) => `<!>${_w0}<!><!>`)($R_content__template)}`,
	b1: "b1;D ;<span> </span>",
	b3: `b3 >>a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($R_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($R_content__template)}`,
	b4: `b4 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($R_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($R_content__template)}`
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wi__input_v__OR__input_on = _write_if($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 2), $ui__input_on = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_v__closures = /* @__PURE__ */ new Set();
	const R = { content: _content("b2", ({ flip, depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__flip__OR__depth = _write_if($scope1_reason, 0), $wg__flip = _write_guard($scope1_reason, 1), $wg__depth = _write_guard($scope1_reason, 2), $ui__depth = _unfilled_if($scope1_reason, 2);
		_if(() => {
			if (flip) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "a", input.v, 1, $scope0_reason, 1)}</span>`);
				$cg__input_v && _patch_render($scope2_id, "b0");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_v__closures, _scope($scope2_id, { _: ($wi__input_v__OR__input_on || $wi__flip__OR__depth) && _scope_with_id($scope1_id) }), $cg__input_v && "b0");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__flip, 1, 0, 0, ["b1"], $scope1_reason, 1);
		_if(() => {
			if (depth) {
				const $scope3_id = _scope_id();
				_set_scope_reason(_updates_from($scope1_reason, 0) << 1 | _updates_from($scope1_reason, 1) << 3 | _updates_from($scope1_reason, 2) << 5);
				const $childScope = _peek_scope_id($scope3_id, "a", 0, 0, $scope0_id);
				R.content({
					flip: !flip,
					depth: depth - 1
				});
				_patch_child_end();
				_scope($scope3_id, {
					_: ($wi__input_on || $wi__flip__OR__depth) && _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "b", 1, $wg__depth, 1, 0, 0, ["b3"], $scope1_reason, 2);
		$ui__depth && _patch_write($scope1_id, "we", flip, 1);
		($wi__input_v__OR__input_on || $wi__flip__OR__depth) && _scope($scope1_id, {
			e: $ui__depth && flip,
			_: _scope_with_id($scope0_id)
		});
	}, $scope0_id, 0) };
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	R.content({ depth: 2 });
	_patch_child_end();
	_if(() => {
		if (input.on) {
			const $scope4_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope4_id, "a", 2, 0, $scope0_id);
			R.content({
				flip: true,
				depth: 1
			});
			_patch_child_end();
			_scope($scope4_id, {
				_: $wi__input_on && _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_on, 1, 0, 0, ["b4"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: ($ui__input_on || _unfilled_if($scope0_reason, 1)) && input.v,
		g: _write_if($scope0_reason, 1) && $input_v__closures,
		a: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 1) && $ui__input_on && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 1)) && _client_guard($scope0_reason, 2) && _patch_subscribers($scope0_id, "b5", "e");
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks)};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template)}` });
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
