// tags/labeler/index.marko
const $template$1 = "<span>fmt</span>";
const $walks$1 = "b";
_shells({ "__tests__/tags/labeler/index.marko": "__tests__/tags/labeler/index.marko,<span>fmt</span>" });
var labeler_default = _template_persisted("__tests__/tags/labeler/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<span>fmt</span>");
	const $return = "[" + input.title + "]";
	return $return;
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p><!> <!></p><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D%c%l l`)("b");
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let label = labeler_default({ title: input.title });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_label#9/var");
	_html(`<p>${_patch_text($scope0_id, "#text/2", label, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/2")} <!>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</p><button>+</button>${_el_resume($scope0_id, "#button/4")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [labeler_default]);
