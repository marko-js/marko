// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;D%;<section><!></section>" });
var frame_default = _template_persisted("__tests__/tags/frame.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D%l");
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("D%l"), ((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_second__closures = new Set();
	const $input_first__closures = new Set();
	const $showSecond__closures = new Set();
	let showSecond = false;
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	frame_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", showSecond ? input.second : input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", value)}</p>`);
			_scope($scope2_id, {}, "__tests__/template.marko", "4:6");
		}, 1, "__tests__/template.marko_1_#text#0/await");
		_subscribe($showSecond__closures, _subscribe(_source_if($scope0_reason, 1) && $input_first__closures, _subscribe(_source_if($scope0_reason, 0) && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"))));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_second: input.second,
		input_first: input.first,
		showSecond,
		"ClosureScopes:input_second": $input_second__closures,
		"ClosureScopes:input_first": $input_first__closures,
		"ClosureScopes:showSecond": $showSecond__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_second: ["input.second"],
		input_first: ["input.first"],
		showSecond: "1:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.second), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.first));
	_resume_branch($scope0_id);
}, 1, () => [frame_default]);
