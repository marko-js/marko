// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	_html("<p");
	_attrs_content({
		class: input.class,
		...rest
	}, "#p/0", $scope0_id, "p");
	_html(`</p>${_el_resume($scope0_id, "#p/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_class_rest");
	writeScope($scope0_id, {
		input_class: input.class,
		rest
	}, "__tests__/tags/child.marko", 0, {
		input_class: ["input.class"],
		rest: "1:28"
	});
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { class: _class, ...rest } = input;
	const $childScope = _peek_scope_id();
	child_default({
		...rest,
		class: _class
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const Wrap = wrap_default;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=content-missing>");
	wrap_default({ class: "foo" });
	_html("</div><div id=content-undefined>");
	wrap_default({
		class: "foo",
		content: undefined
	});
	_html("</div><div id=content-set>");
	wrap_default({
		class: "foo",
		content: _content_resume("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("Hello World");
		}, $scope0_id)
	});
	_html("</div><div id=dynamic>");
	_dynamic_tag($scope0_id, "#text/3", Wrap, { class: "bar" }, _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("Hello World");
	}, $scope0_id), 0, 0);
	_html("</div>");
}, 1);
