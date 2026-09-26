// tags/one.marko
var one_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return { n: 1 };
});

// tags/two.marko
var two_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return { n: 2 };
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let Tag = one_default;
	const $Tag_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "a", Tag, {});
	_var($scope0_id, "b", $Tag_scope, "a0");
	_html(`<button class=swap>${_text_resume($scope0_id, "d", "0:" + v?.n)}</button>${_el_resume($scope0_id, "c")}<button class=clear></button>${_el_resume($scope0_id, "e")}<button class=mount></button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: a,
		h: Tag,
		j: v?.n
	});
}, 1);
