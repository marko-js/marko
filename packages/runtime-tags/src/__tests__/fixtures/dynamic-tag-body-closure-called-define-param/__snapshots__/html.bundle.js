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
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 1), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const Note = { content: _content("a1", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
		_if(() => {
			if (input.on) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", label, $wg__label)} ${_text_resume($scope2_id, "b", input.note, $wg__input_note * 2)}</em>`);
				($wi__input_on__OR__input_note || _write_if($scope1_reason, 0)) && _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_note || $wg__label);
				return 0;
			}
		}, $scope1_id, "a", $wg__input_on || $wg__label, $wg__input_on, 0, 0, 1);
		$wi__input_on__OR__input_note && _subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			d: $wi__input_on && label,
			_: _scope_with_id($scope0_id)
		}), "a2", $wg__input_on);
		$wg__input_on || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, _content_resume("a3", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		Note.content({ label: "x" });
		$wi__input_on && _scope($scope3_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id, ($scope) => [{
		e: input.note,
		d: input.on
	}]), 0, $wg__input_on);
	$wi__input_on__OR__input_note && _scope($scope0_id, {
		e: $wi__input_on && input.note,
		g: $wi__input_note && $input_note__closures,
		f: $wi__input_on && $input_on__closures
	});
}, 1);
