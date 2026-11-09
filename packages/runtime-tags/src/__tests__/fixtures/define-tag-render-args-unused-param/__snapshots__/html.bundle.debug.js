// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = new Set();
	let x = 1;
	const MyTag = { content: _content("__tests__/template.marko_2*content", (a, b, c) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<div>${_text_mark($scope2_id, "#text/0", b, 0)}|${_text_mark($scope2_id, "#text/1", c, 2)}</div>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	const Wrap = { content: _content("__tests__/template.marko_3*content", (a, opts) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html("<p>");
		_dynamic_tag($scope3_id, "#text/0", opts.content, {}, 0, 0, 0);
		_html("</p>");
	}, $scope0_id) };
	const Titled = { content: _content("__tests__/template.marko_4*content", (a, opts) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason();
		_html(`<h1>${_text_mark($scope4_id, "#text/0", opts.title, 0)}</h1>`);
	}, $scope0_id) };
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	MyTag.content(0, "Hello", x);
	Wrap.content(0, { content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "#text/0", x));
		_subscribe($x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "13:2"), "__tests__/template.marko_1_x#0:5/subscribe");
	}, $scope0_id) });
	Titled.content(0, {});
	_html(`<button>${_text_mark($scope0_id, "#text/4", x)}</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:x/6": $x__closures
	}, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
