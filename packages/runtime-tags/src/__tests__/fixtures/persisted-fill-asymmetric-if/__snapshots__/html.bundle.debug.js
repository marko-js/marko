// template.marko
_renderer_shells({
	"__tests__/template.marko_3_shell": ",`__tests__/template.marko_3_shell,<p>shown</p>`",
	"__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell;b%;<!><!><!>`"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _source_guard($scope0_reason, 2), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_html("<p>shown</p>");
			$scope0_reason && writeScope($scope3_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>${_escape(input.title + "@" + count)}${_el_resume($scope2_id, "#text/0")}</p>`);
					_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 3) && $input_title__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6")));
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, [0]);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_3_shell", "__tests__/template.marko_1_shell"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_inner: input.inner,
		input_title: input.title,
		count,
		"ClosureScopes:input_title": $input_title__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_inner: ["input.inner"],
		input_title: ["input.title"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 3) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1);
