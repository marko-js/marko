// template.marko
const $D_content__walks = " D l";
const $D_content__template = "<button> </button>";
_shells({ a: `a;${((_w0) => `/${_w0}&`)($D_content__walks)};${$D_content__template}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const D = { content: _content("a0", ({ v }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let x = v;
		_html(`<button>${_text_mark($scope1_id, "b", x)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, { f: x });
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	D.content({ v: n });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
