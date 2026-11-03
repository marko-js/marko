// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_href = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.href)}>${_text_resume($scope0_id, "#text/1", input.label, $wg__input_label)}</a>${_el_resume($scope0_id, "#a/0", $wg__input_href)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const data = $global$1.data;
	let hovered = undefined;
	_html("<ul>");
	_for_of(data.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li${hovered === item.id ? " class=hovered" : ""}>`);
		card_default({
			label: item.id,
			href: link(data, item.id)
		});
		_html(`</li>${_el_resume($scope1_id, "#li/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			item_id: item?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "7:4", { item_id: ["item.id", "7:8"] });
	}, 0, $scope0_id, "#ul/0", 1, 0, 0, 0, 1);
	_html("</ul>");
}, 1);
