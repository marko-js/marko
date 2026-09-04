// box-a.marko
const $template$2 = "<div class=a><!></div>";
const $walks$2 = "D%l";
_shells({ "__tests__/box-a.marko": "__tests__/box-a.marko;D%;<div class=a><!></div>" });
var box_a_default = _template_persisted("__tests__/box-a.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=a>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</div>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/box-a.marko", 0);
}, 0, 0);

// box-b.marko
const $template$1 = "<p class=b><!></p>";
const $walks$1 = "D%l";
_shells({ "__tests__/box-b.marko": "__tests__/box-b.marko;D%;<p class=b><!></p>" });
var box_b_default = _template_persisted("__tests__/box-b.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<p class=b>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</p>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/box-b.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ; ",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_mode = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	_html("<main>");
	const $tag = input.mode === "a" ? box_a_default : box_b_default;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, "__tests__/template.marko_1*content", $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(_patch_text($scope1_id, "#text/0", input.text, void 0, $scope0_owned, 1));
		_subscribe(_source_if($scope0_reason, 1) && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6"));
	}, $scope0_id), 0, $sg__input_mode, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		input_text: input.text,
		"ClosureScopes:input_text": $input_text__closures
	}, "__tests__/template.marko", 0, { input_text: ["input.text"] });
}, 1, 1);
