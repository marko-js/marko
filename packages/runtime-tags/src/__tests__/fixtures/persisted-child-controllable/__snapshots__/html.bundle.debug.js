// tags/counter/index.marko
_renderer_shells({ "__tests__/tags/counter/index.marko_1_shell": ",`__tests__/tags/counter/index.marko_1_shell __tests__/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>`" });
var counter_default = _template_persisted("__tests__/tags/counter/index.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen <!>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/tags/counter/index.marko_1");
			_patch_value($scope1_id, "__tests__/tags/counter/index.marko0", count, 1);
			_patch_bind($scope1_id, "TagVariableChange:count", input.onCount || void 0);
			writeScope($scope1_id, {
				count,
				_: _scope_with_id($scope0_id),
				"TagVariableChange:count": input.onCount || void 0
			}, "__tests__/tags/counter/index.marko", "1:2", { count: "2:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/counter/index.marko_1_shell"]);
	$scope0_reason && writeScope($scope0_id, { input_onCount: input.onCount }, "__tests__/tags/counter/index.marko", 0, { input_onCount: ["input.onCount"] });
});

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1><p>Last <!>${_escape(last)}${_el_resume($scope0_id, "#text/1")}</p>`);
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 1),
		1: _mask_group($scope0_owned, 1)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope);
	counter_default({
		show: input.show,
		onCount: _resume(function(next) {
			last = next;
		}, "__tests__/template.marko_0/onCount", $scope0_id)
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
