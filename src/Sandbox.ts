// 构造一个 with 来包裹需要执行的代码，返回 with 代码块的一个函数实例
function withedProxyCode(code: string) {
  code = 'with(globalObj) {' + code + '}'
  // eslint-disable-next-line
  return new Function('globalObj', code)
}

// 可访问全局作用域的白名单列表
const access_white_list = ['Math', 'Date', 'console']

export function createSandBox(init: object) {

  // 执行上下文对象的代理对象
  const ctxProxy = new Proxy({
    ...init
  }, {
    get: (target: any, property: string) => {
      if (access_white_list.includes(property.toString())) { // 在可访问的白名单内，可继续向上查找
        return target.hasOwnProperty(property)
      }

      // if (!target.hasOwnProperty(property)) {
      //   throw new Error(`无效的代码 - ${property.toString()}! 你不能这样做!`)
      // }

      return target[property]
    },
    set: function (target: any, property: string, value: any, receiver: any) {
      if (init.hasOwnProperty(property)) {
        throw new Error(`无效的代码 - ${property.toString()}! 你不能这样做!`)
      }
      target[property] = value;
      return true;
    }
  })

  return function executeSandbox(code: string) {
    console.log(code);
    withedProxyCode(code).call(null, ctxProxy) // 将 this 指向手动构造的全局代理对象
  }
}