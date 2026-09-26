// tags/effect-only.marko
var effect_only_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0);
	_scope($scope0_id, { c: input.n });
});

// tags/text-end.marko
var text_end_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<b></b>tail");
});

// tags/text-start.marko
var text_start_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
	_html("head<b></b>");
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Foo = { content: _content("a0", ({ n }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "a1", 0);
		_scope($scope1_id, { c: n });
	}, $scope0_id) };
	_html("<div>");
	const $childScope = _peek_scope_id();
	effect_only_default({ n });
	_html(`</div><span>${_text_resume($scope0_id, "b", n)}</span><p>`);
	text_end_default({});
	const $childScope2 = _peek_scope_id();
	effect_only_default({ n });
	_html(` more <span>${_text_resume($scope0_id, "e", n)}</span><i>${_text_resume($scope0_id, "f", n)}</i></p><p>lead `);
	const $childScope3 = _peek_scope_id();
	effect_only_default({ n });
	text_start_default({});
	_html(`<span>${_text_resume($scope0_id, "i", n)}</span><i>${_text_resume($scope0_id, "j", n)}</i></p><p>lead `);
	const $childScope4 = _peek_scope_id();
	effect_only_default({ n });
	_html(` more <span>${_text_resume($scope0_id, "l", n)}</span><i>${_text_resume($scope0_id, "m", n)}</i></p><p>lead `);
	const $childScope5 = _peek_scope_id();
	Foo.content({ n });
	_html(` more <span>${_text_resume($scope0_id, "o", n)}</span><i>${_text_resume($scope0_id, "p", n)}</i></p><button></button>${_el_resume($scope0_id, "q")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		r: n,
		a: _existing_scope($childScope),
		d: _existing_scope($childScope2),
		g: _existing_scope($childScope3),
		k: _existing_scope($childScope4),
		n: _existing_scope($childScope5)
	});
}, 1);
