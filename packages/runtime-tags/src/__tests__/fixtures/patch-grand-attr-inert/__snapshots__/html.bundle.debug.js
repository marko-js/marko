// helper.ts
function stamp() {
	return "stamp";
}

// tags/mid/tags/leaf/index.marko
const $template$2 = "<pre> </pre>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/mid/tags/leaf/index.marko": "__tests__/tags/mid/tags/leaf/index.marko;D ;<pre> </pre>" });
var leaf_default = _template("__tests__/tags/mid/tags/leaf/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<pre>${_patch_text($scope0_id, "#text/0", input.stamp, void 0, $scope0_reason, 0)}</pre>`);
	_scope($scope0_id, {}, "__tests__/tags/mid/tags/leaf/index.marko", 0);
});

// tags/mid/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/mid/index.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/mid/index.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$2) });
var mid_default = _template("__tests__/tags/mid/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	leaf_default({ stamp: stamp() });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/mid/index.marko", 0);
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
			_patch_child($scope1_id, "#childScope/0", 0);
			mid_default({});
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
