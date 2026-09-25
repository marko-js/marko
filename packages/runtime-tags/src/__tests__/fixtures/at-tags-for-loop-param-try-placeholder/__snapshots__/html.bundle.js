// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $placeholder;
	forOf(["body"], (label) => {
		$placeholder = attrTags($placeholder, { content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html(`loading ${_escape(label)}`);
		}, $scope0_id, () => [{ 1: label }]) });
	});
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("done", 1), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), { placeholder: $placeholder });
}, 1);
