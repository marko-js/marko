// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const MyTag = { content: _content("a0", ({ name, count }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__name = _serialize_guard($scope1_reason, 1), $sg__count = _serialize_guard($scope1_reason, 2);
		_html(`<div>Hello ${_sep($sg__name)}${_escape(name)}${_el_resume($scope1_id, "a", $sg__name)} ${_sep($sg__count)}${_escape(count)}${_el_resume($scope1_id, "b", $sg__count)}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason(10);
	MyTag.content({
		name: "Ryan",
		count
	});
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: count,
		c: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
