// tags/card.marko
_shells({
	b1: "b1;b%;<!><!><!>",
	b2: "b2;b%;<!><!><!>",
	b: "b !b3; b%;<button class=toggle>toggle</button><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_content = _client_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	let n = 1;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_await($scope0_id, "b", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (x) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
				$cg__input_content && _patch_render($scope2_id, "b0");
				_subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, {}), $cg__input_content && "b0", $wg__input_content);
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, {});
	}, 1, "b1", 1, 1);
	_script($scope0_id, "b3");
	$fg__input_content && _patch_subscribers($scope0_id, "b4", "e");
	_patch_fill($scope0_id, "vb5", n, 1);
	_scope($scope0_id, {
		e: input.content,
		f: n,
		g: $wi__input_content && $input_content__closures
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a0: "a0",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1), $fg__input_note = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a1", _client_guard($scope0_reason, 2));
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []), 0, $wg__input_on, $scope0_reason, 1, 0, void 0, 0, 0, "a0");
	_html("</main>");
	$fg__input_note && _patch_subscribers($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures
	}) || $fg__input_note && (_client_branch_if("a0", $scope0_id) || _client_guard($scope0_reason, 1)) && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 2));
}, 1);
