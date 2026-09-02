// tags/greet/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/greet/index.marko": "__tests__/tags/greet/index.marko;D ;<span> </span>" });
var greet_default = _template_persisted("__tests__/tags/greet/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const double = input.n * 2;
	_html(`<span>${_patch_text($scope0_id, "#text/0", $global$1.locale)}</span>`);
	const $return = double;
	_global_subscribe("__tests__/tags/greet/index.marko_0_$global_locale#4/global", $scope0_id);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/greet/index.marko", 0);
	return $return;
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D l l`)("D l");
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let d = greet_default({ n: count });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_d#5/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", d)}</p><button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [greet_default]);
