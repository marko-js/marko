// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = new Set();
		_await($scope1_id, "#text/0", Promise.resolve(n), (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", item, $wg__input_items)}:${_text_resume($scope2_id, "#text/1", x, 2)}</p>`);
			_subscribe($wi__input_items && $for_content__item__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_item#1:2/subscribe");
		});
		_scope($scope1_id, {
			item,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:item/7": $wi__input_items && $for_content__item__closures
		}, "__tests__/template.marko", "3:2", { item: "3:6" });
	}, 0, $scope0_id, "#text/1", 1, $wg__input_items);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
