// tags/wrapper.marko
function boom() {
	throw new Error("SHOWN_message");
}
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wg__input_fail = _write_guard($scope0_reason, 2), $wi__input_content = _write_if($scope0_reason, 1), $wi__input_content__OR__input_fail = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const $input_fail__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.fail ? boom() : "ok", $wg__input_fail)}</p>`);
		_dynamic_tag($scope2_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_content__OR__input_fail && _subscribe($wi__input_fail && $input_fail__closures, _subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_content/5": $wi__input_content && 1
		}, "__tests__/tags/wrapper.marko", "4:2"), "__tests__/tags/wrapper.marko_2_input_content#0:3/subscribe", $wg__input_content || $wg__input_fail), "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe", $wg__input_content || $wg__input_fail);
		$wg__input_content || $wg__input_fail || $wi__input_content__OR__input_fail && _resume_branch($scope2_id);
	}, void 0, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
		_subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/wrapper.marko", "7:4"), "__tests__/tags/wrapper.marko_1_input_content#0:3/subscribe", $wg__input_content);
		$wg__input_content || _resume_branch($scope1_id);
	}, void 0, "__tests__/tags/wrapper.marko_1*content");
	_scope($scope0_id, {
		input_content: input.content,
		"ClosureScopes:input_content/5": $wi__input_content && $input_content__closures,
		"ClosureScopes:input_fail/6": $wi__input_fail && $input_fail__closures
	}, "__tests__/tags/wrapper.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let alt = false;
	_html(`<button>${_text_resume($scope0_id, "#text/1", alt ? "A" : "B")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const A = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>A ${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label * 2)}</em>`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_label#0:5/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<i>B ${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label * 2)}</i>`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/10": $wi__input_label && 1
		}, "__tests__/template.marko", "4:2"), "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope2_id);
	}, $scope0_id) };
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	wrapper_default({
		fail: false,
		content: alt ? A : B
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		alt,
		A,
		B,
		"ClosureScopes:input_label/10": $wi__input_label && $input_label__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		alt: "1:6",
		A: "3:9",
		B: "4:9"
	});
}, 1);
