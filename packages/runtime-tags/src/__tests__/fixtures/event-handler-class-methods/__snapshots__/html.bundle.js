// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const obj = { go: _resume(function() {}, "a0") };
	let n = 1;
	_html(`<button id=a>a ${_text_resume($scope0_id, "b", n, 2)}</button>${_el_resume($scope0_id, "a")}<button id=b>b</button>${_el_resume($scope0_id, "c")}<button id=c>c</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: obj.go,
		g: n
	});
}, 1);
