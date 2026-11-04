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
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $wi__input_note__OR__input_on = _write_if($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const Tree = { content: _content("a0", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__n = _write_guard($scope1_reason, 0), $wi__n = _write_if($scope1_reason, 0);
		_html(`<em>${_text_resume($scope1_id, "a", input.note, $wg__input_note)}</em>`);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__n << 1);
				const $childScope = _peek_scope_id();
				Tree.content({ n: n - 1 });
				($wi__input_on || $wi__n) && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: $wi__n && _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "b", $wg__n, $wg__n);
		($wi__input_note__OR__input_on || $wi__n) && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_note || $wg__n);
		$wg__input_note || $wg__n || ($wi__input_note__OR__input_on || $wi__n) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, _content_resume("a2", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		Tree.content({ n: 1 });
		$wi__input_on && _scope($scope3_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id, ($scope) => [{ d: input.note }]), 0, $wg__input_on);
	_scope($scope0_id, {
		d: input.note,
		f: $wi__input_note && $input_note__closures
	});
}, 1);
