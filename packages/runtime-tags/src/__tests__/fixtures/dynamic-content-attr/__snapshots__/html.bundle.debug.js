// template.marko
let sideEffect = 3;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	const MyThing = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`${_text_resume($scope1_id, "#text/0", count)} ${_escape(sideEffect++)}`);
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:1"));
	}, $scope0_id) };
	_html("<button>");
	_attr_content("#button/0", $scope0_id, (count, MyThing));
	_html(`</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		MyThing,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		count: "3:5",
		MyThing: "5:8"
	});
}, 1);
