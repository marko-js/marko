// template.marko
const $Inner_content__walks = " D l";
const $Inner_content__template = "<button> </button>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Inner_content__walks);
const $Outer_content__template = $Inner_content__template;
const $template = $Outer_content__template;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Outer_content__walks);
const $setup = [[], []];
_shells({ "__tests__/template.marko": `__tests__/template.marko;${((_w0) => `/${_w0}&`)($Outer_content__walks)};${$Outer_content__template}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Inner = { content: _content("__tests__/template.marko_1*content", ({ fn, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__fn = _filled_guard($scope1_reason, 0);
		_html(`<button>${_text_mark($scope1_id, "#text/1", label, 1, $scope1_reason, 1)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_fn#4", 1, $fg__fn);
		_scope($scope1_id, { fn }, "__tests__/template.marko", "1:2", { fn: "1:17" }) || $fg__fn && _patch_write($scope1_id, "PatchMarkedWrite:fn", fn, 1);
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_2*content", ({ fn, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_scope_reason(_updates_from($scope2_reason, 1) << 3);
		const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
		Inner.content({
			fn,
			label
		});
		_patch_child_end();
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:2");
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	Outer.content({
		fn: _resume(function() {
			console.log("clicked");
		}, "__tests__/template.marko_0/fn"),
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
}, 1);
