// template.marko
_shells({
	a: "a !a2;b%b ;<!><!><button>+</button>",
	a1: "a1 a5;D%;<section><!></section>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
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
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		f: input.on,
		g: count
	}) : (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.on, !_server_guard($scope0_reason, 1)), _content_withhold(input.on));
}, 1);
