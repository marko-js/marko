// tags/doubler/index.marko
const $template$1 = "<span>x2</span>";
const $walks$1 = "b";
var doubler_default = _template_persisted("__tests__/tags/doubler/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	const $return = double;
	return $return;
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&%b l`)("b");
_shells({ "__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#7/init;Db%;<p>big <!></p>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_n = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let double = doubler_default({ value: input.n });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_double#8/var");
	_if(() => {
		if (double > 4) {
			const $scope1_id = _scope_id();
			_html(`<p>big <!>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</p>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_n, $sg__input_n, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [doubler_default]);
