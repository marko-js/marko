// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $placeholder;
	forOf(["body"], (label) => {
		$placeholder = attrTags($placeholder, { content: _content_resume("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`loading ${_escape(label)}`);
		}, $scope0_id, () => [{ label }]) });
	});
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("done", 1), (value) => {
			const $scope3_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), { placeholder: $placeholder });
}, 1);
