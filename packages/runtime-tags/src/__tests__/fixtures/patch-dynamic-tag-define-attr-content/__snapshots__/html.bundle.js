// template.marko
_shells({
	a1: "a1;D%;<div><!></div>",
	a0: "a0;D%;<p><!></p>",
	a3: "a3;D ;<em> </em>",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1), $ui__input_on = _unfilled_if($scope0_reason, 1), $fg__input_note = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const A = { content: _content_resume("a0", ({ item }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__item = _write_guard($scope2_reason, 0);
		_html("<p>");
		_dynamic_tag($scope2_id, "a", item, {}, 2, 0, 0, $wg__item);
		_html("</p>");
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	const B = { content: _content_resume("a1", ({ item }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__item2 = _write_guard($scope3_reason, 0);
		_html("<div>");
		_dynamic_tag($scope3_id, "a", item, {}, 10, 0, 0, $wg__item2);
		_html("</div>");
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.on ? A : B, { item: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a2", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_note && "a2");
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []) }) }, 17, 0, 0, $wg__input_on, $scope0_reason, 1, 0, void 0, 0, 0, "a3");
	$fg__input_note && _patch_subscribers($scope0_id, "a4", "e");
	_scope($scope0_id, {
		e: ($ui__input_on || _unfilled_if($scope0_reason, 2)) && input.note,
		f: $ui__input_on && A,
		g: $ui__input_on && B,
		i: _write_if($scope0_reason, 2) && $input_note__closures
	}) || $fg__input_note && (_client_branch_if("a3", $scope0_id) || $ui__input_on) && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 2));
}, 1);
