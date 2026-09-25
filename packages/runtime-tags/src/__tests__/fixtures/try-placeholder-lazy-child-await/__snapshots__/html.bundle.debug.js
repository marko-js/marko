// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=child>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/1", n ? resolveAfter(n) : n, (v) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "#text/0", v));
		_scope($scope1_id, {}, "__tests__/child.marko", "5:2");
	});
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, { n }, "__tests__/child.marko", 0, { n: "3:6" });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=page>${_text_resume($scope0_id, "#text/1", clicks)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		$Child_withLoadAssets({});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { clicks }, "__tests__/template.marko", 0, { clicks: "3:6" });
}, 1);
