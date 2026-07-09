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
	_if(() => {
		if (input.productId) {
			const $scope1_id = _scope_id();
			_html(`<h2>Product ${_sep($sg__input_productId)}${_escape(_hole_value($scope1_id, "UpdateHole:#text/0", input.productId, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_productId)}</h2>`);
			_try($scope1_id, "#text/1", _content_resume("__tests__/template.marko_2_content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_await($scope2_id, "#text/0", getReviews(input.productId), (reviews) => {
					const $scope5_id = _scope_id();
					_html("<ul>");
					_for_of(reviews, (review) => {
						const $scope6_id = _scope_id();
						_html(`<li>${_escape(_hole_value($scope6_id, "UpdateHole:#text/0", review.text, _persisted_reason()))}${_el_resume($scope6_id, "#text/0", $sg__input_productId)} rated ${_sep($sg__input_productId)}${_escape(_hole_value($scope6_id, "UpdateHole:#text/1", review.stars, _persisted_reason()))}${_el_resume($scope6_id, "#text/1", $sg__input_productId)}</li>`);
						$sg__input_productId && writeScope($scope6_id, {}, "__tests__/template.marko", "11:10");
					}, function(review) {
						return review.id;
					}, $scope5_id, "#ul/0", $sg__input_productId, $sg__input_productId, $sg__input_productId, "</ul>", 1);
					$sg__input_productId && writeScope($scope5_id, {}, "__tests__/template.marko", "9:6");
				}, $sg__input_productId);
				$sg__input_productId && _subscribe($input_productId__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4"));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html("loading reviews…");
			}, $scope1_id) }) }, "__tests__/template.marko_1/update_boundary_#text/1");
			$sg__input_productId && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
			return 0;
		} else {
			const $scope3_id = _scope_id();
			_html("<p>pick a product</p>");
			$sg__input_productId && writeScope($scope3_id, {}, "__tests__/template.marko", "18:2");
			return 1;
		}
	}, $scope0_id, "#text/2", $sg__input_productId, $sg__input_productId, $sg__input_productId);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_productId: (_serialize_if($scope0_reason, 0) || _update_reason()) && input.productId,
		count: _state_reason() && count,
		"ClosureScopes:input_productId": $sg__input_productId && $input_productId__closures
	}, "__tests__/template.marko", 0, {
		input_productId: ["input.productId"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
