// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_reviews = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_reviews__closures = new Set();
	let count = 1;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.reviews, 1), (reviews) => {
			const $scope3_id = _scope_id();
			_html("<div class=reviews>");
			_region(() => {
				forOf(reviews, (i) => {
					const $scope4_id = _scope_id();
					_html(`<div class=review>review number ${_sep($sg__input_reviews)}${_escape(i)}${_el_resume($scope4_id, "#text/0", $sg__input_reviews)} is static</div>`);
					$sg__input_reviews && writeScope($scope4_id, {}, "__tests__/template.marko", "9:8");
				});
			}, $scope3_id, "#div/0", "__tests__/template.marko_r0");
			_html(`</div>${_el_resume($scope3_id, "#div/0", $sg__input_reviews)}`);
			$sg__input_reviews && writeScope($scope3_id, {}, "__tests__/template.marko", "7:4");
		}, $sg__input_reviews, "__tests__/template.marko_3_update");
		$sg__input_reviews && _subscribe($input_reviews__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "__tests__/template.marko_0/update_boundary_#text/2", "__tests__/template.marko_1_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"ClosureScopes:input_reviews": $sg__input_reviews && $input_reviews__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_3_update": ["<div class=reviews></div>", " b"],
	"__tests__/template.marko_3_content": ["<div class=reviews></div>", " b"],
	"__tests__/template.marko_1_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<button class=bump> </button><!><!>", " D l%c"],
	"__tests__/template.marko": ["<button class=bump> </button><!><!>", " D l%c"]
});
