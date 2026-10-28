// template.marko
_shells({
	a: "a !a4;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	a2: "a2;b%;<p>promo</p><!><!>",
	a1: "a1 a7;Db%;<span>Seen <!></span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<span>Seen ${_text_resume($scope2_id, "a", count, 2)}</span>`);
					_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, 1, 0, 0, ["a1"], $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.inner,
		i: count,
		k: $count__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.inner, !_server_guard($scope0_reason, 2));
}, 1);
