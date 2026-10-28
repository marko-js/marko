// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_dynamic_tag($scope0_id, "c", c, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label__OR__input_on = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	card_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const Inner = { content: _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const uid = _id();
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "c", input.label, $wg__input_label)}</label>`);
			$wi__input_label__OR__input_on && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_label);
			$wg__input_label || $wi__input_label__OR__input_on && _resume_branch($scope2_id);
		}, $scope1_id) };
		_dynamic_tag($scope1_id, "a", input.on ? Inner : null, {}, 0, 0, $wg__input_on);
		$wi__input_label__OR__input_on && _subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			b: $wi__input_on && Inner,
			_: _scope_with_id($scope0_id)
		}), "a2", $wg__input_on);
		$wg__input_on || $wi__input_label__OR__input_on && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_label__OR__input_on && _scope($scope0_id, {
		d: $wi__input_on && input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_on && $input_on__closures
	});
}, 1);
