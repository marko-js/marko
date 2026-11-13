// template.marko
const $Picker_content__walks = "b%c";
const $Picker_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p>`)($Picker_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)($Picker_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko": `__tests__/template.marko;${((_w0) => `b/${_w0}&D l`)($Picker_content__walks)};${((_w0) => `<!>${_w0}<p> </p>`)($Picker_content__template)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_sel#1:1_item#4/setup!__tests__/template.marko_2; D%b%;<button><!><!></button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Picker = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let sel = 1;
		_for_of([1, 2], (item) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_text_mark($scope2_id, "#text/1", item === sel ? "*" : "")}${_text_mark($scope2_id, "#text/2", item, 2, 0, 0)}</button>${_el_mark($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_patch_write($scope2_id, "PatchWrite:item", item, 1);
			_scope($scope2_id, {
				item,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "3:4", { item: "3:8" });
		}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", 0, 0);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Picker.content({});
	_patch_child_end();
	_html(`<p>${_text_mark($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
