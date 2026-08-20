// template.marko
_shells({
	a: "a;E l%b%;<main><h1> </h1><!><!></main>",
	a0: "a0 !a2;Db%l ;<p class=pa>A <!></p><button class=ba>+</button>",
	a1: "a1 !a3;Db%l ;<p class=pb>B <!></p><button class=bb>+</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_a__OR__input_b = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 1)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			let x = 0;
			_html(`<p class=pa>A <!>${_escape(x)}${_el_resume($scope1_id, "a")}</p><button class=ba>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			_patch_value($scope1_id, "a0", x, 1);
			writeScope($scope1_id, { c: x });
			return 0;
		}
	}, $scope0_id, "b", 1, _source_guard($scope0_reason, 2), $sg__input_a__OR__input_b, void 0, void 0, ["a0"]);
	_if(() => {
		if (input.b) {
			const $scope2_id = _scope_id();
			let y = 10;
			_html(`<p class=pb>B <!>${_escape(y)}${_el_resume($scope2_id, "a")}</p><button class=bb>+</button>${_el_resume($scope2_id, "b")}`);
			_script($scope2_id, "a3");
			_patch_value($scope2_id, "a1", y, 1);
			writeScope($scope2_id, { c: y });
			return 0;
		}
	}, $scope0_id, "c", 1, _source_guard($scope0_reason, 3), $sg__input_a__OR__input_b, void 0, void 0, ["a1"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);
