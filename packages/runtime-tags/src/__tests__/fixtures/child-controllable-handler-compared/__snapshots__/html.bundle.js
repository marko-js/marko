// tags/counter/index.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button class=add>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b0");
			_script($scope1_id, "b1");
			_scope($scope1_id, {
				c: count,
				d: input.onCount || void 0
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		e: input.onCount,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let last = 0;
	const onCount = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, _write_guard($scope0_reason, 0))}</h1><p>Last ${_text_resume($scope0_id, "b", last, 2)}</p><pre id=log></pre>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			counter_default({ onCount });
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", $wg__input_show, $wg__input_show);
	_html("</main>");
	_scope($scope0_id, { i: $wi__input_show && onCount });
}, 1);
