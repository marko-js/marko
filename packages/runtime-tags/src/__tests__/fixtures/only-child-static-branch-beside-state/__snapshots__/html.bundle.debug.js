// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", count)}</span>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html(`<ul${_attr_class(`c${count}`)}>`);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_resume($scope2_id, "#text/0", item, _write_guard($scope0_reason, 1))}:${_text_resume($scope2_id, "#text/1", count, 2)}</li>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "6:4");
	}, 0, $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_html(`<p${_attr_class(`c${count}`)}>`);
	const $show = input.show;
	_show_start($show, 0);
	_html(`<b>${_text_resume($scope0_id, "#text/3", count)}</b>`);
	_show_end($scope0_id, "#p/2", $show, 1, 1, "</p>", 1);
	_for_until(count, 0, 1, (x) => {
		const $scope3_id = _scope_id();
		_html("x");
		_scope($scope3_id, {}, "__tests__/template.marko", "11:2");
	}, 0, $scope0_id, "#text/4");
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
