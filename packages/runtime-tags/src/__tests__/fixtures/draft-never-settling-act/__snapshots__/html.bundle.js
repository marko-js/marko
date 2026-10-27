// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let stuck = n;
	let quick = n;
	const hang = _action($scope0_id, "a2");
	const brief = _action($scope0_id, "a3");
	_html(`<button>${_text_resume($scope0_id, "b", stuck)} ${_text_resume($scope0_id, "c", quick, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: stuck,
		g: quick,
		i: hang,
		k: brief,
		j: _resume(async () => {
			stuck = "stuck";
			await new Promise(() => {});
		}, "a0", $scope0_id) || void 0,
		l: _resume(async () => {
			quick = "quick";
			await new Promise((resolve) => setTimeout(resolve, 50));
		}, "a1", $scope0_id) || void 0
	});
}, 1);
