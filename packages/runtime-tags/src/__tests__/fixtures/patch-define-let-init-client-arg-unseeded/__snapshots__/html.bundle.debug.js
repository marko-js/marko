// template.marko
const $D_content__walks = " D l";
const $D_content__template = "<button> </button>";
const $template = $D_content__template;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($D_content__walks);
const $setup = [[], []];
_shells({ "__tests__/template.marko": `__tests__/template.marko;${((_w0) => `/${_w0}&`)($D_content__walks)};${$D_content__template}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const D = { content: _content("__tests__/template.marko_1*content", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let x = v;
		_html(`<button>${_text_mark($scope1_id, "#text/1", x)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { x }, "__tests__/template.marko", "2:2", { x: "3:8" });
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	D.content({ v: n });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
