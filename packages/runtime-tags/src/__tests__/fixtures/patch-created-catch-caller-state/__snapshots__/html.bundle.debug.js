// tags/detail-view.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom(error) {
	throw error;
}
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/detail-view.marko_3*content": "__tests__/tags/detail-view.marko_3*content;D ;<p> </p>",
	"__tests__/tags/detail-view.marko_1*content": "__tests__/tags/detail-view.marko_1*content __tests__/tags/detail-view.marko_1_input_detail#0:3/subscribe",
	"__tests__/tags/detail-view.marko": "__tests__/tags/detail-view.marko !;b%;<!><!><!>",
	"__tests__/tags/detail-view.marko_2*shell": "__tests__/tags/detail-view.marko_2*shell __tests__/tags/detail-view.marko_2_input_detail#0:3/subscribe!__tests__/tags/detail-view.marko_2_input_detail#0:3;D ;<i> </i>"
});
var detail_view_default = _template("__tests__/tags/detail-view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_detail = _write_if($scope0_reason, 0), $cg__input_detail = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_detail__closures = new Set();
	const $input_error__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_patch_text($scope3_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_error ? "__tests__/tags/detail-view.marko_3_input_error#0:4/init" : "__tests__/tags/detail-view.marko_3_input_error#0:4/subscribe");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/tags/detail-view.marko", "4:2"), $cg__input_error && "__tests__/tags/detail-view.marko_3_input_error#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "#text/0", err.message)}</b>`);
		_if(() => {
			if (input.detail) {
				const $scope2_id = _scope_id();
				_html(`<i>${_patch_text($scope2_id, "#text/0", input.detail, void 0, $scope0_reason, 0)}</i>`);
				_script($scope2_id, "__tests__/tags/detail-view.marko_2_input_detail#0:3");
				$cg__input_detail && _patch_init($scope2_id, "__tests__/tags/detail-view.marko_2_input_detail#0:3/init");
				$scope1_page && _subscribe($wi__input_detail && $input_detail__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_detail/5": $wi__input_detail && 1
				}, "__tests__/tags/detail-view.marko", "8:6"), "__tests__/tags/detail-view.marko_2_input_detail#0:3/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/tags/detail-view.marko_2*shell"], $scope0_reason, 0);
		$cg__input_detail && _patch_init($scope1_id, "__tests__/tags/detail-view.marko_1_input_detail#0:3/init");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_detail__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/detail-view.marko", "6:4"), "__tests__/tags/detail-view.marko_1_input_detail#0:3/subscribe");
	}, void 0, "__tests__/tags/detail-view.marko_1*content", "__tests__/tags/detail-view.marko_3*content", 1, 1, 1);
	$scope0_page ? _scope($scope0_id, {
		input_detail: input.detail,
		"ClosureScopes:input_detail/5": $wi__input_detail && $input_detail__closures,
		"ClosureScopes:input_error/6": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/tags/detail-view.marko", 0, { input_detail: ["input.detail"] }) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/detail-view.marko_fill0", input.detail, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button> </button></main>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}& D m`)("b%c", "b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `D/${_w0}&/${_w1}& D m`)("b%c", "b%c")};${((_w0, _w1) => `<main>${_w0}${_w1}<button> </button></main>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	detail_view_default({
		error: input.error,
		detail: input.detail
	});
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	detail_view_default({
		error: input.error,
		detail: count ? "n" + count : ""
	});
	_html(`<button>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
