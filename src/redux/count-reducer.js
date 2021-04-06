// reducer要做的是什么?
// 1.它会拿到旧的状态,跟要做的事情,加工处理返回新的状态
// 2.进行状态初始化,第一次,也就是初始化的时候是没有旧状态的,
// redux默认初始化时的状态是undefined,我们可以在这里对初始化时候的值做一定的处理

export default function (preState = 0, action) {
  const { type, data } = action
  console.log(type, data);
  let newState
  switch (type) {
    case 'add':
      newState = preState + data
      break;
    case 'reduce':
      newState = preState - data
      break;
    default:
      newState = preState
      break;
  }
  return newState
}