// tags/wrap.marko
const $template = "<button>toggle</button><div><!></div><!><!>";
const $walks = " bD%l%c";
_shells({ b: "b !b0; bD%l%;<button>toggle</button><div><!></div><!><!>" });
var wrap_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, $wg__input_content, void 0, _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	if ($scope0_page) _if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.content,
		g: open
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "b1", input.content);
});

// template.marko
function check(fail, x) {
	if (fail) throw new Error("boom " + x);
	return x;
}
_shells({ a: /*@__PURE__*/ (() => `a !;${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_fail__OR__input_x = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_x__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	wrap_default({ content: _content_resume("a4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", check(input.fail, input.x), $wg__input_fail__OR__input_x)}</p>`);
			_subscribe(_source_if($scope0_reason, 2) && $input_x__closures, _subscribe(_source_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_fail__OR__input_x), "a1", $wg__input_fail__OR__input_x);
			$wg__input_fail__OR__input_x || _resume_branch($scope2_id);
		}, void 0, (err) => {
			const $scope3_reason = _scope_reason(), $wg__err_message = _source_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "a", err.message, $wg__err_message)}</b>`);
			_source_if($scope3_reason, 0) && _scope($scope3_id, {});
		}, void 0, "a2", "a3", void 0, 1);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		d: input.fail,
		e: input.x,
		f: $input_fail__closures,
		g: $input_x__closures,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a5", input.fail), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "a6", input.x));
}, 1);
