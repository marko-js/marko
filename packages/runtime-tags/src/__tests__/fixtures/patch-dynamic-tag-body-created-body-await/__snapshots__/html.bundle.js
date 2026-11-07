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
	a1: "a1;D%c%;<em><!> <!></em>",
	a2: "a2;D%c%;<em><!> <!></em>",
	a3: "a3",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_on__OR__input_w__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 2), $fg__input_w = _filled_guard($scope0_reason, 3), $fg__input_note = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_w__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, 2, _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.w, (w) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_mark($scope2_id, "a", input.note, 1, $scope0_reason, 4)} ${_text_mark($scope2_id, "b", w, 2, $scope0_reason, 3)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a0", _client_guard($scope0_reason, 4));
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, {}));
		}, 1, "a1", _unfilled_if($scope0_reason, 3));
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a4", 1);
		$wi__input_on__OR__input_w__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wi__input_on__OR__input_w__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{
		f: input.note,
		e: input.w
	}] : []), 0, $wg__input_on, $scope0_reason, 2, 0, void 0, 0, 0, "a3");
	_html("</main>");
	$fg__input_w && (_client_branch_if("a3", $scope0_id) || $cg__input_on) && _patch_subscribers($scope0_id, "a5", "e");
	$fg__input_note && (_client_branch_if("a3", $scope0_id) || $cg__input_on) && _patch_subscribers($scope0_id, "a6", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.w,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures,
		g: _write_if($scope0_reason, 3) && $input_w__closures
	}) || ($fg__input_w && (_client_branch_if("a3", $scope0_id) || $cg__input_on) && _patch_write($scope0_id, "xe", input.w, !_server_guard($scope0_reason, 3)), $fg__input_note && (_client_branch_if("a3", $scope0_id) || $cg__input_on) && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
