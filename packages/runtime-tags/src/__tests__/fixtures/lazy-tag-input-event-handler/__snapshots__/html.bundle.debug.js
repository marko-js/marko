// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let data = input.data;
	let verified = "?";
	_html(`<button class=child>child:<!>${_escape(verified)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_input");
	writeScope($scope0_id, {
		input,
		data
	}, "__tests__/child.marko", 0, {
		input: 0,
		data: "6:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let shared = { value: 1 };
	let count = 0;
	_html(`<button class=main>main:<!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	$Child_withLoadAssets({
		data: shared,
		report: _resume(function(o) {
			return o === shared;
		}, "__tests__/template.marko_0/report", $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		shared,
		count
	}, "__tests__/template.marko", 0, {
		shared: "3:6",
		count: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
