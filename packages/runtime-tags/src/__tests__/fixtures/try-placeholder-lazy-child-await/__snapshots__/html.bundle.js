// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=child>inc</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "b", n, (v) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "a", v));
		_scope($scope1_id, {});
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: n });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=page>${_text_resume($scope0_id, "b", clicks)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("b1", () => {
		_scope_id();
		_scope_reason();
		$Child_withLoadAssets({});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("b0", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_script($scope0_id, "b2");
	_scope($scope0_id, { d: clicks });
}, 1);
