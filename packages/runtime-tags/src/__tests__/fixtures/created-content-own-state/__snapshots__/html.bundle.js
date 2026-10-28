// tags/wrap.marko
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_html("</section>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_id = _write_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 1), $wi__input_show__OR__input_id = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.show,
		content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			let c = 0;
			_html(`<button>${_text_resume($scope1_id, "b", c)} ${_text_resume($scope1_id, "c", input.id, _write_guard($scope0_reason, 2) * 2)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_subscribe($wi__input_id && $input_id__closures, _scope($scope1_id, {
				d: c,
				_: $wi__input_show__OR__input_id && _scope_with_id($scope0_id)
			}), "a1");
		}, $scope0_id)
	});
	$wi__input_show__OR__input_id && _scope($scope0_id, {
		e: $wi__input_show && input.id,
		f: $wi__input_id && $input_id__closures,
		a: $wi__input_show && _existing_scope($childScope)
	});
}, 1);
