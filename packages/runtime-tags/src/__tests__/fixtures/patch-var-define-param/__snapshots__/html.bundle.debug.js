// tags/labeler.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/labeler.marko": "__tests__/tags/labeler.marko;D ;<span> </span>" });
var labeler_default = _template_patch("__tests__/tags/labeler.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/labeler.marko", 0);
	return $return;
}, 0, 0);

// template.marko
const $Row_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l");
const $Row_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)($Row_content__walks), ((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	let n = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		let label = labeler_default({ title: value + input.suffix });
		(_client_guard($scope0_reason, 0) || _client_guard($scope1_reason, 0)) && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_label#7/var");
		_html(`<p>${_patch_text($scope1_id, "#text/2", label, void 0, $scope0_reason, 0)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_suffix__closures, _scope($scope1_id, {
			value: _source_if($scope0_reason, 0) && value,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", { value: "2:15" }), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_suffix#0:4/subscribe");
	}, $scope0_id) };
	const $childScope2 = _peek_scope_id();
	if ($scope0_page || _must_render(Row.content)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "#childScope/0", $childScope2);
		Row.content({ value: n });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_suffix: input.suffix,
		n,
		"ClosureScopes:input_suffix/6": $input_suffix__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_suffix: ["input.suffix"],
		n: "1:6"
	});
}, 1, 1);
