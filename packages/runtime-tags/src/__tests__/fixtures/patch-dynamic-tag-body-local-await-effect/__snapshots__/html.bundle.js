// tags/card.marko
_shells({ b: "b !b1; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a0: "a0",
	a5: "a5;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7; b%;<div></div><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_note = _client_guard($scope0_reason, 5), $cg__input_v = _client_guard($scope0_reason, 6), $wg__input_on = _write_guard($scope0_reason, 7), $cg__input_on = _client_guard($scope0_reason, 7), $wi__input_show__OR__input_note__OR__input_v__OR__input_on = _write_if($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 4), $sg__input_note = _server_guard($scope0_reason, 5), $sg__input_v = _server_guard($scope0_reason, 6), $fg__input_note = _filled_guard($scope0_reason, 5), $fg__input_v = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4), $fg__input_on = _filled_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = /* @__PURE__ */ new Set();
			const x = input.note + "!";
			_filled_guard($scope0_reason, 5) && _patch_write($scope1_id, "xc", x, !$sg__input_note);
			_html(`<div></div>${_el_mark($scope1_id, "a")}`);
			_await($scope1_id, "b", input.v, (v) => {
				const $scope2_id = _scope_id();
				const $await_content__v__closures = /* @__PURE__ */ new Set();
				_dynamic_tag($scope2_id, "a", input.on ? card_default : "div", {}, 2, _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<em>${_text_mark($scope3_id, "a", x, 1, $scope0_reason, 5)} ${_text_mark($scope3_id, "b", v, 2, $scope0_reason, 6)}</em>`);
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope3_id, "a1", $cg__input_note);
					_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope3_id, "a2", $cg__input_v);
					_subscribe(_unfilled_if($scope0_reason, 6) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $if_content__x__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope2_id) }), $cg__input_note && "a1"), $cg__input_v && "a2");
				}, $scope2_id, ($scope) => $scope0_page ? [{ c: v }] : []), 0, $wg__input_on, $scope0_reason, 7, 0, void 0, 0, 0, "a0");
				_filled_guard($scope0_reason, 6) && _patch_subscribers($scope2_id, "a3", "c");
				_unfilled_if($scope0_reason, 7) && _patch_subscribe($scope2_id, "a4", $cg__input_on);
				$wi__input_show__OR__input_note__OR__input_v__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 7) && $input_on__closures, _scope($scope2_id, {
					c: (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 6)) && v,
					l: _write_if($scope0_reason, 6) && $await_content__v__closures
				}), $cg__input_on && "a4", $wg__input_on);
				_filled_guard($scope0_reason, 6) && (_client_branch_if("a0", $scope2_id) || _unfilled_if($scope0_reason, 7)) && _patch_write($scope2_id, "xc", v, !$sg__input_v);
				$wg__input_on || $wi__input_show__OR__input_note__OR__input_v__OR__input_on && _resume_branch($scope2_id);
			}, 1, "a5", _unfilled_if($scope0_reason, 6), 0, 1);
			_script($scope1_id, "a8", 1, _filled_guard($scope0_reason, 5), "c");
			_filled_guard($scope0_reason, 5) && _patch_subscribers($scope1_id, "a9", "c");
			$cg__input_note && _patch_render($scope1_id, "a10");
			$cg__input_v && _patch_render($scope1_id, "a11");
			_scope($scope1_id, {
				c: x,
				_: $wi__input_show__OR__input_note__OR__input_v__OR__input_on && _scope_with_id($scope0_id),
				k: _write_if($scope0_reason, 5) && $if_content__x__closures
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a7"], $scope0_reason, 4);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_note && $cg__input_show && _patch_render($scope0_id, "a10", "e");
	$fg__input_v && $cg__input_show && _patch_render($scope0_id, "a11", "f");
	$fg__input_on && $cg__input_show && _patch_subscribers($scope0_id, "a12", "g");
	_scope($scope0_id, {
		e: $wi__input_show && input.note,
		f: $wi__input_show && input.v,
		g: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 7)) && input.on,
		j: _write_if($scope0_reason, 7) && (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 4)) && $input_on__closures
	}) || ($fg__input_note && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "xe", input.note, !$sg__input_note), $fg__input_v && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "xf", input.v, !$sg__input_v), $fg__input_on && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "xg", input.on, !_server_guard($scope0_reason, 7)));
}, 1);
