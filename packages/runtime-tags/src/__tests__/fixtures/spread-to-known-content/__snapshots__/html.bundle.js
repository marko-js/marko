// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p${_attr_class(input.class)}>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`</p>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 0),
		1: _serialize_guard($scope0_reason, 1),
		2: _serialize_guard($scope0_reason, 2)
	});
	child_default({
		class: _class,
		...rest
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const Wrap = wrap_default;
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=content-missing>");
	wrap_default({ class: "foo" });
	_html("</div><div id=content-undefined>");
	wrap_default({
		class: "foo",
		content: void 0
	});
	_html("</div><div id=content-set>");
	wrap_default({
		class: "foo",
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("Hello World");
		})
	});
	_html("</div><div id=dynamic>");
	_dynamic_tag($scope0_id, "d", Wrap, { class: "bar" }, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("Hello World");
	}, $scope0_id), 0, 0);
	_html("</div>");
}, 1);
