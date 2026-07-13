// tags/hello/index.marko
var hello_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<header${_attr_class(input.header.class)}>`);
	_dynamic_tag($scope0_id, "b", input.header.content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`</header>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}<main>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 3));
	_html(`</main><footer${_attr_class(input.footer.class)}>`);
	_dynamic_tag($scope0_id, "e", input.footer.content, {}, 0, 0, _serialize_guard($scope0_reason, 5));
	_html(`</footer>${_el_resume($scope0_id, "d", _serialize_guard($scope0_reason, 4))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const x = hello_default;
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", x, {
		header: attrTag({
			class: "my-header",
			content: _content_resume("a0", () => {
				_scope_reason();
				_scope_id();
				_html("Header content");
			}, $scope0_id)
		}),
		footer: attrTag({
			class: "my-footer",
			content: _content_resume("a1", () => {
				_scope_reason();
				_scope_id();
				_html("Footer content");
			}, $scope0_id)
		})
	}, _content_resume("a2", () => {
		_scope_id();
		_scope_reason();
		_html("Body content");
	}, $scope0_id), 0, 0);
}, 1);
