// tags/wrap.marko
const $template = "<button>toggle</button><div><!></div><!><!>";
const $walks = " bD%l%c";
_shells({ b: "b !b0; bD%l%;<button>toggle</button><div><!></div><!><!>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	if ($scope0_page) _if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.content,
		g: open
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
function check(fail, x) {
	if (fail) throw new Error("boom " + x);
	return x;
}
_shells({
	a0: "a0;D ;<p> </p>",
	a1: "a1,",
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_x__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	wrap_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_patch_text($scope2_id, "a", check(input.fail, input.x), void 0, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "a2");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "a3");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_x__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
		}, void 0, (err) => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<b>${_patch_text($scope3_id, "a", err.message)}</b>`);
			_scope($scope3_id, {});
		}, void 0, "a4", "a0", void 0, 2);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		d: input.fail,
		e: input.x,
		f: _write_if($scope0_reason, 1) && $input_fail__closures,
		g: _write_if($scope0_reason, 2) && $input_x__closures,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va5", input.fail, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va6", input.x, !_server_guard($scope0_reason, 2)));
}, 1);
