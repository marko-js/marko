// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_reviews = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const $input_reviews__closures = /* @__PURE__ */ new Set();
	let count = 1;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.reviews, 1), (reviews) => {
			const $scope3_id = _scope_id();
			_html("<div class=reviews>");
			_region(() => {
				forOf(reviews, (i) => {
					const $scope4_id = _scope_id();
					_html(`<div class=review>review number ${_sep($sg__input_reviews)}${_escape(i)}${_el_resume($scope4_id, "a", $sg__input_reviews)} is static</div>`);
					$sg__input_reviews && writeScope($scope4_id, {});
				});
			}, $scope3_id, "a", "a2");
			_html(`</div>${_el_resume($scope3_id, "a", $sg__input_reviews)}`);
			$sg__input_reviews && writeScope($scope3_id, {});
		}, $sg__input_reviews, "a3");
		$sg__input_reviews && _subscribe($input_reviews__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
		_scope_reason();
		_scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "a0", "a6");
	_script($scope0_id, "a7");
	writeScope($scope0_id, {
		g: _seed_fill(_state_reason() && count),
		h: $sg__input_reviews && $input_reviews__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<div class=reviews></div>", " b"],
	"a8": ["<div class=reviews></div>", " b"],
	"a6": ["<!><!><!>", "b%c"],
	"a5": ["<!><!><!>", "b%c"],
	"a1": ["<button class=bump> </button><!><!>", " D l%c"],
	"a": ["<button class=bump> </button><!><!>", " D l%c"]
});
