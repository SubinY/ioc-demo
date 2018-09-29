// 保存整个应用的services（仅作声明）
window['cache'] = {};

export class SimpleDI {

  // 得到模块的依赖项
  extractArgs(Fn) {
    const regex = /^[^\(]*\(\s*([^\)]*)\)/m,
      args = Fn.toString().match(regex);
    return args[1].split(',');
  }

  // 查找依赖项所对应的对象
  module() {
    const module = {};
    const injector = new CreateInjector(module);
    return {
      injector: injector,
      factory: function (serviceName, fn) { // 名字和函数的对应关系
        module[serviceName.trim()] = injector.invoke(fn);
        return this;
      }
    }
  }
}

// 执行时注入
class CreateInjector {
  simpleDI = new SimpleDI();
  constructor(cache) {
    window['cache'] = Object.assign(cache, window['cache']);
  }
  // 根据要注入的组件实例化所需要的服务
  invoke(fn) {
    const argsString = this.simpleDI.extractArgs(fn);
    let args = [];
    argsString.forEach(name => {
      args.push(window['cache'][name.trim()]);
    })
    return fn.apply(null, args);
  }
}
