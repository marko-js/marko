// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a1: "a1 a4;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const base = 20;
			_patch_fill($scope1_id, "va0", base);
			_html(`<p>${_text_resume($scope1_id, "a", 20)}</p>`);
			$scope0_page && _scope($scope1_id, {
				b: base,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, { f: count });
}, 1);
