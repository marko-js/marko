// template.marko
let sideEffect = 3;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	const MyThing = { content: _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`${_escape(count)}${_el_resume($scope1_id, "#text/0")} ${_escape(sideEffect++)}`);
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:1"));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_html("<button>");
	_attr_content("#button/0", $scope0_id, (count, MyThing));
	_html(`</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, {
		count,
		MyThing,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		count: "3:5",
		MyThing: "5:8"
	});
	_resume_branch($scope0_id);
}, 1);
