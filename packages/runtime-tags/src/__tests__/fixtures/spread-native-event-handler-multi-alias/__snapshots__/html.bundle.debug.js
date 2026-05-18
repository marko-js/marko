// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=el></div>");
	const MyButton = { content: _content("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<button");
		_attrs_partial_content(input, { "on-click": 1 }, "#button/0", $scope1_id, "button");
		_html(`</button>${_el_resume($scope1_id, "#button/0")} `);
		_script($scope1_id, "__tests__/template.marko_1_input");
		_script($scope1_id, "__tests__/template.marko_1_input_onClick");
		writeScope($scope1_id, {
			input,
			input_onClick: input.onClick
		}, "__tests__/template.marko", "2:2", {
			input: "2:18",
			input_onClick: ["input.onClick", "2:18"]
		});
	}) };
	MyButton.content({
		"on-click": _resume(function() {
			throw new Error("Should never be called.");
		}, "__tests__/template.marko_0/onclick"),
		onClick: _resume(function() {
			document.getElementById("el").textContent += "[onClick(parent)]";
		}, "__tests__/template.marko_0/onClick"),
		content: _content_resume("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("Click Me");
		}, $scope0_id)
	});
}, 1);
