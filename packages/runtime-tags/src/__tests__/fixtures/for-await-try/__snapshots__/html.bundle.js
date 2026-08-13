// template.marko
async function* stream(items) {
	let tick = 0;
	for (const item of items) if (item === "boom") yield rejectAfter(/* @__PURE__ */ new Error("boom"), ++tick);
	else yield resolveAfter(item, ++tick);
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $si__input_items = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_items__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<ul>");
		_for_await(stream(input.items), (item) => {
			const $scope4_id = _scope_id();
			_html(`<li>${_escape(item)}${_el_resume($scope4_id, "a", $sg__input_items)}</li>`);
			$si__input_items && writeScope($scope4_id, {});
		}, 0, $scope1_id, "a", $sg__input_items, $sg__input_items, $sg__input_items);
		_html("</ul>");
		$si__input_items && _subscribe($input_items__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<span>loading</span>");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("a1", (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<em>${_escape(err.message)}${_el_resume($scope3_id, "a", _serialize_guard($scope3_reason, 0))}</em>`);
			_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {});
		}, $scope0_id) })
	});
	$si__input_items && writeScope($scope0_id, { e: $input_items__closures });
}, 1);
