// template.marko
_shells({ a: "a !; D ;<button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let d = input.x;
	const hold = _action($scope0_id, "a1");
	_html(`<button>${_text_resume($scope0_id, "b", d)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a2");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", d);
	$scope0_page && _scope($scope0_id, {
		f: d,
		h: hold,
		i: _resume(async () => {
			d = 5;
			await new Promise((resolve) => {
				window.release = resolve;
			});
		}, "a0", $scope0_id) || void 0
	});
}, 1);
