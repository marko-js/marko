// tags/echo/index.marko
const $template = "<em> </em>";
_shells({ b: "b;D ;<em> </em>" });
var echo_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const { ...rest } = input;
	_html(`<em>${_patch_text($scope0_id, "a", rest.label, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("D l"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let other = 0;
	_html("<main>");
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	echo_default({ label: input.label });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		f: other,
		a: _existing_scope($childScope)
	});
}, 1, () => [echo_default]);
