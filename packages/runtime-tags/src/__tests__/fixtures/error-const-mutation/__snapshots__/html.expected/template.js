import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const user = {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  };
  const fullName = user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
  _$.write(`<p>${_$.escapeXML(fullName)}</p>`);
});