// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 2), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const A = { content: _content_resume("a0", ({ item }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__item = _write_guard($scope2_reason, 0);
		_html("<p>");
		_dynamic_tag($scope2_id, "a", item, {}, 0, 0, $wg__item);
		_html("</p>");
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	const B = { content: _content_resume("a1", ({ item }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__item2 = _write_guard($scope3_reason, 0);
		_html("<div>");
		_dynamic_tag($scope3_id, "a", item, {}, 0, 0, $wg__item2);
		_html("</div>");
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.on ? A : B, { item: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", $wg__input_note);
	}, $scope0_id, ($scope) => [{ e: input.note }]) }) }, 0, 0, $wg__input_on);
	$wi__input_on__OR__input_note && _scope($scope0_id, {
		e: $wi__input_on && input.note,
		f: $wi__input_on && A,
		g: $wi__input_on && B,
		i: $wi__input_note && $input_note__closures
	});
}, 1);
