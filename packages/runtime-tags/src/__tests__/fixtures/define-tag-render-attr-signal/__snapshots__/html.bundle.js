// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("a0", ({ number }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<div>${_escape(number)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 0))}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	MyTag.content({ number: x });
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: x,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
