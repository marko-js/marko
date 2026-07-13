// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span id=child>child</span>");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_3_content", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			$Child_withLoadAssets({});
		}, $scope1_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_4_content", (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught: ${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope4_id, "#text/0", $sg__err_message)}`);
			_serialize_if($scope4_reason, 0) && writeScope($scope4_id, {}, "__tests__/template.marko", "7:6");
		}, $scope1_id) }) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading outer...");
	}, $scope0_id) }) });
}, 1);
