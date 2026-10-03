// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a1");
	let a = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			const getLabel = _resume(() => "b", "a0");
			_scope($scope2_id, { a: getLabel });
			return 1;
		}
	}, $scope0_id, "b");
	_html(`<button class=read>${_text_resume($scope0_id, "d", "none")}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { e: a });
}, 1);
