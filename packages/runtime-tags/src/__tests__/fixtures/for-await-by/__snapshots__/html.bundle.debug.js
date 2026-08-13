// template.marko
async function* stream(items) {
	let tick = 0;
	for (const item of items) {
		yield resolveAfter(item, ++tick);
	}
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0), $si__input_items = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_await(stream(input.items), (item) => {
		const $scope1_id = _scope_id();
		_html(`<li${_attr("id", item.id)}>${_escape(item.label)}${_el_resume($scope1_id, "#text/1", $sg__input_items)}</li>${_el_resume($scope1_id, "#li/0", $sg__input_items)}`);
		$si__input_items && writeScope($scope1_id, {}, "__tests__/template.marko", "11:4");
	}, "id", $scope0_id, "#text/0", $sg__input_items, $sg__input_items, $sg__input_items);
	_html("</ul>");
	$si__input_items && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
