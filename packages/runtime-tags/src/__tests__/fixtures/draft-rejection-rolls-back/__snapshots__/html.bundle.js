// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = 1;
	const fail = _action($scope0_id, "a2");
	const failNow = _action($scope0_id, "a3");
	_html(`<button>${_text_resume($scope0_id, "b", d)} ${_text_resume($scope0_id, "c", "", 2)}</button>${_el_resume($scope0_id, "a")}<button>sync</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: d,
		h: fail,
		j: failNow,
		i: _resume(async () => {
			d = 5;
			await resolveAfter(0);
			throw new Error("failed");
		}, "a0", $scope0_id) || void 0,
		k: _resume(function() {
			d = 6;
			throw new Error("failed now");
		}, "a1", $scope0_id) || void 0
	});
}, 1);
