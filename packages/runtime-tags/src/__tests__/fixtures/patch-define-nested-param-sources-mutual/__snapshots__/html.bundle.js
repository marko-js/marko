// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $Wrapper_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Outer_content__walks);
const $Wrapper_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Outer_content__template);
const $Relay_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrapper_content__walks);
const $Relay_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrapper_content__template);
_shells({
	a: `a a>>a>a>!a11;${((_w0) => `b/${_w0}& b`)($Wrapper_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Wrapper_content__template)}`,
	a9: `a9 >a>>>a>>a>a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Relay_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Relay_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Outer = { content: _content("a4", ({ x, y }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__x__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $fg__x = _filled_guard($scope1_reason, 0), $wi__x = _write_if($scope1_reason, 0);
		const Inner = { content: _content("a0", ({ z }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason(), $fg__z = _filled_guard($scope2_reason, 0);
			_html(`<p>${_text_mark($scope2_id, "a", input.label + x + z, 1, (_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0) | _updates_from($scope2_reason, 0)) << 1, 0)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a1");
			_unfilled_if($scope1_reason, 0) && _patch_subscribe($scope2_id, "a2");
			_patch_render($scope2_id, "a3", [
				_filled_guard($scope0_reason, 0) && ">>e",
				_filled_guard($scope1_reason, 0) && ">d",
				$fg__z && "d"
			], (_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0) | _updates_from($scope2_reason, 0)) << 1, 0);
			_subscribe(_unfilled_if((_updates_from($scope1_reason, 0) | _updates_from($scope2_reason, 0)) << 1, 0) && $wi__x && $Outer_content__x__closures, _subscribe(_unfilled_if((_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0) | _updates_from($scope2_reason, 0)) << 1, 0) && $wi__input_label && $input_label__closures, _scope($scope2_id, {
				d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope2_reason, 0)) && z,
				_: _scope_with_id($scope1_id)
			}), _client_guard((_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0) | _updates_from($scope2_reason, 0)) << 1, 0) && "a1"), _client_guard((_updates_from($scope1_reason, 0) | _updates_from($scope2_reason, 0)) << 1, 0) && "a2") || $fg__z && ($cg__input_label || _client_guard($scope1_reason, 0)) && _patch_write($scope2_id, "xd", z, !_server_guard($scope2_reason, 0));
		}, $scope1_id) };
		_set_scope_reason(_updates_from($scope1_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Inner.content({ z: y });
		_patch_child_end();
		$fg__x && _patch_subscribers($scope1_id, "a5", "d");
		_scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0)) && x,
			_: _scope_with_id($scope0_id),
			i: $wi__x && $Outer_content__x__closures,
			a: _existing_scope($childScope)
		}) || $fg__x && ($cg__input_label || _client_guard($scope1_reason, 1)) && _patch_write($scope1_id, "xd", x, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	const Wrapper = { content: _content("a10", ({ a, b, depth }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__depth = _write_guard($scope3_reason, 3), $wi__depth = _write_if($scope3_reason, 3), $cg__depth = _client_guard($scope3_reason, 3), $fg__a = _filled_guard($scope3_reason, 1);
		const Relay = { content: _content("a6", ({ a, b, depth }) => {
			const $scope4_id = _scope_id();
			const $scope4_reason = _scope_reason();
			_set_scope_reason(_updates_from($scope4_reason, 0) << 1 | _updates_from($scope4_reason, 2) << 3 | _updates_from($scope4_reason, 1) << 5 | _updates_from($scope4_reason, 3) << 7);
			const $childScope2 = _peek_scope_id($scope4_id, "a", 1, 0, $scope0_id);
			Wrapper.content({
				a: b,
				b: a,
				depth
			});
			_patch_child_end();
			_scope($scope4_id, {
				_: $wi__depth && _scope_with_id($scope3_id),
				a: _existing_scope($childScope2)
			});
		}, $scope3_id) };
		_set_scope_reason(_updates_from($scope3_reason, 1) << 1 | _updates_from($scope3_reason, 2) << 3);
		const $childScope3 = _peek_scope_id($scope3_id, "a", 2, 0, $scope0_id);
		Outer.content({
			x: a,
			y: b
		});
		_patch_child_end();
		_if(() => {
			if (depth) {
				const $scope5_id = _scope_id();
				_set_scope_reason(_updates_from($scope3_reason, 0) << 1 | _updates_from($scope3_reason, 2) << 3 | _updates_from($scope3_reason, 1) << 5 | _updates_from($scope3_reason, 3) << 7);
				const $childScope4 = _peek_scope_id($scope5_id, "a", 3, 0, $scope3_id);
				Relay.content({
					a: b,
					b: a,
					depth: depth - 1
				});
				_patch_child_end();
				_client_guard($scope3_reason, 1) && _patch_render($scope5_id, "a7");
				_client_guard($scope3_reason, 2) && _patch_render($scope5_id, "a8");
				_scope($scope5_id, {
					_: _write_if($scope3_reason, 0) && _scope_with_id($scope3_id),
					a: _existing_scope($childScope4)
				});
				return 0;
			}
		}, $scope3_id, "b", 1, $wg__depth, 1, 0, 0, ["a9"], $scope3_reason, 3);
		$cg__depth && _patch_write($scope3_id, "wf", b, 1);
		$fg__a && $cg__depth && _patch_render($scope3_id, "a7", "e");
		_scope($scope3_id, {
			e: $wi__depth && a,
			f: (_unfilled_if($scope3_reason, 3) || _unfilled_if($scope3_reason, 2)) && b,
			_: $wi__depth && _scope_with_id($scope0_id),
			a: _existing_scope($childScope3)
		}) || $fg__a && $cg__depth && _patch_write($scope3_id, "xe", a, !_server_guard($scope3_reason, 1));
	}, $scope0_id) };
	_set_scope_reason(38 | _updates_from($scope0_reason, 1) << 3);
	const $childScope5 = _peek_scope_id($scope0_id, "a", 4);
	Wrapper.content({
		a: input.a,
		b: n,
		depth: 2
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a11");
	$fg__input_label && _patch_subscribers($scope0_id, "a12", "e");
	_scope($scope0_id, {
		e: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope5)
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);
