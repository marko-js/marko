// tags/wrap.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<div><!></div>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)("D%l")};${((_w0) => `${_w0}<button> </button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_v = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $z__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	let n = 0;
	const z = input.v + $global$1.flag;
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	wrap_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<p${_attr("data-z", z + $global$1.mark, $scope1_id, "a", (2 | _mask_group($scope0_reason, 0)) << 1, 0)}></p>${_el_resume($scope1_id, "a")}`);
		_fill_global_subscribe("a0", $scope1_id);
		_subscribe(_unfilled_if((2 | _mask_group($scope0_reason, 0)) << 1, 0) && $z__closures, _scope($scope1_id, { _: ($scope1_page || $wi__input_v) && _scope_with_id($scope0_id) }), _client_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && "a1");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_fill_global_subscribe("a3", $scope0_id, _client_guard($scope0_reason, 0));
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && input.v,
		g: n,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && z,
		i: ($scope0_page || $wi__input_v) && (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && $z__closures,
		a: _existing_scope($childScope)
	});
}, 1);
