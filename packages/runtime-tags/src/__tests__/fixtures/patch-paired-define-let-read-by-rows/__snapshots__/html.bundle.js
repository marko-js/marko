// template.marko
const $Picker_content__walks = "b%c";
const $Picker_content__template = "<!><!><!>";
_shells({
	a: `a;${((_w0) => `b/${_w0}&D l`)($Picker_content__walks)};${((_w0) => `<!>${_w0}<p> </p>`)($Picker_content__template)}`,
	a1: "a1 a4!a0; D%b%;<button><!><!></button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Picker = { content: _content("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let sel = 1;
		_for_of([1, 2], (item) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_text_mark($scope2_id, "b", item === sel ? "*" : "")}${_text_mark($scope2_id, "c", item, 2, 0, 0)}</button>${_el_mark($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_patch_write($scope2_id, "we", item, 1);
			_scope($scope2_id, {
				e: item,
				_: _scope_with_id($scope1_id)
			});
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a1", 0, 0);
		_scope($scope1_id, {});
	}, $scope0_id) };
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Picker.content({});
	_patch_child_end();
	_html(`<p>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
