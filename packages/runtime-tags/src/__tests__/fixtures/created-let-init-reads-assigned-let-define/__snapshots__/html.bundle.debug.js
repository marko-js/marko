// template.marko
const WORD = "w";
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			const Body = { content: _content("__tests__/template.marko_2*content", ({ v, w }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__v__OR__w = _write_guard($scope2_reason, 0);
				_html(`<span>${_text_resume($scope2_id, "#text/0", v + w, $wg__v__OR__w)}</span>`);
				_write_if($scope2_reason, 0) && _scope($scope2_id, {
					v: _write_if($scope2_reason, 2) && v,
					w: _write_if($scope2_reason, 1) && w
				}, "__tests__/template.marko", "5:4", {
					v: "5:18",
					w: "5:21"
				});
			}, $scope1_id) };
			Body.content({
				v: y,
				w: WORD
			});
			_html(`<p>${_text_resume($scope1_id, "#text/1", input.a, _write_guard($scope0_reason, 2))}</p><button>${_text_resume($scope1_id, "#text/3", x + input.a)}</button>${_el_resume($scope1_id, "#button/2")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				x: _write_if($scope0_reason, 2) && x,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "2:2", { x: "3:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] });
}, 1);
