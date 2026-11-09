// tags/wrapper.marko
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrapper.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let l = [
			{ name: "a" },
			{ name: "b" },
			{ name: "c" }
		];
		let short = false;
		_for_to(short ? 0 : l.length - 1, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "#text/0", l[i].name)}</span>`);
			_scope($scope2_id, { "#LoopKey": i }, "__tests__/template.marko", "4:4", { "#LoopKey": "4:8" });
		}, 0, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		_html(`<button>go</button>${_el_mark($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			l,
			l_length: l?.length,
			short
		}, "__tests__/template.marko", "1:2", {
			l: "2:8",
			l_length: ["l.length", "2:8"],
			short: "3:8"
		});
	}, $scope0_id) });
}, 1);
