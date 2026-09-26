// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", clicks)}</button>${_el_resume($scope0_id, "#button/0")}`);
	let $catch;
	forOf([`update ${clicks}`], (label) => {
		$catch = attrTags($catch, { content: _content_resume("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`caught ${_text_resume($scope2_id, "#text/0", label, 2)}`);
			_scope($scope2_id, {}, "__tests__/template.marko", "5:6");
		}, $scope0_id, () => [{ label }]) });
	});
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("static body");
	}, $scope0_id), { catch: $catch });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { clicks }, "__tests__/template.marko", 0, { clicks: "1:6" });
}, 1);
