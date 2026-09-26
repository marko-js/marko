// tags/effect-only.marko
var effect_only_default = _template("__tests__/tags/effect-only.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/effect-only.marko_0_input_n#2", 0);
	_scope($scope0_id, { input_n: input.n }, "__tests__/tags/effect-only.marko", 0, { input_n: ["input.n"] });
});

// tags/text-end.marko
var text_end_default = _template("__tests__/tags/text-end.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<b></b>tail");
});

// tags/text-start.marko
var text_start_default = _template("__tests__/tags/text-start.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("head<b></b>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Foo = { content: _content("__tests__/template.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "__tests__/template.marko_1_n#2", 0);
		_scope($scope1_id, { n }, "__tests__/template.marko", "3:2", { n: "3:15" });
	}, $scope0_id) };
	_html("<div>");
	const $childScope = _peek_scope_id();
	effect_only_default({ n });
	_html(`</div><span>${_text_resume($scope0_id, "#text/1", n)}</span><p>`);
	text_end_default({});
	const $childScope2 = _peek_scope_id();
	effect_only_default({ n });
	_html(` more <span>${_text_resume($scope0_id, "#text/4", n)}</span><i>${_text_resume($scope0_id, "#text/5", n)}</i></p><p>lead `);
	const $childScope3 = _peek_scope_id();
	effect_only_default({ n });
	text_start_default({});
	_html(`<span>${_text_resume($scope0_id, "#text/8", n)}</span><i>${_text_resume($scope0_id, "#text/9", n)}</i></p><p>lead `);
	const $childScope4 = _peek_scope_id();
	effect_only_default({ n });
	_html(` more <span>${_text_resume($scope0_id, "#text/11", n)}</span><i>${_text_resume($scope0_id, "#text/12", n)}</i></p><p>lead `);
	const $childScope5 = _peek_scope_id();
	Foo.content({ n });
	_html(` more <span>${_text_resume($scope0_id, "#text/14", n)}</span><i>${_text_resume($scope0_id, "#text/15", n)}</i></p><button></button>${_el_resume($scope0_id, "#button/16")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/3": _existing_scope($childScope2),
		"#childScope/6": _existing_scope($childScope3),
		"#childScope/10": _existing_scope($childScope4),
		"#childScope/13": _existing_scope($childScope5)
	}, "__tests__/template.marko", 0, { n: "2:6" });
}, 1);
