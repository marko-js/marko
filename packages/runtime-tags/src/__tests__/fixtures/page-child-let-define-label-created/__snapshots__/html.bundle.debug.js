// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 0), $wi__input_more = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let value = input.data;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", value.content, {}, 0, 0, 0);
			_html("</section>");
			$wi__input_more && _scope($scope1_id, {}, "__tests__/tags/outer.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_more, $wg__input_more, 0, 0, 1);
	$wi__input_more && _scope($scope0_id, { value_content: value?.content }, "__tests__/tags/outer.marko", 0, { value_content: ["value.content", "1:6"] });
	$wg__input_more || $wi__input_more && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 3), $wi__input_label__OR__input_show__OR__input_more = _write_if($scope0_reason, 2), $wg__input_more = _write_guard($scope0_reason, 5), $wi__input_more = _write_if($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_more = _write_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
		$wi__input_label__OR__input_show__OR__input_more && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_label__OR__input_show__OR__input_more && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__input_more << 1);
			const $childScope = _peek_scope_id();
			outer_default({
				data: { content: Body.content },
				more: input.more
			});
			$wi__input_show__OR__input_more && _scope($scope2_id, {
				_: $wi__input_more && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_more && _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_show);
	$wi__input_label__OR__input_show__OR__input_more && _scope($scope0_id, {
		input_label: $wi__input_show__OR__input_more && input.label,
		input_more: $wi__input_show && input.more,
		Body_content: $wi__input_show && Body?.content,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_more: ["input.more"],
		Body_content: ["Body.content", "1:9"]
	});
}, 1);
