// template.marko
_renderer_shells({ "__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell __tests__/template.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1><p>Last <!>${_escape(last)}${_el_resume($scope0_id, "#text/1")}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let handler = _resume((next) => {
				last = next;
			}, "__tests__/template.marko_1/handler", $scope1_id);
			let count = 0;
			_html(`<span>Seen <!>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko0", count, 1);
			_patch_bind($scope1_id, "TagVariableChange:count", handler || void 0);
			writeScope($scope1_id, {
				count,
				_: _scope_with_id($scope0_id),
				"TagVariableChange:count": handler || void 0
			}, "__tests__/template.marko", "5:4", { count: "7:10" });
			return 0;
		}
	}, $scope0_id, "#text/2", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1_shell"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
