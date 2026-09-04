// tags/counter-box/index.marko
const $template$1 = "<span>box <!></span>";
const $walks$1 = "Db%l";
_shells({ "__tests__/tags/counter-box/index.marko": "__tests__/tags/counter-box/index.marko !;Db%;<span>box <!></span>" });
var counter_box_default = _template_persisted("__tests__/tags/counter-box/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = input.start;
	_html(`<span>box ${_text_resume($scope0_id, "#text/0", count, 2)}</span>`);
	const $return = count;
	_patch_bind($scope0_id, "#TagVariableChange", _resume(function(v) {
		count = v;
	}, "__tests__/tags/counter-box/index.marko_0/valueChange", $scope0_id) || void 0);
	_patch_value($scope0_id, "__tests__/tags/counter-box/index.marko0", count, 1);
	$scope0_reason && _scope($scope0_id, { "#TagVariableChange": _resume(function(v) {
		count = v;
	}, "__tests__/tags/counter-box/index.marko_0/valueChange", $scope0_id) || void 0 }, "__tests__/tags/counter-box/index.marko", 0);
	return $return;
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D l l`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let count = counter_box_default({ start: 1 });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count#4/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", count)}</p><button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "2:16" });
}, 1, () => [counter_box_default]);
