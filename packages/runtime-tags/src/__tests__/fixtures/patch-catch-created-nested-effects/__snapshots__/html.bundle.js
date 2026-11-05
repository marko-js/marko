// tags/wrap.marko
const $setup = [[], []];
_shells({ b: "b;D%;<div><!></div>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a4: "a4;D ;<p> </p>",
	a5: "a5 !a11",
	a6: `a6${_shell_marker([[], ["a14"]], ["d>", $setup])}`,
	a: "a;b%;<!><!><!>",
	a3: "a3 !a0;D ;<i> </i>",
	a7: "a7 !a8;D ;<u> </u>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 2), $wi__input_v = _write_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 3), $cg__input_items = _client_guard($scope0_reason, 4), $sg__input_items = _server_guard($scope0_reason, 4), $cg__input_msg = _client_guard($scope0_reason, 6), $cg__input_fail = _client_guard($scope0_reason, 5), $fg__input_v = _filled_guard($scope0_reason, 2), $fg__input_show = _filled_guard($scope0_reason, 3), $fg__input_items = _filled_guard($scope0_reason, 4), $wi__input_items = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_v__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $input_items__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html(`<p>${_text_mark($scope5_id, "a", input.fail ? boom(input.msg) : input.msg, 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope5_id, "a18");
		_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope5_id, "a19");
		_patch_render($scope5_id, "a20", [_filled_guard($scope0_reason, 5) && ">g", _filled_guard($scope0_reason, 6) && ">h"], $scope0_reason, 1);
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_fail__closures, _scope($scope5_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_fail && "a18"), $cg__input_msg && "a19");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $catch_content__w__closures = /* @__PURE__ */ new Set();
		const w = input.v * 10;
		_html(`<b>${_text_mark($scope1_id, "a", err.message, 1, 4, 0)}</b>`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<i>${_text_mark($scope2_id, "a", w, 1, $scope0_reason, 2)}</i>`);
				_script($scope2_id, "a0");
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a1", $cg__input_v);
				$cg__input_v && _patch_render($scope2_id, "a2");
				_subscribe($wi__input_v && $input_v__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ci: $wi__input_v && 1
				}), $cg__input_v && "a1");
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["a3"], $scope0_reason, 3);
		_for_of(input.items, (x) => {
			const $scope3_id = _scope_id();
			_filled_guard($scope0_reason, 4) && _patch_write($scope3_id, "xc", x, !$sg__input_items);
			_html(`<u>${_text_mark($scope3_id, "a", x, 1, $scope0_reason, 4)}</u>`);
			_script($scope3_id, "a8");
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "a9");
			_patch_render($scope3_id, "a10", [_filled_guard($scope0_reason, 2) && ">>d", _filled_guard($scope0_reason, 4) && "c"], $scope0_reason, 0);
			_subscribe($wi__input_v && $input_v__closures, _scope($scope3_id, {
				c: x,
				_: _scope_with_id($scope1_id),
				Ci: $wi__input_v && 2
			}), $cg__input_v && "a9");
		}, 0, $scope1_id, "c", 1, 1, 1, 0, 0, "a7", $scope0_reason, 4);
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "d", 0);
		wrap_default({ content: _content("a5", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html(`<s>${_text_mark($scope4_id, "a", w, 1, $scope0_reason, 2)}</s>`);
			_script($scope4_id, "a11");
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope4_id, "a12", $cg__input_v);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope4_id, "a13", $cg__input_v);
			_subscribe(_unfilled_if($scope0_reason, 2) && $catch_content__w__closures, _subscribe($wi__input_v && $input_v__closures, _scope($scope4_id, {
				_: _scope_with_id($scope1_id),
				Ci: $wi__input_v && 3
			})));
		}, $scope1_id, 0) });
		_patch_child_end();
		_script($scope1_id, "a14");
		$cg__input_show && _patch_write($scope1_id, "wh", w, 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a15", $cg__input_v);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a16", $cg__input_show);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a17", $cg__input_items);
		_subscribe($wi__input_items && $input_items__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_show__closures, _subscribe($wi__input_v && $input_v__closures, _scope($scope1_id, {
			h: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && w,
			_: _scope_with_id($scope0_id),
			n: $wi__input_v && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && $catch_content__w__closures,
			d: _existing_scope($childScope)
		}), $cg__input_v && "a15"), $cg__input_show && "a16"), $cg__input_items && "a17");
	}, 0, "a6", "a4", 1, 1, 1);
	$fg__input_v && _patch_subscribers($scope0_id, "a21", "d");
	$fg__input_show && _patch_subscribers($scope0_id, "a22", "e");
	$fg__input_items && _patch_subscribers($scope0_id, "a23", "f");
	_scope($scope0_id, {
		d: input.v,
		e: input.show,
		f: input.items,
		g: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 1)) && input.fail,
		h: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 1)) && input.msg,
		i: $wi__input_v && $input_v__closures,
		j: _write_if($scope0_reason, 3) && $input_show__closures,
		k: $wi__input_items && $input_items__closures,
		l: _write_if($scope0_reason, 5) && (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 1)) && $input_fail__closures,
		m: _write_if($scope0_reason, 6) && (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 1)) && $input_msg__closures
	}) || ($fg__input_v && _patch_write($scope0_id, "xd", input.v, !_server_guard($scope0_reason, 2)), $fg__input_show && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 3)), $fg__input_items && _patch_write($scope0_id, "xf", input.items, !$sg__input_items), _filled_guard($scope0_reason, 5) && $cg__input_msg && _patch_write($scope0_id, "xg", input.fail, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_fail && _patch_write($scope0_id, "xh", input.msg, !_server_guard($scope0_reason, 6)));
}, 1);
