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
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !;${_w0};${_w1}`)(((_w0) => `/${_w0}&b`)($walks$1), ((_w0) => `${_w0}<!>`)($template$1)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_promise = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	wrap_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_resume($scope2_id, "#text/0", v, $sg__input_promise)}</em>`);
			$scope0_page && _scope($scope2_id, {}, "__tests__/template.marko", "2:4");
		}, $sg__input_promise);
		_subscribe(_source_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_promise#3/subscribe", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		input_promise: input.promise,
		"ClosureScopes:input_promise": $input_promise__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_promise: ["input.promise"] }) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.promise);
}, 1, () => [wrap_default]);
