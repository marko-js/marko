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
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 3), $wi__input_note__OR__input_on = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = /* @__PURE__ */ new Set();
			const x = input.note + "!";
			_html(`<div></div>${_el_resume($scope1_id, "a")}`);
			_dynamic_tag($scope1_id, "b", input.on ? card_default : "div", {}, _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_resume($scope2_id, "a", x, $wg__input_note)}</em>`);
				$wi__input_note__OR__input_on && _subscribe($wi__input_note && $if_content__x__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_note);
				$wg__input_note || $wi__input_note__OR__input_on && _resume_branch($scope2_id);
			}, $scope1_id), 0, _write_guard($scope0_reason, 4));
			_script($scope1_id, "a2");
			_scope($scope1_id, {
				c: x,
				_: $wi__input_note__OR__input_on && _scope_with_id($scope0_id),
				i: $wi__input_note && $if_content__x__closures
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show, $wg__input_show, "</main>");
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: input.note,
		f: input.on
	});
}, 1);
