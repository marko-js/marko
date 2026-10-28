// template.marko
const $Show_content__walks = " b";
const $Show_content__template = "<output></output>";
_shells({ a: /*@__PURE__*/ (() => `a !a5;${((_w0) => `b/${_w0}& b`)($Show_content__walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($Show_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	const Show = { content: _content("a3", ({ get }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const g = get ?? _resume(() => "none", "a2");
		_html(`<output></output>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a4", 1, _filled_guard($scope1_reason, 0), "e");
		_scope($scope1_id, { e: g }) || _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "xe", g, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(6);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Show.content({ get: low });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_patch_effect($scope0_id, "ia6", _filled_guard($scope0_reason, 0) && "g", _filled_guard($scope0_reason, 0) && "h");
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", up, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xh", low, !$sg__input_title));
}, 1);
