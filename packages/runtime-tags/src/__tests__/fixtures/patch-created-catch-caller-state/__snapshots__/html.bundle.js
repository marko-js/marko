// tags/detail-view.marko
const $template = "<!><!><!>";
function boom(error) {
	throw error;
}
const $setup$1 = [[], []];
_shells({
	b4: "b4;D ;<p> </p>",
	b5: "b5 b7",
	b: "b !;b%;<!><!><!>",
	b3: "b3 b2!b0;D ;<i> </i>"
});
var detail_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_detail = _write_if($scope0_reason, 0), $cg__input_detail = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_detail__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_patch_text($scope3_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_error ? "b8" : "b9");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "b9");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "a", err.message)}</b>`);
		_if(() => {
			if (input.detail) {
				const $scope2_id = _scope_id();
				_html(`<i>${_patch_text($scope2_id, "a", input.detail, void 0, $scope0_reason, 0)}</i>`);
				_script($scope2_id, "b0");
				$cg__input_detail && _patch_init($scope2_id, "b1");
				$scope1_page && _subscribe($wi__input_detail && $input_detail__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_detail && 1
				}), "b2");
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b3"], $scope0_reason, 0);
		$cg__input_detail && _patch_init($scope1_id, "b6");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_detail__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b7");
	}, void 0, "b5", "b4", 1, 1, 1);
	$scope0_page ? _scope($scope0_id, {
		d: input.detail,
		f: $wi__input_detail && $input_detail__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb10", input.detail, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `D/${_w0}&/${_w1}& D m`)("b%c", "b%c")};${((_w0, _w1) => `<main>${_w0}${_w1}<button> </button></main>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	detail_view_default({
		error: input.error,
		detail: input.detail
	});
	_patch_child_end();
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	detail_view_default({
		error: input.error,
		detail: ""
	});
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		i: count,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
