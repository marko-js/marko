// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "has",
	selector: ".my-button:focus"
}]);
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	$Child_withLoadAssets({ value: input.value });
	_await($scope0_id, "c", resolveAfter(1, 1), () => {
		const $scope1_id = _scope_id();
		let a = 1;
		_html(`<button class=a>${_escape(a)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		writeScope($scope1_id, { c: a });
		_resume_branch($scope1_id);
	});
	_await($scope0_id, "d", resolveAfter(2, 2), () => {
		const $scope2_id = _scope_id();
		let b = 1;
		_html(`<button class=b>${_escape(b)}${_el_resume($scope2_id, "b")}</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "b1");
		writeScope($scope2_id, { c: b });
		_resume_branch($scope2_id);
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
