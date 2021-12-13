export let code = (function (data, root) {
  var obj = {};
  data.forEach((i) => {
    Object.assign((obj[i.id] = obj[i.id] || {}), i);
    obj[i.parent] = obj[i.parent] || {};
    obj[i.parent].children = obj[i.parent].children || [];
    obj[i.parent].children.push(obj[i.id]);
  });
  return obj[root].children;
});
