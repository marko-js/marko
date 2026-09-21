// child.marko
const $template$1 = "<button>go</button>";
const $walks$1 = " b";
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0_input_title#3_handler#4; ;<button>go</button>" });
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const handler = _resume((event) => event.target.dataset.seen = input.title, "__tests__/child.marko_0/handler", $scope0_id);
	_html(`<button${_patch_attrs({
		title: input.title,
		onClick: handler
	}, "#button/0", $scope0_id, "button", void 0, $scope0_reason, 0)}>go</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_input_title#3_handler#4");
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		handler
	}, "__tests__/child.marko", 0, {
		input_title: ["input.title"],
		handler: "1:8",
		"EventAttributes:#button/0": ["...{ title: input.title, onClick: handler }", "2:12"]
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_title", input.title);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: "body"
}], 1);
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)(" b"), /*@__PURE__*/ ((_w0) => `<main><!>${_w0}</main>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<main>");
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope);
			$Child_withLoadAssets({ title: input.title });
			_html("</main>");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, { input_title: input.title }, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1, () => [$Child_withLoadAssets]);
