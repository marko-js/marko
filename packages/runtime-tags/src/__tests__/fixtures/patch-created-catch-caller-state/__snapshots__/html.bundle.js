// tags/detail-view.marko
const $template = "<!><!><!>";
function boom(error) {
	throw error;
}
_shells({
	b0: "b0;D ;<p> </p>",
	b: "b;b%;<!><!><!>",
	b1: "b1 b4!b2;D ;<i> </i>"
});
var detail_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_detail = _write_if($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_detail__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_patch_text($scope3_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, _client_guard($scope0_reason, 1) ? "b6" : "b7");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b7");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "a", err.message)}</b>`);
		_if(() => {
			if (input.detail) {
				const $scope2_id = _scope_id();
				_html(`<i>${_patch_text($scope2_id, "a", input.detail, void 0, $scope0_reason, 0)}</i>`);
				_script($scope2_id, "b2");
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "b3");
				_subscribe($wi__input_detail && $input_detail__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_detail && 1
				}), "b4");
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_detail__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b5");
	}, void 0, "b8", "b0", 1, "");
	$scope0_page ? _scope($scope0_id, {
		d: input.detail,
		f: $wi__input_detail && $input_detail__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb9", input.detail, !_server_guard($scope0_reason, 0), 1);
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `D/${_w0}&/${_w1}& D m`)("b%c", "b%c")};${((_w0, _w1) => `<main>${_w0}${_w1}<button> </button></main>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	detail_view_default({
		error: input.error,
		detail: input.detail
	});
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _patch_child($scope0_id, "b");
	detail_view_default({
		error: input.error,
		detail: ""
	});
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", count, 1);
	$scope0_page && _scope($scope0_id, {
		i: count,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
