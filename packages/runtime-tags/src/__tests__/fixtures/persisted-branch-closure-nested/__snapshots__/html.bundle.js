// template.marko
_renderer_shells({
	a0: ",`a0 a2; b%;<button>+</button><!><!>`",
	a1: ",`a1 a4;Db%;<p>Seen <!></p>`"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _serialize_guard($scope0_reason, 3), $sg__input_outer = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 1)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<button>+</button>${_el_resume($scope1_id, "a")}`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>Seen <!>${_escape(count)}${_el_resume($scope2_id, "a")}</p>`);
					writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "b", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["a1"]);
			_script($scope1_id, "a2");
			_patch_value($scope1_id, "a0", count, 1);
			writeScope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "b", _serialize_guard($scope0_reason, 0), $sg__input_outer, $sg__input_outer, void 0, void 0, ["a0"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { g: input.inner });
}, 1);
