// note.marko
var note_default = _template("__tests__/note.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/note.marko_0");
	_scope($scope0_id, { n }, "__tests__/note.marko", 0, { n: "1:6" });
});

// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $Note_withLoadAssets = withLoadAssets(() => note_default, "__tests__/note.marko", flush, "ready:__tests__/note.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let show = true;
	let T = $Note_withLoadAssets;
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_input_label#0:5/subscribe", $wg__input_label);
	}, $scope0_id) });
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", T, {});
			_scope($scope2_id, {}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		T,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		show: "3:6",
		T: "4:6"
	});
}, 1);
