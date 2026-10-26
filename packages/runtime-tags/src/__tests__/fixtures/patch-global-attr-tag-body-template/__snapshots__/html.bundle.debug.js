// tags/other.marko
const $template$2 = "<i>user=<!></i>";
const $walks$2 = "Db%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/other.marko": "__tests__/tags/other.marko;Db%;<i>user=<!></i>" });
var other_default = _template("__tests__/tags/other.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<i>user=${_patch_text($scope0_id, "#text/0", $global$1.user, 2)}</i>`);
	_fill_global_subscribe("__tests__/tags/other.marko_0_$global_user#4", $scope0_id);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/other.marko", 0);
});

// tags/child.marko
const $template$1 = "<div><!><b> </b></div>";
const $walks$1 = "D%bD m";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D%bD ;<div><!><b> </b></div>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.item, {}, 0, 0, _write_guard($scope0_reason, 0), void 0, 2, $scope0_reason, 0);
	_html(`<b>${_patch_text($scope0_id, "#text/1", input.n, void 0, $scope0_reason, 1)}</b></div>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<button>+</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(8);
	const $childScope2 = _patch_child($scope0_id, "#childScope/0");
	child_default({
		n: count,
		item: attrTag({ content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			other_default({});
			$scope1_page && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:17");
		}, $scope0_id) })
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
