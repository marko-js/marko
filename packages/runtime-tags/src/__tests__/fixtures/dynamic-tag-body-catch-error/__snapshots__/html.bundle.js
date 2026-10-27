// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $fail__closures = /* @__PURE__ */ new Set();
	_html(`<button id=toggle>fail</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_if(() => {}, $scope3_id, "a");
		_subscribe($fail__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "b1");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err = _write_guard($scope1_reason, 0), $wg__err_message = _write_guard($scope1_reason, 1);
		const $scope1_id = _scope_id();
		_html(`<i>${_text_resume($scope1_id, "a", err.message, $wg__err_message)}</i>`);
		_if(() => {
			if (err) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, $wg__input_content);
				_subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", $wg__input_content);
				return 0;
			}
		}, $scope1_id, "b", $wg__err, $wg__err);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, "b2");
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		e: input.content,
		g: $wi__input_content && $input_content__closures,
		h: $fail__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ e: input.note }]), 0, $wg__input_on);
	_html("</main>");
	$wi__input_on__OR__input_note && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.note,
		f: $wi__input_note && $input_note__closures
	});
}, 1);
