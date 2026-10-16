// tags/wrapper.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
function boom$1() {
	throw new Error("SHOWN_message");
}
_shells({
	"__tests__/tags/wrapper.marko_2*content": "__tests__/tags/wrapper.marko_2*content;D ;<p> </p>",
	"__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko !;b%;<!><!><!>"
});
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_fallback = _write_guard($scope0_reason, 0), $wi__input_fallback = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fallback__closures = new Set();
	const $input_fail__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.fail ? boom$1() : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }, "__tests__/tags/wrapper.marko", "4:2"), _client_guard($scope0_reason, 1) && "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe");
	}, void 0, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.fallback, {}, 0, 0, $wg__input_fallback);
		_subscribe($wi__input_fallback && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/wrapper.marko", "6:4"), "__tests__/tags/wrapper.marko_1_input_fallback#0:3/subscribe", $wg__input_fallback);
		$wg__input_fallback || _resume_branch($scope1_id);
	}, void 0, "__tests__/tags/wrapper.marko_1*content", "__tests__/tags/wrapper.marko_2*content", 1);
	$scope0_page ? _scope($scope0_id, {
		input_fallback: input.fallback,
		"ClosureScopes:input_fallback/5": $wi__input_fallback && $input_fallback__closures,
		"ClosureScopes:input_fail/6": $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}, "__tests__/tags/wrapper.marko", 0, { input_fallback: ["input.fallback"] }) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/wrapper.marko_fill0", input.fallback, !_server_guard($scope0_reason, 0));
});

// tags/error-wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
_shells({
	"__tests__/tags/error-wrapper.marko_2*content": "__tests__/tags/error-wrapper.marko_2*content;D ;<p> </p>",
	"__tests__/tags/error-wrapper.marko": "__tests__/tags/error-wrapper.marko !;b%;<!><!><!>"
});
var error_wrapper_default = _template("__tests__/tags/error-wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_fail = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fallback__closures = new Set();
	const $input_fail__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.fail ? boom() : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/tags/error-wrapper.marko_2_input_fail#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }, "__tests__/tags/error-wrapper.marko", "4:2"), _client_guard($scope0_reason, 1) && "__tests__/tags/error-wrapper.marko_2_input_fail#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "#text/0", err.message)}</b>`);
		_dynamic_tag($scope1_id, "#text/1", input.fallback, {}, 0, 0, _write_guard($scope0_reason, 0), void 0, 2, $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/error-wrapper.marko", "6:4"), "__tests__/tags/error-wrapper.marko_1_input_fallback#0:3/subscribe");
	}, void 0, "__tests__/tags/error-wrapper.marko_1*content", "__tests__/tags/error-wrapper.marko_2*content", 1, "");
	$scope0_page ? _scope($scope0_id, {
		input_fallback: input.fallback,
		"ClosureScopes:input_fallback/5": _write_if($scope0_reason, 0) && $input_fallback__closures,
		"ClosureScopes:input_fail/6": $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}, "__tests__/tags/error-wrapper.marko", 0, { input_fallback: ["input.fallback"] }) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/error-wrapper.marko_fill0", input.fallback, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c")};${((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$2, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/2");
	wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "#text/1", count, 2)}</em>`);
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_1_input_label#0:7/subscribe"), "__tests__/template.marko_1_count#0:8/subscribe");
		}, $scope0_id) })
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _patch_child($scope0_id, "#childScope/3");
	error_wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>${_patch_text($scope2_id, "#text/0", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope2_id, "#text/1", count, 2)}</i>`);
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_label/9": $wi__input_label && 1,
				"ClosureSignalIndex:count/10": 1
			}, "__tests__/template.marko", "7:4"), "__tests__/template.marko_2_input_label#0:7/subscribe"), "__tests__/template.marko_2_count#0:8/subscribe");
		}, $scope0_id) })
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		count,
		"ClosureScopes:input_label/9": $wi__input_label && $input_label__closures,
		"ClosureScopes:count/10": $count__closures,
		"#childScope/2": _existing_scope($childScope),
		"#childScope/3": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
