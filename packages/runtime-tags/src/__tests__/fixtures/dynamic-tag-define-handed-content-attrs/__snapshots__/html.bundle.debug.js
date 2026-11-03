// tags/one.marko
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 1), $wg__input_t = _write_guard($scope0_reason, 2), $wi__input_t = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const Wrap = { content: _content("__tests__/tags/one.marko_1*content", ({ t }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__t = _write_guard($scope1_reason, 0), $wi__t = _write_if($scope1_reason, 0);
		_dynamic_tag($scope1_id, "#text/0", input.content, { title: t }, 0, 0, $wg__input_content || $wg__t);
		($wi__input_content || $wi__t) && _subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, {
			t: $wi__input_content && t,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/one.marko", "1:2", { t: "1:16" }), "__tests__/tags/one.marko_1_input_content#0:3/subscribe", $wg__input_content || $wg__t);
		$wg__input_content || $wg__t || ($wi__input_content || $wi__t) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_t << 1);
	const $childScope = _peek_scope_id();
	Wrap.content({ t: input.t });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_content: $wi__input_t && input.content,
		"ClosureScopes:input_content/5": $wi__input_content && $input_content__closures,
		"#childScope/0": $wi__input_t && _existing_scope($childScope)
	}, "__tests__/tags/one.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let z = 0;
	_html(`<button class=z>z</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason($wg__input_y << 1 | $wg__input_y << 5);
	const $childScope = _peek_scope_id();
	one_default({
		t: input.y,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("A");
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		z,
		"#childScope/1": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { z: "1:6" });
}, 1);
