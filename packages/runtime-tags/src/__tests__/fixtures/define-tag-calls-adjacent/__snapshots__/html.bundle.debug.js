// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	const D = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "#text/0", n, 2));
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_n#0:3/subscribe");
	}, $scope0_id) };
	D.content({});
	D.content({});
	_html(`<button>inc</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/4": $n__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
