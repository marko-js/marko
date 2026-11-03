// tags/counter/index.marko
var counter_default = _template("__tests__/tags/counter/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "#text/0", count, 2)}</span><button class=add>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/tags/counter/index.marko_1_input_onCount#0:4");
			_script($scope1_id, "__tests__/tags/counter/index.marko_1");
			_scope($scope1_id, {
				count,
				"TagVariableChange:count": input.onCount || void 0
			}, "__tests__/tags/counter/index.marko", "2:2", {
				count: "3:8",
				"TagVariableChange:count": ["countChange", "3:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/counter/index.marko_0");
	_scope($scope0_id, {
		input_onCount: input.onCount,
		open
	}, "__tests__/tags/counter/index.marko", 0, {
		input_onCount: ["input.onCount"],
		open: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let last = 0;
	const onCount = _resume((next) => {
		last = next;
	}, "__tests__/template.marko_0/onCount", $scope0_id);
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, _write_guard($scope0_reason, 0))}</h1><p>Last ${_text_resume($scope0_id, "#text/1", last, 2)}</p><pre id=log></pre>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			counter_default({ onCount });
			$wi__input_show && _scope($scope1_id, {}, "__tests__/template.marko", "9:4");
			return 0;
		}
	}, $scope0_id, "#text/2", $wg__input_show, $wg__input_show);
	_html("</main>");
	_scope($scope0_id, { onCount: $wi__input_show && onCount }, "__tests__/template.marko", 0, { onCount: "2:8" });
}, 1);
