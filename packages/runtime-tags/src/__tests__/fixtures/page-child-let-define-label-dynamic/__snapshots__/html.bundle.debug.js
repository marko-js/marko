// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

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
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label__OR__input_more__OR__input_wrap = _write_if($scope0_reason, 1), $wg__input_more = _write_guard($scope0_reason, 3), $wg__input_wrap = _write_guard($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
		$wi__input_label__OR__input_more__OR__input_wrap && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_label#0:4/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_label__OR__input_more__OR__input_wrap && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_more << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		data: { content: Body.content },
		more: input.more
	});
	_dynamic_tag($scope0_id, "#text/1", input.wrap && wrap_default, { content: Body.content }, 0, 0, $wg__input_wrap);
	$wi__input_label__OR__input_more__OR__input_wrap && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 0) && input.label,
		Body_content: _write_if($scope0_reason, 4) && Body?.content,
		"ClosureScopes:input_label/10": $wi__input_label && $input_label__closures,
		"#childScope/0": _write_if($scope0_reason, 3) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Body_content: ["Body.content", "2:9"]
	});
}, 1);
