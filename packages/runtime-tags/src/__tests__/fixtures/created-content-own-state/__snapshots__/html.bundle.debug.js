// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_html("</section>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_id = _write_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 1), $wi__input_show__OR__input_id = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.show,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			let c = 0;
			_html(`<button>${_text_resume($scope1_id, "#text/1", c)} ${_text_resume($scope1_id, "#text/2", input.id, _write_guard($scope0_reason, 2) * 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_subscribe($wi__input_id && $input_id__closures, _scope($scope1_id, {
				c,
				_: $wi__input_show__OR__input_id && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { c: "2:8" }), "__tests__/template.marko_1_input_id#0:4/subscribe");
		}, $scope0_id)
	});
	$wi__input_show__OR__input_id && _scope($scope0_id, {
		input_id: $wi__input_show && input.id,
		"ClosureScopes:input_id/5": $wi__input_id && $input_id__closures,
		"#childScope/0": $wi__input_show && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_id: ["input.id"] });
}, 1);
