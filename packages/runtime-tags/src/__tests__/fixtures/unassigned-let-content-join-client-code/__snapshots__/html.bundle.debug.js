// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0), $wi__input_name = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_name__closures = new Set();
	let uid = input.id;
	wrap_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", uid + "-" + input.name, $wg__input_name)}</p>`);
		$wi__input_name && _subscribe($input_name__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_name#0:6/subscribe", $wg__input_name);
		$wg__input_name || $wi__input_name && _resume_branch($scope1_id);
	}, $scope0_id) });
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		uid: $wi__input_name && uid,
		n,
		"ClosureScopes:input_name/9": $wi__input_name && $input_name__closures
	}, "__tests__/template.marko", 0, {
		uid: "1:6",
		n: "3:6"
	});
}, 1);
