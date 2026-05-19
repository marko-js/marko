// tags/wrapper.marko
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { as: inputAs, ...htmlInput } = input;
	_dynamic_tag($scope0_id, "#text/0", inputAs || "div", htmlInput, _content_resume("__tests__/tags/wrapper.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("hi");
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		inputAs: _serialize_if($scope0_reason, 2) && inputAs,
		htmlInput: _serialize_if($scope0_reason, 1) && htmlInput
	}, "__tests__/tags/wrapper.marko", 0, {
		inputAs: "1:13",
		htmlInput: "1:25"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	wrapper_default({});
	_html("</div><div>");
	wrapper_default({});
	_html("</div><div>");
	wrapper_default({});
	_html("</div><div>");
	wrapper_default({});
	_html("</div>");
}, 1);
