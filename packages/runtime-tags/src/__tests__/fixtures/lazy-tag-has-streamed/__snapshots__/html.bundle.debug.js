// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", [{
	type: "has",
	selector: ".my-button:focus"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	$Child_withLoadAssets({ value: input.value });
	_await($scope0_id, "#text/2", resolveAfter(1, 1), () => {
		const $scope1_id = _scope_id();
		let a = 1;
		_html(`<button class=a>${_escape(a)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_a");
		writeScope($scope1_id, { a }, "__tests__/template.marko", "4:1", { a: "5:7" });
		_resume_branch($scope1_id);
	});
	_await($scope0_id, "#text/3", resolveAfter(2, 2), () => {
		const $scope2_id = _scope_id();
		let b = 1;
		_html(`<button class=b>${_escape(b)}${_el_resume($scope2_id, "#text/1")}</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_b");
		writeScope($scope2_id, { b }, "__tests__/template.marko", "7:1", { b: "8:7" });
		_resume_branch($scope2_id);
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
