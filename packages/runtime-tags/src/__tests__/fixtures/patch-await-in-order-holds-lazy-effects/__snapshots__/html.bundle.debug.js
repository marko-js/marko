// child.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D ;<button> </button>" });
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.value, void 0, $scope0_reason, 1)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_valueChange: input.valueChange,
		input_value: input.value
	}, "__tests__/child.marko", 0, {
		input_valueChange: ["input.valueChange"],
		input_value: ["input.value"]
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_valueChange", input.valueChange), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "input_value", input.value));
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<p> </p><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&D l%c`)($walks$1);
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<div> </div>",
	"__tests__/template.marko_0_#text#3/await": "__tests__/template.marko_0_#text#3/await;D ;<div> </div>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `b%b/${_w0}&D l%c`)($walks$1), ((_w0) => `<!><!>${_w0}<p> </p><!><!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let value = 0;
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render($Child_withLoadAssets)) {
		_set_serialize_reason(8);
		_patch_child($scope0_id, "#childScope/1", $childScope);
		$Child_withLoadAssets({
			value,
			valueChange: _resume((_new_value) => {
				value = _new_value;
			}, "__tests__/template.marko_0/valueChange", $scope0_id)
		});
	}
	_html(`<p>${_patch_text($scope0_id, "#text/2", input.label, void 0, $scope0_reason, 0)}</p>`);
	_await($scope0_id, "#text/3", resolveAfter(input.label, 3), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_patch_text($scope1_id, "#text/0", v, void 0, $scope0_reason, 0)}</div>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}, 1, "__tests__/template.marko_1*content", 1);
	$scope0_page && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [$Child_withLoadAssets]);
