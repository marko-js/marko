// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $b__closures = /* @__PURE__ */ new Set();
	let open = true;
	const b = { value: input.x };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_html(`<i>${_text_mark($scope2_id, "a", JSON.stringify(b), $wg__input_x)}</i>`);
					_subscribe($wi__input_x && $b__closures, _scope($scope2_id, {}), "a0", $wg__input_x);
					return 0;
				}
			}, $scope1_id, "a", 1, 1, 1, "</div>", 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: open,
		g: b,
		i: $wi__input_x && $b__closures
	});
}, 1);
