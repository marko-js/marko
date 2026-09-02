// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;D%;<section><!></section>" });
var wrap_default = _template_persisted("__tests__/tags/wrap.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
}, 0, 0);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,hi",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ; ",
	"__tests__/template.marko": "__tests__/template.marko;b%b%;<!><!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $tag = input.tag;
	const $input2 = { class: input.cls };
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, "__tests__/template.marko_2*content", $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, _content_record("__tests__/template.marko_2*content", $scope0_id), 0, _source_guard($scope0_reason, 0), 1);
	const $tag2 = input.wrap ? wrap_default : null;
	_patch_dynamic_tag($scope0_id, "#text/1", $tag2, 0, 0, 0, "__tests__/template.marko_1*content", $scope0_owned, 3);
	_dynamic_tag($scope0_id, "#text/1", $tag2, {}, _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_owned, 4));
		_subscribe(_source_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), 0, _source_guard($scope0_reason, 3), 1);
	$scope0_reason && _scope($scope0_id, {
		input_tag: input.tag,
		input_cls: input.cls,
		input_note: input.note,
		"ClosureScopes:input_note": $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		input_cls: ["input.cls"],
		input_note: ["input.note"]
	});
}, 1, 1);
