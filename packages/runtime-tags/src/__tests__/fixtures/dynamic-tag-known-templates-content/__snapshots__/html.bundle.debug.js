// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_text = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "#text/0", input.text, $sg__input_text));
			_scope($scope1_id, {}, "__tests__/tags/label.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/tags/label.marko_0");
	_scope($scope0_id, {
		input_text: input.text,
		open
	}, "__tests__/tags/label.marko", 0, {
		input_text: ["input.text"],
		open: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let useCard = false;
	_html(`<button id=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", useCard ? card_default : label_default, { text: "first" }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("first body");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "#text/2", useCard ? label_default : card_default, { text: "second" }, _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("second body");
	}, $scope0_id));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { useCard }, "__tests__/template.marko", 0, { useCard: "6:6" });
}, 1);
