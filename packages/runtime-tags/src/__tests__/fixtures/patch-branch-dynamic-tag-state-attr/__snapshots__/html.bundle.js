// template.marko
_shells({
	a: "a !a3;b%b ;<!><!><button>+</button>",
	a2: "a2 a6;D%;<section><!></section>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_on = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", input.on ? "p" : "div", { "data-n": count }, 0, _content("a0", () => {
				_scope_id();
				_scope_reason();
				_html("x");
			}, $scope1_id));
			_html("</section>");
			_patch_render($scope1_id, "a1", _filled_guard($scope0_reason, 1) && ">f");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$fg__input_on && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a4", "f");
	_scope($scope0_id, {
		f: input.on,
		g: count
	}) || $fg__input_on && _patch_write($scope0_id, "xf", input.on, !_server_guard($scope0_reason, 1));
}, 1);
