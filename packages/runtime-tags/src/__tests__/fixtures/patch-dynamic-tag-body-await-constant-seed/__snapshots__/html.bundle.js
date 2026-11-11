// tags/keeper.marko
_shells({ c: "c !c1; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "c0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "c1");
	$fg__input_content && _patch_render($scope0_id, "c0", "e");
	_patch_fill($scope0_id, "vc2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// tags/card.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b0: "b0",
	b5: "b5;b%;<!><!><!>",
	b6: "b6;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_note = _client_guard($scope0_reason, 4), $cg__input_v = _client_guard($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 3), $wi__input_v__OR__input_on__OR__input_note = _write_if($scope0_reason, 1), $ui__input_on2 = _unfilled_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.v, (v) => {
		const $scope1_id = _scope_id(), $ui__input_on = _unfilled_if($scope0_reason, 3);
		const $await_content__v__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", input.on ? keeper_default : "div", {}, 2, _content_resume("b0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_mark($scope2_id, "a", input.note, 1, $scope0_reason, 4)} ${_text_mark($scope2_id, "b", v, 2, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "b1", $cg__input_note);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b2", $cg__input_v);
			_subscribe(_unfilled_if($scope0_reason, 2) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_v__OR__input_on__OR__input_note && _scope_with_id($scope1_id) }), $cg__input_note && "b1"), $cg__input_v && "b2");
		}, $scope1_id, ($scope) => $scope0_page ? [{ f: input.note }, {
			c: v,
			_: $scope($scope0_id)
		}] : []), 0, $wg__input_on, $scope0_reason, 3, 0, void 0, 0, 0, "b0");
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "b3", $cg__input_on);
		$wi__input_v__OR__input_on__OR__input_note && _subscribe($ui__input_on && $input_on__closures, _scope($scope1_id, {
			c: ($ui__input_on || _unfilled_if($scope0_reason, 2)) && v,
			i: _write_if($scope0_reason, 2) && $await_content__v__closures
		}), $cg__input_on && "b3", $wg__input_on);
		_filled_guard($scope0_reason, 2) && (_client_branch_if("b0", $scope1_id) || $ui__input_on) && _patch_write($scope1_id, "xc", v, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope1_id, "b4", "c");
		$wg__input_on || $wi__input_v__OR__input_on__OR__input_note && _resume_branch($scope1_id);
	}, 1, "b5", _unfilled_if($scope0_reason, 2), 1, 1);
	_scope($scope0_id, {
		f: ($ui__input_on2 || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures,
		g: _write_if($scope0_reason, 3) && $ui__input_on2 && $input_on__closures
	}) || _filled_guard($scope0_reason, 4) && (_client_branch_if("b0", $scope0_id) || $ui__input_on2) && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 4)) && _patch_subscribers($scope0_id, "b7", "f");
});

// template.marko
_shells({
	a: "a; ;<main></main>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_on = _updates_from($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 2), $fg__input_v = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_on << 1 | _updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 3) << 5 | $uf__input_on << 7);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({
				note: "n",
				on: input.on,
				v: input.v
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_on && $cg__input_show && _patch_render($scope0_id, "a0", "e");
	$fg__input_v && $cg__input_show && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		e: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.on,
		f: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.v
	}) || ($fg__input_on && $ui__input_show && _patch_write($scope0_id, "xe", input.on, !_server_guard($scope0_reason, 2)), $fg__input_v && $ui__input_show && _patch_write($scope0_id, "xf", input.v, !_server_guard($scope0_reason, 3)));
}, 1);
