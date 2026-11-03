// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", f())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/wrapper.marko
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope2 = _peek_scope_id();
	wrapper_default({
		show: input.show,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ fn: function() {
				return "f:" + input.label;
			} });
			$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: $wi__input_label && _existing_scope($childScope)
			}), "a0", _write_guard($scope0_reason, 2));
			_write_guard($scope0_reason, 2) || $wi__input_show__OR__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		e: $wi__input_show && input.label,
		f: $wi__input_label && $input_label__closures,
		a: $wi__input_show && _existing_scope($childScope2)
	});
}, 1);
