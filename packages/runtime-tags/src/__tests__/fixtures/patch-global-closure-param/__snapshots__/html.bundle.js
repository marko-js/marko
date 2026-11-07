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
const $setup = _shell_setup([[], ["a6"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)("D%l")};${((_w0) => `${_w0}<button> </button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $z__closures = /* @__PURE__ */ new Set();
	const $global_mark__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	let n = 0;
	const z = input.v + $global$1.flag;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<p${_attr("data-z", z + $global$1.mark, $scope1_id, "aa$data-z", (2 | _updates_from($scope0_reason, 0)) << 1, 0)}></p>${_el_mark($scope1_id, "a")}`);
		_patch_render($scope1_id, "a0", [_filled_guard((2 | _updates_from($scope0_reason, 0)) << 1, 0) && ">h", ">j"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
		_subscribe(($scope0_page || $wi__input_v) && $global_mark__closures, _subscribe(_unfilled_if((2 | _updates_from($scope0_reason, 0)) << 1, 0) && $z__closures, _scope($scope1_id, { _: ($scope1_page || $wi__input_v) && _scope_with_id($scope0_id) }), _client_guard((2 | _updates_from($scope0_reason, 0)) << 1, 0) && "a1"), "a2");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>${_text_mark($scope0_id, "c", n)}</button>${_el_mark($scope0_id, "b")}`);
	_fill_global_subscribe("a4", $scope0_id, _client_guard($scope0_reason, 0));
	_fill_global_subscribe("a5", $scope0_id, _client_guard((2 | _updates_from($scope0_reason, 0)) << 1, 0));
	_script($scope0_id, "a6");
	_patch_render($scope0_id, "a7", [_filled_guard($scope0_reason, 0) && "f", "g"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
	_scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && input.v,
		g: n,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && z,
		j: ($scope0_page || $wi__input_v) && (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && $z__closures,
		k: ($scope0_page || $wi__input_v) && (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && $global_mark__closures,
		a: _existing_scope($childScope)
	});
}, 1);
