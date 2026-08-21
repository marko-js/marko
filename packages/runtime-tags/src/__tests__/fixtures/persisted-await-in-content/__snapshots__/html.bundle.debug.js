// tags/wrap/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/wrap/index.marko": "__tests__/tags/wrap/index.marko;D%;<section><!></section>" });
var wrap_default = _template_persisted("__tests__/tags/wrap/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/wrap/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D%l");
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,<em>loading</em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D%;<div id=done><!> done</div>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D%;<div id=done><!> done</div>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => ` D l/${_w0}&`)("D%l"), ((_w0) => `<button> </button>${_w0}`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_promise__closures = new Set();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope);
	wrap_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _persisted_reason();
			_await($scope2_id, "#text/0", input.promise, () => {
				const $scope3_id = _scope_id();
				_script($scope3_id, "__tests__/template.marko_3_input_msg#6/pending");
				_html(`<div id=done>${_patch_text($scope3_id, "#text/0", input.msg, $scope0_owned, 2)}${_el_resume($scope3_id, "#text/0")} done</div>`);
				writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:6");
				_resume_branch($scope3_id);
			}, void 0, "__tests__/template.marko_2_#text#0/await");
			$scope0_reason && _subscribe(_source_if($scope0_reason, 1) && $input_promise__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"));
			_resume_branch($scope2_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_record("__tests__/template.marko_4*content", $scope1_id) }) });
		$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
	}, $scope0_id) });
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_msg: input.msg,
		count,
		"ClosureScopes:input_msg": $input_msg__closures,
		"ClosureScopes:input_promise": $input_promise__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, () => [wrap_default]);
