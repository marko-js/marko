module.exports = function invokeLifecycle(component, name, args, method) {
  try {
    return (method || component[name]).apply(component, args);
  } catch (error) {
    throw new Error(
      "Error in " +
        name +
        ' for component "' +
        (component.___type || component.typeName) +
        '" (id: ' +
        component.id +
        ").",
      { cause: error },
    );
  }
};
