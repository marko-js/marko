// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [[{ n: 1 }], []];
	let obj = { kept: "k" };
	const [$skipped, ...rest] = list[0];
	const { ignored: $ignored, kept } = obj;
	const [$temp] = list[1];
	const { b: $b, c: $c } = void 0 !== $temp ? $temp : {};
	const c = void 0 !== $c ? $c : "c";
	_html(`<div id=out>${_escape(rest.length)}${_el_resume($scope0_id, "a")}:<!>${_escape(String(kept))}${_el_resume($scope0_id, "b")}:<!>${_escape(c)}${_el_resume($scope0_id, "c")}</div><button id=update>u</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
