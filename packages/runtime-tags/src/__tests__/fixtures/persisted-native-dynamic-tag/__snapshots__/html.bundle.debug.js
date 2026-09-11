// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "#text/0", input.on ? "section" : "article", {
		class: input.label,
		"data-count": count
	}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`${_text_resume($scope1_id, "#text/0", input.label)} ${_text_resume($scope1_id, "#text/1", count, 2)}`);
		_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4")));
	}, $scope0_id));
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_on: input.on,
		input_label: input.label,
		count,
		"ClosureScopes:input_label": $input_label__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"],
		count: "1:6"
	}) : (_filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.on), _filled_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.label));
}, 1, 1);
