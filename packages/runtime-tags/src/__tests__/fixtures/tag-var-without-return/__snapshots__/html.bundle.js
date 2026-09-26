// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child</span>");
});

// tags/returns.marko
var returns_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return "some";
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<b>foo</b>");
	}, $scope0_id) };
	let returns = false;
	let x = child_default({});
	let z = Foo.content({});
	const $returnsReturnsChild_scope = _peek_scope_id();
	let w = _dynamic_tag($scope0_id, "e", child_default, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "f", $returnsReturnsChild_scope, "a1");
	_html(`<div class=x>${x === void 0 ? "none" : _escape(x)}</div><div class=z>${z === void 0 ? "none" : _escape(z)}</div><div class=w>${_text_resume($scope0_id, "i", w === void 0 ? "none" : w)}</div><button>toggle</button>${_el_resume($scope0_id, "j")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { k: returns });
}, 1);
