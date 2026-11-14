// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = /* @__PURE__ */ new Set();
	let x = 1;
	const MyTag = { content: _content("a0", (a, b, c) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<div>${_escape(b)}|${_text_mark($scope2_id, "b", c, 2)}</div>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	const Wrap = { content: _content("a1", (a, opts) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("<p>");
		_dynamic_tag($scope3_id, "a", opts.content, {}, 0, 0, 0);
		_html("</p>");
	}, $scope0_id) };
	const Titled = { content: _content("a2", (a, opts) => {
		_scope_id();
		_scope_reason();
		_html(`<h1>${_escape(opts.title)}</h1>`);
	}, $scope0_id) };
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	MyTag.content(0, "Hello", x);
	Wrap.content(0, { content: _content("a4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "a", x));
		_subscribe($x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3");
	}, $scope0_id) });
	Titled.content(0, {});
	_html(`<button>${_text_mark($scope0_id, "e", x)}</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		f: x,
		a: _existing_scope($childScope),
		g: $x__closures
	});
}, 1);
