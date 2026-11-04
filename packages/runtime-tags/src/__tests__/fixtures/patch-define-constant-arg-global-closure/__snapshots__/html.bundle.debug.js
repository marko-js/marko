// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;D%;<div><!></div>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $D_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $D_content__template = $template$1;
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($D_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `/${_w0}& D l`)($D_content__walks)};${((_w0) => `${_w0}<button> </button>`)($D_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	const D = { content: _content("__tests__/template.marko_1*content", ({ v }) => {
		const $scope1_id = _scope_id();
		const $D_content__z__closures = new Set();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const z = v + $global$1.flag;
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		wrap_default({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_html(`<p${_attr("data-z", z + $global$1.mark, $scope2_id, "#p/0", 4, 0)}></p>${_el_mark($scope2_id, "#p/0")}`);
			_fill_global_subscribe("__tests__/template.marko_2_$global_mark#0:12_z#1:4", $scope2_id);
			_subscribe(_unfilled_if() && $D_content__z__closures, _scope($scope2_id, { _: $scope2_page && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"));
		}, $scope1_id) });
		_patch_child_end();
		_fill_global_subscribe("__tests__/template.marko_1_$global_flag#0:9_v#3", $scope1_id);
		_unfilled_if() && _patch_write($scope1_id, "PatchWrite:z", z, 1);
		_scope($scope1_id, {
			z: _unfilled_if() && z,
			"ClosureScopes:z/5": $scope1_page && _unfilled_if() && $D_content__z__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", {
			v: "2:13",
			z: "3:10"
		});
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	D.content({ v: "a" });
	_patch_child_end();
	_html(`<button>${_text_mark($scope0_id, "#text/2", n)}</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
