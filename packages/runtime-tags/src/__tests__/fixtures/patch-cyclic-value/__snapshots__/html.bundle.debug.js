// tags/tagged/index.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
function describe(n) {
	return n.name + "/" + n.self.name;
}
_shells({ "__tests__/tags/tagged/index.marko": "__tests__/tags/tagged/index.marko !__tests__/tags/tagged/index.marko_0; D ;<button> </button>" });
var tagged_default = _template_patch("__tests__/tags/tagged/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let label = "";
	_html(`<button>${_text_resume($scope0_id, "#text/1", label)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/tagged/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/tagged/index.marko0", label, 1);
	$scope0_page ? _scope($scope0_id, { input_node: input.node }, "__tests__/tags/tagged/index.marko", 0, { input_node: ["input.node"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_node", input.node);
}, 0, 0);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks$1), $template$1) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const node = (() => {
		const n = {
			name: input.name,
			self: null
		};
		n.self = n;
		return n;
	})();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	tagged_default({ node });
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [tagged_default]);
