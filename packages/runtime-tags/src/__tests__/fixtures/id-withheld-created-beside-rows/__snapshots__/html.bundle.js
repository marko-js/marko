// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	card_default({ content: input.content });
	let rows = [input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "b")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope2 = _peek_scope_id();
		card_default({ content: entry });
		_scope($scope1_id, { a: _existing_scope($childScope2) });
	}, 0, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "c0");
	_scope($scope0_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<h1>Kept content beside rows</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({ content: _content("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const uid = _id();
				_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "c", input.label, $wg__input_label)}</label>`);
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
				$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id) });
			$wi__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: $wi__input_label && $input_label__closures
	});
}, 1);
