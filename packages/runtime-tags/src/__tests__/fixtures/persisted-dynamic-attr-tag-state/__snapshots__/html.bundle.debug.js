// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
_shells({ "__tests__/card.marko": "__tests__/card.marko;E l%;<section><em> </em><!></section>" });
var card_default = _template_persisted("__tests__/card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "#text/0", input.meta.n, void 0, $scope0_owned, 0)}</em>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_owned, 1));
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/card.marko", 0);
}, 0, 0);

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : null, { meta: attrTag({ n: count }) }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(_text_resume($scope1_id, "#text/0", input.label));
		_subscribe(_source_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
	}, $scope0_id));
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_on: input.on,
		input_label: input.label,
		count,
		"ClosureScopes:input_label": $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"],
		count: "2:6"
	}) : (_filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.on), _filled_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.label));
}, 1, 1);
