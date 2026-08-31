// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.label, _serialize_guard($scope0_reason, 1))}: ${_text_resume($scope0_id, "#text/1", input.value, _serialize_guard($scope0_reason, 2) * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (count % 2 === 0) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(10);
			const $childScope = _peek_scope_id();
			$Child_withLoadAssets({
				label: "x",
				value: count
			});
			writeScope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "10:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
