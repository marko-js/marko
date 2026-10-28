// template.marko
_shells({
	a: "a !;E l%;<main><h1> </h1><!></main>",
	a1: "a1 !a2; b%;<button>+</button><!><!>",
	a0: "a0 a7;Db%;<p>Seen <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<button>+</button>${_el_resume($scope1_id, "a")}`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>Seen ${_text_resume($scope2_id, "a", count, 2)}</p>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "b", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a0"], $scope0_reason, 2);
			_script($scope1_id, "a2");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			_patch_fill($scope1_id, "va4", count, 1);
			_scope($scope1_id, {
				c: count,
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, { g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.inner }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.inner, !_server_guard($scope0_reason, 2));
}, 1);
