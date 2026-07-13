// tags/render-input.marko
var render_input_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.data.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/my-box.marko
var my_box_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<div");
	_attrs_content(input, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}<button type=button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}<div class=echo>`);
	_if(() => {}, $scope0_id, "c", 1, 1, 1, "</div>");
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		e: input,
		f: show
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	my_box_default({
		class: "x",
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("Body Content");
		}, _scope_id())
	});
}, 1);
