// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (n < 2) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/wrap.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/tags/wrap.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		n
	}, "__tests__/tags/wrap.marko", 0, {
		input_content: ["input.content"],
		n: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let view = wrap_default;
	_dynamic_tag($scope0_id, "#text/0", view, {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, $wg__input_w)}</p>`);
		$wi__input_w && _subscribe($input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_input_w#0:3/subscribe", $wg__input_w);
		$wg__input_w || $wi__input_w && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_w: input.w }]), 0, 0);
	$wi__input_w && _scope($scope0_id, { "ClosureScopes:input_w/5": $input_w__closures }, "__tests__/template.marko", 0);
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
