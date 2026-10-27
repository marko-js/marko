// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const m = input.min;
	_html("<main>");
	_if(() => {
		if (count > m) {
			const $scope1_id = _scope_id();
			_html("<p>over</p>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: count,
		g: m
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", m, !_server_guard($scope0_reason, 0));
}, 1);
