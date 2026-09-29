// child.marko
const $template = "<button> </button>";
const $walks = " D l";
_shells({ a: "a !a0; D ;<button> </button>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button>${_patch_text($scope0_id, "b", input.value, void 0, $scope0_reason, 1)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		e: input.valueChange,
		f: input.value
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", input.valueChange), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "f", input.value));
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", void 0, 1);
_shells({
	b1: "b1;D ;<div> </div>",
	b2: "b2;D ;<div> </div>",
	b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `b%b/${_w0}&D l%c`)($walks), ((_w0) => `<!><!>${_w0}<p> </p><!><!>`)($template))
});
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let value = 0;
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render($Child_withLoadAssets)) {
		_set_serialize_reason(8);
		_patch_child($scope0_id, "b", $childScope);
		$Child_withLoadAssets({
			value,
			valueChange: _resume((_new_value) => {
				value = _new_value;
			}, "b0", $scope0_id)
		});
	}
	_html(`<p>${_patch_text($scope0_id, "c", input.label, void 0, $scope0_reason, 0)}</p>`);
	_await($scope0_id, "d", resolveAfter(input.label, 3), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_patch_text($scope1_id, "a", v, void 0, $scope0_reason, 0)}</div>`);
		_scope($scope1_id, {});
	}, 1, "b1", 1);
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1, () => [$Child_withLoadAssets]);
