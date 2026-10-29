// tags/mid-define.marko
const $Show_content__walks = " b";
const $Show_content__template = "<output></output>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks);
const $setup$1 = [[], []];
_shells({
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)($Show_content__walks, $Show_content__template),
	b: /*@__PURE__*/ (() => `b;${((_w0) => `b/${_w0}&b`)($Show_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Show_content__template)}`)()
});
var mid_define_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Show = { content: _content("b0", ({ get }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<output></output>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b1", 1, _filled_guard($scope1_reason, 0), "d");
		_scope($scope1_id, { d: get }) || _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "xd", get, !_server_guard($scope1_reason, 0));
	}, $scope0_id, 1) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Show.content({ get: input.get });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(6);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	mid_define_default({ get: low });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_patch_init_entry($scope0_id, "a3", [_filled_guard($scope0_reason, 0) && "g", _filled_guard($scope0_reason, 0) && "h"]);
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", up, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xh", low, !$sg__input_title));
}, 1);
