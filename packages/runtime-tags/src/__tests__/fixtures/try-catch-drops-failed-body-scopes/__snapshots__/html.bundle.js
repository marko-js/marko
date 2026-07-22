// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 100;
	_html(`<button>c<!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: n });
	_resume_branch($scope0_id);
});

// template.marko
function boom() {
	throw new Error("BOOM");
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>outer <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		child_default({});
		_html(_escape(boom()));
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (e) => {
		const $scope2_reason = _scope_reason(), $sg__e_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_sep($sg__e_message)}${_escape(e.message)}${_el_resume($scope2_id, "a", $sg__e_message)}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {});
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	writeScope($scope0_id, { d: count });
	_resume_branch($scope0_id);
}, 1);
