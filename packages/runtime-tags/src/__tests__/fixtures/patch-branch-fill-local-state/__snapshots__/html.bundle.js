// template.marko
_shells({
	a: "a !a3;D%bD l ;<main><!><em> </em><button id=c>+</button></main>",
	a2: "a2 a6!a0;D l ;<p> </p><button id=n>n</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>${_text_resume($scope1_id, "a", input.title + "@0")}</p><button id=n>n</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_patch_fill($scope1_id, "va1", n, 1);
			_scope($scope1_id, {
				c: n,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_html(`<em>${_text_resume($scope0_id, "b", count)}</em><button id=c>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		g: input.title,
		h: count
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.title, !_server_guard($scope0_reason, 1));
}, 1);
