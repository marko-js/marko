// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;D%;<section><!></section>" });
var frame_default = _template_persisted("__tests__/tags/frame.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<section>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button class=a>a</button><button class=b>b</button></main>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}& b l`)("D%l", "D%l");
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p class=b> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p class=a> </p>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0, _w1) => `D/${_w0}&/${_w1}& b l`)("D%l", "D%l"), ((_w0, _w1) => `<main>${_w0}${_w1}<button class=a>a</button><button class=b>b</button></main>`)($template$1, $template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_label = _source_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $a__closures = new Set();
	const $b__closures = new Set();
	let a = 0;
	let b = 0;
	_html$1("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	frame_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		_html$1(`<p class=a>${_escape(input.label + ":" + a)}${_el_resume($scope1_id, "#text/0")}</p>`);
		_subscribe($a__closures, _subscribe($si__input_label && $input_label__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4")));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope2);
	frame_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _persisted_reason();
		const $scope2_id = _scope_id();
		_html$1(`<p class=b>${_escape(input.label + ":" + b)}${_el_resume($scope2_id, "#text/0")}</p>`);
		_subscribe($b__closures, _subscribe($si__input_label && $input_label__closures, writeScope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label": 1
		}, "__tests__/template.marko", "5:4")));
		_resume_branch($scope2_id);
	}, $scope0_id) });
	_html$1(`<button class=a>a</button>${_el_resume($scope0_id, "#button/2")}<button class=b>b</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_label: input.label,
		a,
		b,
		"ClosureScopes:input_label": $input_label__closures,
		"ClosureScopes:a": $a__closures,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:b": $b__closures,
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		a: "1:6",
		b: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
	_resume_branch($scope0_id);
}, 1, () => [frame_default]);
