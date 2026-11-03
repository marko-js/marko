// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 3), $wg__input_note = _write_guard($scope0_reason, 4), $wi__input_on__OR__input_w__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 4), $wi__input_w = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_w__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.w, (w) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_resume($scope2_id, "a", input.note, $wg__input_note)} ${_text_resume($scope2_id, "b", w, $wg__input_w * 2)}</em>`);
			$wi__input_on__OR__input_w__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, {}), "a0", $wg__input_w || $wg__input_note);
			$wg__input_w || $wg__input_note || $wi__input_on__OR__input_w__OR__input_note && _resume_branch($scope2_id);
		}, _write_guard($scope0_reason, 1));
		$wi__input_on__OR__input_w__OR__input_note && _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", 0);
		$wi__input_on__OR__input_w__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{
		f: input.note,
		e: input.w
	}]), 0, $wg__input_on);
	_html("</main>");
	$wi__input_on__OR__input_w__OR__input_note && _scope($scope0_id, {
		e: $wi__input_on && input.w,
		f: $wi__input_on && input.note,
		h: $wi__input_note && $input_note__closures,
		g: $wi__input_w && $input_w__closures
	});
}, 1);
