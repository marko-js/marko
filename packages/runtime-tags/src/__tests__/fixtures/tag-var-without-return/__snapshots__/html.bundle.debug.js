// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>child</span>");
});

// tags/returns.marko
var returns_default = _template("__tests__/tags/returns.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = "some";
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<b>foo</b>");
	}, $scope0_id) };
	let returns = false;
	let x = child_default({});
	let z = Foo.content({});
	const $returnsReturnsChild_scope = _peek_scope_id();
	let w = _dynamic_tag($scope0_id, "#text/4", returns ? returns_default : child_default, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/5", $returnsReturnsChild_scope, "__tests__/template.marko_0_w#13/var");
	_html(`<div class=x>${x === undefined ? "none" : _escape(x)}</div><div class=z>${z === undefined ? "none" : _escape(z)}</div><div class=w>${_text_resume($scope0_id, "#text/8", w === undefined ? "none" : w)}</div><button>toggle</button>${_el_resume($scope0_id, "#button/9")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { returns }, "__tests__/template.marko", 0, { returns: "7:6" });
}, 1);
