// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_href = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.href)}>${_text_resume($scope0_id, "b", input.label, $wg__input_label)}</a>${_el_resume($scope0_id, "a", $wg__input_href)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const data = $global().data;
	let hovered = void 0;
	_html("<ul>");
	_for_of(data.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li${hovered === item.id ? " class=hovered" : ""}>`);
		card_default({
			label: item.id,
			href: link(data, item.id)
		});
		_html(`</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			e: item?.id,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 0, 0, 0, 1);
	_html("</ul>");
}, 1);
