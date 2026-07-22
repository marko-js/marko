// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 100;
	_html(`<button>c<!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	writeScope($scope0_id, { n }, "__tests__/tags/child.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
function boom() {
	throw new Error("BOOM");
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>outer <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		child_default({});
		_html(_escape(boom()));
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2_content", (e) => {
		const $scope2_reason = _scope_reason(), $sg__e_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_sep($sg__e_message)}${_escape(e.message)}${_el_resume($scope2_id, "#text/0", $sg__e_message)}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {}, "__tests__/template.marko", "9:4");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "4:6" });
	_resume_branch($scope0_id);
}, 1);
