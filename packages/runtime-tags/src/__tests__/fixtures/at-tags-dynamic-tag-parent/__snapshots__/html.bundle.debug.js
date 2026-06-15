// tags/hello/index.marko
var hello_default = _template("__tests__/tags/hello/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<header${_attr_class(input.header.class)}>`);
	_dynamic_tag($scope0_id, "#text/1", input.header.content, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_html(`</header>${_el_resume($scope0_id, "#header/0", _serialize_guard($scope0_reason, 1))}<main>`);
	_dynamic_tag($scope0_id, "#text/2", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 3));
	_html(`</main><footer${_attr_class(input.footer.class)}>`);
	_dynamic_tag($scope0_id, "#text/4", input.footer.content, {}, 0, 0, _serialize_guard($scope0_reason, 5));
	_html(`</footer>${_el_resume($scope0_id, "#footer/3", _serialize_guard($scope0_reason, 4))}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});

// template.marko
const x = hello_default;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", x, {
		header: attrTag({
			class: "my-header",
			content: _content_resume("__tests__/template.marko_2_content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("Header content");
			}, $scope0_id)
		}),
		footer: attrTag({
			class: "my-footer",
			content: _content_resume("__tests__/template.marko_3_content", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html("Footer content");
			}, $scope0_id)
		})
	}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Body content");
	}, $scope0_id), 0, 0);
}, 1);
