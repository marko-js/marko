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
	a6: "a6;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_note = _client_guard($scope0_reason, 4), $cg__input_v = _client_guard($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 3), $wi__input_v__OR__input_on__OR__input_note = _write_if($scope0_reason, 1), $ui__input_on2 = _unfilled_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_await($scope0_id, "a", input.v, (v) => {
		const $scope1_id = _scope_id(), $ui__input_on = _unfilled_if($scope0_reason, 3);
		const $await_content__v__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.on ? card_default : "div", {}, 2, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_mark($scope2_id, "a", input.note, 1, $scope0_reason, 4)} ${_text_mark($scope2_id, "b", v, 2, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a1", $cg__input_note);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a2", $cg__input_v);
			_subscribe(_unfilled_if($scope0_reason, 2) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_v__OR__input_on__OR__input_note && _scope_with_id($scope1_id) }), $cg__input_note && "a1"), $cg__input_v && "a2");
		}, $scope1_id, ($scope) => $scope0_page ? [{ f: input.note }, {
			c: v,
			_: $scope($scope0_id)
		}] : []), 0, $wg__input_on, $scope0_reason, 3, 0, void 0, 0, 0, "a0");
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a3", $cg__input_on);
		$wi__input_v__OR__input_on__OR__input_note && _subscribe($ui__input_on && $input_on__closures, _scope($scope1_id, {
			c: ($ui__input_on || _unfilled_if($scope0_reason, 2)) && v,
			i: _write_if($scope0_reason, 2) && $await_content__v__closures
		}), $cg__input_on && "a3", $wg__input_on);
		_filled_guard($scope0_reason, 2) && (_client_branch_if("a0", $scope1_id) || $ui__input_on) && _patch_write($scope1_id, "xc", v, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope1_id, "a4", "c");
		$wg__input_on || $wi__input_v__OR__input_on__OR__input_note && _resume_branch($scope1_id);
	}, 1, "a5", _unfilled_if($scope0_reason, 2), 1, 1);
	_html("</main>");
	_scope($scope0_id, {
		f: ($ui__input_on2 || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures,
		g: _write_if($scope0_reason, 3) && $ui__input_on2 && $input_on__closures
	}) || _filled_guard($scope0_reason, 4) && (_client_branch_if("a0", $scope0_id) || $ui__input_on2) && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 4)) && _patch_subscribers($scope0_id, "a7", "f");
}, 1);
