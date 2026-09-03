// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let tag = input.tag;
	let n = 0;
	_html(`<button id=swap>swap</button>${_el_resume($scope0_id, "#button/0")}<button id=bump>bump</button>${_el_resume($scope0_id, "#button/1")}`);
	_dynamic_tag($scope0_id, "#text/2", tag, { value: "b" }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<option${_attr_option_value("a")}>A${_text_resume($scope1_id, "#text/0", n, 2)}</option>`);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
	}, $scope0_id));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		tag,
		n,
		"ClosureScopes:n": $n__closures
	}, "__tests__/template.marko", 0, {
		tag: "1:6",
		n: "2:6"
	});
}, 1);
