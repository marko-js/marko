// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "b", clicks)}</button>${_el_resume($scope0_id, "a")}`);
	let $catch;
	forOf([`update ${clicks}`], (label) => {
		$catch = attrTags($catch, { content: _content_resume("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`caught ${_text_resume($scope2_id, "a", label, 2)}`);
			_scope($scope2_id, {});
		}, $scope0_id, () => [{ 1: label }]) });
	});
	_try($scope0_id, "c", _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("static body");
	}, $scope0_id), { catch: $catch });
	_script($scope0_id, "a2");
	_scope($scope0_id, { d: clicks });
}, 1);
