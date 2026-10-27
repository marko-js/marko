// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	let n = 1;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (x) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, $wg__input_content);
				_subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, {}), "b0", $wg__input_content);
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, {});
	});
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		e: input.content,
		f: n,
		g: $wi__input_content && $input_content__closures
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
