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
_shells({
	b2: "b2;b%;<!><!><!>",
	b3: "b3;b%;<!><!><!>",
	b4: "b4;b%;<!><!><!>",
	b5: "b5;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p__OR__input_content = _write_guard($scope0_reason, 0), $cg__input_p__OR__input_content = _client_guard($scope0_reason, 0), $sg__input_p = _server_guard($scope0_reason, 1), $cg__input_p = _client_guard($scope0_reason, 1), $cg__input_content = _client_guard($scope0_reason, 2), $wi__input_p__OR__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.p, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__c__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 1) && $cg__input_content && _patch_write($scope1_id, "xc", x, !$sg__input_p);
		const c = x && input.content;
		_filled_guard($scope0_reason, 0) && $cg__input_p && _patch_write($scope1_id, "xe", c, !_server_guard($scope0_reason, 0));
		_await($scope1_id, "a", input.p, (y) => {
			const $scope2_id = _scope_id();
			_filled_guard($scope0_reason, 1) && $cg__input_p__OR__input_content && _patch_write($scope2_id, "xc", y, !$sg__input_p);
			_dynamic_tag($scope2_id, "a", y ? keeper_default : "div", { content: c }, 1, 0, 0, $wg__input_p__OR__input_content, $scope0_reason, 0);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "b0");
			_patch_render($scope2_id, "b1", [_filled_guard($scope0_reason, 0) && ">e", _filled_guard($scope0_reason, 1) && "c"], $scope0_reason, 0);
			$wi__input_p__OR__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $await_content__c__closures, _scope($scope2_id, { c: _unfilled_if($scope0_reason, 0) && y }), $cg__input_p__OR__input_content && "b0", $wg__input_p__OR__input_content);
		}, 1, "b2", _unfilled_if($scope0_reason, 1), 1, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b6", 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "b7");
		_patch_render($scope1_id, "b8", [_filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "c"], $scope0_reason, 0);
		$wi__input_p__OR__input_content && _subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_p__closures, _scope($scope1_id, {
			c: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && x,
			e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && c,
			h: _unfilled_if($scope0_reason, 0) && $await_content__c__closures
		}), $cg__input_p && "b6", 0), $cg__input_content && "b7", 0);
		$wi__input_p__OR__input_content && _resume_branch($scope1_id);
	}, 1, "b4", _unfilled_if($scope0_reason, 1), 1, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.content,
		f: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_p__closures,
		g: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_content__closures
	}) || _filled_guard($scope0_reason, 2) && $cg__input_p && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a0: "a0",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 4), $cg__input_on__OR__input_p = _client_guard($scope0_reason, 0), $fg__input_on = _filled_guard($scope0_reason, 2), $fg__input_p = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { p: input.on && input.p }, 1, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a1", _client_guard($scope0_reason, 4));
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ g: input.note }] : []), 0, $wg__input_on__OR__input_p, $scope0_reason, 0, 0, void 0, 0, 0, "a0");
	_html("</main>");
	$fg__input_note && (_client_branch_if("a0", $scope0_id) || $cg__input_on__OR__input_p) && _patch_subscribers($scope0_id, "a2", "g");
	_patch_render($scope0_id, "a3", [$fg__input_on && "d", $fg__input_p && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.on,
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.p,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures
	}) || ($fg__input_on && _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "xd", input.on, !_server_guard($scope0_reason, 2)), $fg__input_p && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.p, !_server_guard($scope0_reason, 3)), $fg__input_note && (_client_branch_if("a0", $scope0_id) || $cg__input_on__OR__input_p) && _patch_write($scope0_id, "xg", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
