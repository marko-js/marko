// tags/wrap.marko
const $template$1 = "<button>toggle</button><div><!></div><!><!>";
const $walks$1 = " bD%l%c";
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !__tests__/tags/wrap.marko_0; bD%l%;<button>toggle</button><div><!></div><!><!>" });
var wrap_default = _template_patch("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			_html("</section>");
			_scope($scope1_id, {}, "__tests__/tags/wrap.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/tags/wrap.marko_0");
	_patch_value($scope0_id, "__tests__/tags/wrap.marko1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/wrap.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/tags/wrap.marko0", input.content);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function check(fail, x) {
	if (fail) throw new Error("boom " + x);
	return x;
}
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !;${_w0};${_w1}`)(((_w0) => `/${_w0}&b`)($walks$1), ((_w0) => `${_w0}<!>`)($template$1)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fail__closures = new Set();
	const $input_x__closures = new Set();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	wrap_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<p>${_text_resume($scope2_id, "#text/0", check(input.fail, input.x))}</p>`);
			_subscribe(_source_if($scope0_reason, 2) && $input_x__closures, _subscribe(_source_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_2_input_fail#3/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_x#4/subscribe");
		}, $scope1_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_3*content", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _source_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "#text/0", err.message, $sg__err_message)}</b>`);
			_source_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "8:6");
		}, $scope1_id) }) });
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		input_fail: input.fail,
		input_x: input.x,
		"ClosureScopes:input_fail": $input_fail__closures,
		"ClosureScopes:input_x": $input_x__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_fail: ["input.fail"],
		input_x: ["input.x"]
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.fail), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/template.marko1", input.x));
}, 1, () => [wrap_default]);
