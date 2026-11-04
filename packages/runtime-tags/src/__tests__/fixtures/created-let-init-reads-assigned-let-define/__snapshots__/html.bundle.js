// template.marko
const WORD = "w";
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			({ content: _content("a0", ({ v, w }) => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<span>${_text_mark($scope2_id, "a", v + w, 0)}</span>`);
			}, $scope1_id) }).content({
				v: y,
				w: WORD
			});
			_html(`<p>${_text_mark($scope1_id, "b", input.a, _write_guard($scope0_reason, 2))}</p><button>${_text_mark($scope1_id, "d", x + input.a)}</button>${_el_mark($scope1_id, "c")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, {
				e: _write_if($scope0_reason, 2) && x,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, { e: input.a });
}, 1);
