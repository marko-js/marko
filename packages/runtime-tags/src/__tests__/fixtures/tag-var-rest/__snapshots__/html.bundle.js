// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = {
		a: 1,
		b: 2,
		c: 3
	};
	const { a, ...partialObj } = obj;
	_html(`<div class=obj>${_escape(JSON.stringify(obj))}${_el_resume($scope0_id, "a")}</div><div class=partialObj>${_escape(JSON.stringify(partialObj))}${_el_resume($scope0_id, "b")}</div><div class=a>${_escape(a)}${_el_resume($scope0_id, "c")}</div><div class=b>${_escape(partialObj.b)}${_el_resume($scope0_id, "d")}</div><div class=a>${_escape(partialObj.a === void 0 ? "removed a" : "didn't remove a")}${_el_resume($scope0_id, "e")}</div><button>Update</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
