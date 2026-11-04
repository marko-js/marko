// tags/item.marko
var item_default = _template("__tests__/tags/item.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "#text/0", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/item.marko", 0);
});

// tags/frame.marko
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.item;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}<section>`);
	_dynamic_tag($scope0_id, "#text/1", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "__tests__/tags/frame.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		T: _write_if($scope0_reason, 0) && T
	}, "__tests__/tags/frame.marko", 0, {
		input_label: ["input.label"],
		T: "1:6"
	});
});

// template.marko
function pick(framed) {
	return framed ? frame_default : null;
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_framed__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", pick(input.framed), {
		item: item_default,
		label: input.label
	}, 0, 0, $wg__input_framed__OR__input_label);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_framed: _write_if($scope0_reason, 2) && input.framed,
		input_label: _write_if($scope0_reason, 1) && input.label
	}, "__tests__/template.marko", 0, {
		input_framed: ["input.framed"],
		input_label: ["input.label"]
	});
}, 1);
