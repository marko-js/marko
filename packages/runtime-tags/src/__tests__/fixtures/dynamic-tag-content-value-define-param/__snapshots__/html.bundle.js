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
	const $scope0_reason = _scope_reason(), $wi__input_on = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 1), $wg__input_note = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_on__closures = /* @__PURE__ */ new Set();
	const Outer = { content: _content("a2", ({ v }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__v__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wg__v = _write_guard($scope1_reason, 0), $wi__v = _write_if($scope1_reason, 0);
		const Label = { content: _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_resume($scope2_id, "a", v, $wg__v)}</em>`);
			($wi__input_on || $wi__v) && _subscribe($wi__v && $Outer_content__v__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__v);
			$wg__v || ($wi__input_on || $wi__v) && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ d: v }]) };
		_dynamic_tag($scope1_id, "a", input.on ? card_default : "div", { content: Label }, 0, 0, $wg__input_on);
		($wi__input_on || $wi__v) && _subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			d: $wi__input_on && v,
			e: $wi__input_on && Label,
			_: $wi__input_on && _scope_with_id($scope0_id),
			g: $wi__v && $Outer_content__v__closures
		}), "a3", $wg__input_on);
		$wg__input_on || ($wi__input_on || $wi__v) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_note << 1);
	const $childScope = _peek_scope_id();
	Outer.content({ v: input.note });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		f: $wi__input_on && $input_on__closures,
		a: _write_if($scope0_reason, 2) && _existing_scope($childScope)
	});
}, 1);
