// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let data = input.data;
	_html(`<button class=child>child:<!>${_escape("?")}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: input,
		f: data
	});
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let shared = { value: 1 };
	let count = 0;
	_html(`<button class=main>main:<!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	$Child_withLoadAssets({
		data: shared,
		report: _resume(function(o) {
			return o === shared;
		}, "b0", $scope0_id)
	});
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		e: shared,
		f: count
	});
	_resume_branch($scope0_id);
}, 1);
