// tags/card.marko
_shells({
	b2: "b2 b4;b%;<!><!><!>",
	b3: "b3",
	b: "b !b5; b%;<button id=toggle>fail</button><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $fail__closures = /* @__PURE__ */ new Set();
	let fail = false;
	_html(`<button id=toggle>fail</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_if(() => {}, $scope3_id, "a");
		_subscribe($fail__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "b4");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<i>${_text_mark($scope1_id, "a", err.message, 1, 4, 0)}</i>`);
		_if(() => {
			if (err) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "b0", $cg__input_content);
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_content && "b0", $wg__input_content);
				$wg__input_content || _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope1_reason, 0), 1, 0, 0, ["b1"]);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, "b3", "b2", 1, 1);
	_script($scope0_id, "b5");
	_patch_fill($scope0_id, "vb7", fail, 1);
	_scope($scope0_id, {
		e: input.content,
		g: _write_if($scope0_reason, 0) && $input_content__closures,
		h: $fail__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "b6", "e");
});

// template.marko
_shells({
	a0: "a0",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_note = _client_guard($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 1), $ui__input_on = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a1", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_note && "a1");
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []), 0, $wg__input_on, $scope0_reason, 1, 0, void 0, 0, 0, "a0");
	_html("</main>");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && ($ui__input_on || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures
	}) || _filled_guard($scope0_reason, 2) && (_client_branch_if("a0", $scope0_id) || $ui__input_on) && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a2", "e");
}, 1);
