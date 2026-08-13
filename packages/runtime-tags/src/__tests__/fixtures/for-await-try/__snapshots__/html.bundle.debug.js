// template.marko
async function* stream(items) {
	let tick = 0;
	for (const item of items) {
		if (item === "boom") {
			yield rejectAfter(new Error("boom"), ++tick);
		} else {
			yield resolveAfter(item, ++tick);
		}
	}
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $si__input_items = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_items__closures = new Set();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<ul>");
		_for_await(stream(input.items), (item) => {
			const $scope4_id = _scope_id();
			_html(`<li>${_escape(item)}${_el_resume($scope4_id, "#text/0", $sg__input_items)}</li>`);
			$si__input_items && writeScope($scope4_id, {}, "__tests__/template.marko", "16:6");
		}, 0, $scope1_id, "#text/0", $sg__input_items, $sg__input_items, $sg__input_items);
		_html("</ul>");
		$si__input_items && _subscribe($input_items__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "14:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("<span>loading</span>");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("__tests__/template.marko_3*content", (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<em>${_escape(err.message)}${_el_resume($scope3_id, "#text/0", _serialize_guard($scope3_reason, 0))}</em>`);
			_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {}, "__tests__/template.marko", "23:4");
		}, $scope0_id) })
	});
	$si__input_items && writeScope($scope0_id, { "ClosureScopes:input_items": $input_items__closures }, "__tests__/template.marko", 0);
}, 1);
