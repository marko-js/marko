// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	const attrs = {
		title: input.label,
		onClick: _resume(function() {
			console.log("clicked " + input.label);
		}, "__tests__/template.marko_0/attrs", $scope0_id)
	};
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.label, $wg__input_label)}</p><div`);
	_attrs_content(attrs, "#div/1", $scope0_id, "div");
	_html(`</div>${_el_mark($scope0_id, "#div/1")}`);
	_if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_html(`<button>${_text_mark($scope0_id, "#text/4", count)}</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_attrs#9");
	_scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6",
		"EventAttributes:#div/1": ["...attrs", "4:9"]
	});
}, 1);
