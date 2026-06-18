// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	_html("<p");
	_attrs_content({
		class: input.class,
		...rest
	}, "a", $scope0_id, "p");
	_html(`</p>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { d: input.class });
});

// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	const $childScope = _peek_scope_id();
	child_default({
		...rest,
		class: _class
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
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("Hello World");
		}, $scope0_id)
	});
	_html("</div><div id=dynamic>");
	_dynamic_tag($scope0_id, "d", Wrap, { class: "bar" }, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("Hello World");
	}, $scope0_id), 0, 0);
	_html("</div>");
}, 1);
