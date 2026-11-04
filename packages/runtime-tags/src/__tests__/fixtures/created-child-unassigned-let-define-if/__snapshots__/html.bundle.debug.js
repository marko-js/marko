// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	const Panel = { content: _content("__tests__/tags/card.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html("<p><b>yes</b></p>");
				return 0;
			}
		}, $scope1_id, "#text/0", 0, 0, 0, 0, 1);
	}, $scope0_id) };
	Panel.content({ open: n });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", c)}</button>${_el_mark($scope0_id, "#button/0")}<main>`);
	_dynamic_tag($scope0_id, "#text/2", input.on ? card_default : "div", { n: input.n }, 0, 0, _write_guard($scope0_reason, 0));
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_on: _write_if($scope0_reason, 2) && input.on,
		input_n: _write_if($scope0_reason, 1) && input.n,
		c
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_n: ["input.n"],
		c: "2:6"
	});
}, 1);
