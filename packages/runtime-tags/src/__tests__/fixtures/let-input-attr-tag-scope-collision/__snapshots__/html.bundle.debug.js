// tags/child-tag/index.marko
var child_tag_default = _template("__tests__/tags/child-tag/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_footer = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.footer, {}, 0, 0, $sg__input_footer);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child-tag/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_submitLabel = _serialize_guard($scope0_reason, 4), $sg__input_label = _serialize_guard($scope0_reason, 5), $si__input_submitLabel__OR__input_label = _serialize_if($scope0_reason, 0), $si__input_submitLabel = _serialize_if($scope0_reason, 4), $si__input_label = _serialize_if($scope0_reason, 5), $si__input_open__OR__input_openChange__OR__input_submitLabel__OR__input_label = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_submitLabel__closures = new Set();
	const $input_label__closures = new Set();
	let open = input.open;
	child_tag_default({ footer: attrTag({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>${_text_resume($scope1_id, "#text/0", input.submitLabel || "OK", $sg__input_submitLabel)}</button><span>${_text_resume($scope1_id, "#text/1", input.label, $sg__input_label)}</span>`);
		$si__input_submitLabel__OR__input_label && _subscribe($si__input_label && $input_label__closures, _subscribe($si__input_submitLabel && $input_submitLabel__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_1_input_submitLabel#6/subscribe", $sg__input_submitLabel || $sg__input_label), "__tests__/template.marko_1_input_label#7/subscribe", $sg__input_submitLabel || $sg__input_label);
		$sg__input_submitLabel || $sg__input_label || $si__input_submitLabel__OR__input_label && _resume_branch($scope1_id);
	}, $scope0_id) }) });
	$si__input_open__OR__input_openChange__OR__input_submitLabel__OR__input_label && _scope($scope0_id, {
		input_open: _serialize_if($scope0_reason, 3) && input.open,
		input_openChange: _serialize_if($scope0_reason, 2) && input.openChange,
		"ClosureScopes:input_submitLabel/10": $si__input_submitLabel && $input_submitLabel__closures,
		"ClosureScopes:input_label/11": $si__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_openChange: ["input.openChange"]
	});
	$si__input_open__OR__input_openChange__OR__input_submitLabel__OR__input_label && _resume_branch($scope0_id);
}, 1);
