// tags/mid/tags/leaf/index.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/mid/tags/leaf/index.marko": "__tests__/tags/mid/tags/leaf/index.marko;D ;<em> </em>" });
var leaf_default = _template("__tests__/tags/mid/tags/leaf/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.text, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/mid/tags/leaf/index.marko", 0);
});

// tags/mid/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/mid/index.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/mid/index.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$2) });
var mid_default = _template("__tests__/tags/mid/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	leaf_default(input);
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/mid/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			mid_default({ text: input.text });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_text: input.text,
		show
	}, "__tests__/template.marko", 0, {
		input_text: ["input.text"],
		show: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.text, !_server_guard($scope0_reason, 0));
}, 1);
