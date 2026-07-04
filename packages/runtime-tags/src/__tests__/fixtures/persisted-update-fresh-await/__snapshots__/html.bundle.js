// data.js
function getReviews(id) {
	if (typeof window !== "undefined") throw new Error("getReviews is server-only");
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
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_productId = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_productId__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.productId) {
			const $scope1_id = _scope_id();
			_html(`<h2>Product ${_sep($sg__input_productId)}${_escape(_hole_value($scope1_id, "a", input.productId, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_productId)}</h2>`);
			_try($scope1_id, "b", _content_resume("a4", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", getReviews(input.productId), (reviews) => {
					const $scope5_id = _scope_id();
					_html("<ul>");
					_for_of(reviews, (review) => {
						const $scope6_id = _scope_id();
						_html(`<li>${_escape(_hole_value($scope6_id, "a", review.text, _persisted_reason()))}${_el_resume($scope6_id, "a", $sg__input_productId)} rated ${_sep($sg__input_productId)}${_escape(_hole_value($scope6_id, "b", review.stars, _persisted_reason()))}${_el_resume($scope6_id, "b", $sg__input_productId)}</li>`);
						$sg__input_productId && writeScope($scope6_id, {});
					}, function(review) {
						return review.id;
					}, $scope5_id, "a", $sg__input_productId, $sg__input_productId, $sg__input_productId, "</ul>", 1);
					$sg__input_productId && writeScope($scope5_id, {});
				}, $sg__input_productId);
				$sg__input_productId && _subscribe($input_productId__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
				_scope_reason();
				_scope_id();
				_html("loading reviews…");
			}, $scope1_id) }) });
			$sg__input_productId && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope3_id = _scope_id();
			_html("<p>pick a product</p>");
			$sg__input_productId && writeScope($scope3_id, {});
			return 1;
		}
	}, $scope0_id, "c", $sg__input_productId, $sg__input_productId, $sg__input_productId);
	_script($scope0_id, "a5");
	writeScope($scope0_id, {
		f: (_serialize_if($scope0_reason, 0) || _update_reason()) && input.productId,
		g: _state_reason() && count,
		Bf: $sg__input_productId && $input_productId__closures
	});
	_resume_branch($scope0_id);
}, 1);
