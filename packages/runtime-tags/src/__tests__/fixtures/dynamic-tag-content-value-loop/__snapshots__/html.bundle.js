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
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 2), $wg__input_note = _write_guard($scope0_reason, 3), $wi__input_items__OR__input_note__OR__input_on = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 4), $wi__input_on = _write_if($scope0_reason, 4), $wi__input_items = _write_if($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		const Label = { content: _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_resume($scope2_id, "a", item, $wg__input_items)} ${_text_resume($scope2_id, "b", input.note, $wg__input_note * 2)}</em>`);
			$wi__input_items__OR__input_note__OR__input_on && _subscribe($wi__input_items && $for_content__item__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_items || $wg__input_note), "a2", $wg__input_items || $wg__input_note);
			$wg__input_items || $wg__input_note || $wi__input_items__OR__input_note__OR__input_on && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ e: input.note }, {
			c: item,
			_: $scope($scope0_id)
		}]) };
		_dynamic_tag($scope1_id, "a", input.on ? card_default : "div", { content: Label }, 0, 0, $wg__input_on);
		$wi__input_items__OR__input_note__OR__input_on && _scope($scope1_id, {
			c: $wi__input_on && item,
			d: $wi__input_on && Label,
			_: _scope_with_id($scope0_id),
			i: $wi__input_items && $for_content__item__closures
		});
	}, 0, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_items);
	$wi__input_items__OR__input_note__OR__input_on && _scope($scope0_id, {
		e: _write_if($scope0_reason, 0) && input.note,
		f: $wi__input_items && input.on,
		g: $wi__input_note && $input_note__closures
	});
}, 1);
