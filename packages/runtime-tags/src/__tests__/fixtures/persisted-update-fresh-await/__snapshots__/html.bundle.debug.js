// data.js
function getReviews(id) {
	if (typeof window !== "undefined") {
		throw new Error("getReviews is server-only");
	}
	return resolveAfter([{
		id: 1,
		text: `Product ${id} works great`,
		stars: 5
	}, {
		id: 2,
		text: `Product ${id} is okay`,
		stars: 3
	}], 1);
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_productId = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_productId__closures = new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.productId ? 0 : 1, $scope0_id, "#text/2", $sg__input_productId, $sg__input_productId, $sg__input_productId, void 0, void 0, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html(`<h2>Product ${_sep($sg__input_productId)}${_escape(_hole_value($scope1_id, "PatchHole:#text/0", input.productId, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_productId)}</h2>`);
		_try($scope1_id, "#text/1", _content_resume("__tests__/template.marko_2_content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_await($scope2_id, "#text/0", getReviews(input.productId), (reviews) => {
				const $scope5_id = _scope_id();
				_html("<ul>");
				_region(() => {
					forOf(reviews, (review) => {
						const $scope6_id = _scope_id();
						_html(`<li>${_escape(review.text)}${_el_resume($scope6_id, "#text/0", $sg__input_productId)} rated ${_sep($sg__input_productId)}${_escape(review.stars)}${_el_resume($scope6_id, "#text/1", $sg__input_productId)}</li>`);
						$sg__input_productId && writeScope($scope6_id, {}, "__tests__/template.marko", "11:10");
					});
				}, $scope5_id, "#ul/0", "__tests__/template.marko_r0");
				_html(`</ul>${_el_resume($scope5_id, "#ul/0", $sg__input_productId)}`);
				$sg__input_productId && writeScope($scope5_id, {}, "__tests__/template.marko", "9:6");
			}, $sg__input_productId, "__tests__/template.marko_5_update");
			$sg__input_productId && _subscribe($input_productId__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4"));
			_resume_branch($scope2_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("loading reviews…");
		}, $scope1_id) }) }, "__tests__/template.marko_1/update_boundary_#text/1", "__tests__/template.marko_2_update");
		$sg__input_productId && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, () => {
		const $scope3_id = _scope_id();
		_html("<p>pick a product</p>");
		$sg__input_productId && writeScope($scope3_id, {}, "__tests__/template.marko", "18:2");
	}], ["__tests__/template.marko_1_update", "__tests__/template.marko_3_update"], "__tests__/template.marko_r1");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_productId: (_serialize_if($scope0_reason, 0) || _patch_reason()) && input.productId,
		count: _seed_fill(_state_reason() && count),
		"ClosureScopes:input_productId": $sg__input_productId && $input_productId__closures
	}, "__tests__/template.marko", 0, {
		input_productId: ["input.productId"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_5_update": ["<ul></ul>", " b"],
	"__tests__/template.marko_5_content": ["<ul></ul>", " b"],
	"__tests__/template.marko_3_update": ["<p>pick a product</p>", "b"],
	"__tests__/template.marko_3_content": ["<p>pick a product</p>", "b"],
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_update": ["<h2>Product <!></h2><!><!>", "Db%l%c"],
	"__tests__/template.marko_1_content": ["<h2>Product <!></h2><!><!>", "Db%l%c"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
