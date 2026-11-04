// tags/badge/index.marko
_shells({
	b: "b;b%bD ;<!><!><p> </p>",
	b0: "b0,<em>on</em>"
});
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_html("<em>on</em>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b0"], $scope0_reason, 0);
	_html(`<p>${_text_mark($scope0_id, "b", input.text, 1, $scope0_reason, 1)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_a && _patch_render($scope0_id, "a0", "e");
	$fg__input_b && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		e: input.a,
		f: input.b,
		g: show
	}) || ($fg__input_a && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 1)), $fg__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 2)));
}, 1);
