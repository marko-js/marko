// template.marko
async function* stream(items) {
	let tick = 0;
	for (const item of items) yield resolveAfter(item, ++tick);
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $si__input_items = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_await(stream(input.items), (item) => {
		const $scope1_id = _scope_id();
		_html(`<li${_attr("id", item.id)}>${_escape(item.label)}${_el_resume($scope1_id, "b", $sg__input_items)}</li>${_el_resume($scope1_id, "a", $sg__input_items)}`);
		$si__input_items && writeScope($scope1_id, {});
	}, "id", $scope0_id, "a", $sg__input_items, $sg__input_items, $sg__input_items);
	_html("</ul>");
	$si__input_items && writeScope($scope0_id, {});
}, 1);
