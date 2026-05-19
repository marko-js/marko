// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = new Set();
	let x = 1;
	const MyTag = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div>${_escape(x)}${_el_resume($scope1_id, "#text/0")}</div>`);
		_subscribe($x__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
		_resume_branch($scope1_id);
	}) };
	MyTag.content({});
	_if(() => {
		if (x || 1) {
			const $scope2_id = _scope_id();
			MyTag.content({});
			writeScope($scope2_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_x");
	writeScope($scope0_id, {
		x,
		"ClosureScopes:x": $x__closures
	}, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);
