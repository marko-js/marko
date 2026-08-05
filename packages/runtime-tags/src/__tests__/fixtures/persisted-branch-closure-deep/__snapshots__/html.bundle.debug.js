// template.marko
_renderer_shells({ "__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell;b%;<p>promo</p><!><!>`" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_inner = _serialize_guard($scope0_reason, 2), $sg__input_outer = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<span>Seen <!>${_escape(count)}${_el_resume($scope2_id, "#text/0")}</span>`);
					_subscribe($count__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"));
					return 0;
				}
			}, $scope1_id, "#text/0", $sg__input_inner, $sg__input_inner, $sg__input_inner, void 0, void 0, [0]);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", _serialize_guard($scope0_reason, 0), $sg__input_outer, $sg__input_outer, void 0, void 0, ["__tests__/template.marko_1_shell"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_inner: input.inner,
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_inner: ["input.inner"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
