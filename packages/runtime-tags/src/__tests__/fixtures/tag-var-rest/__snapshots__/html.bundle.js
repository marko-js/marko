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
	_html(`<div class=obj>${_text_resume($scope0_id, "a", JSON.stringify(obj))}</div><div class=partialObj>${_text_resume($scope0_id, "b", JSON.stringify(partialObj))}</div><div class=a>${_text_resume($scope0_id, "c", a)}</div><div class=b>${_text_resume($scope0_id, "d", partialObj.b)}</div><div class=a>${_text_resume($scope0_id, "e", partialObj.a === void 0 ? "removed a" : "didn't remove a")}</div><button>Update</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
