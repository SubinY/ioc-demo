import { Component } from '@angular/core';
import { InjectModeService } from './select-inject-mode.service';
import { InjectMode2Service } from './select-inject-mode2.service';

@Component({
  selector: 'providerIn',
  template: `
    <span>{{name}}——service:{{service.serviceMode}}</span>
    <p style="font-weight: 700;">InjectModeService在metedata，注入跟注入器'root'，在AOT编译时性能最好，如果应用中没有用到该服务会摇树优化减少bundle体积，总结：减少包体积，代码阅读性较差</p>
  `
})
export class ProviderInComponent {
  name = 'ProviderIn';

  constructor(public service: InjectModeService) {
  }
}

@Component({
  selector: 'ngModuleProvider',
  template: `
    <span>{{name}}——service2:{{injectMode2.serviceMode2}}</span>
    <p style="font-weight: 700;">在父模块或者其他模块@NgModule.providers注入，这种方式会跟随模块的出现创建只实例化一次且一直存在（因为有懒加载情况），总结：最常见，一般是登录服务等全局服务</p>
  `
})
export class NgModuleProviderComponent {
  name = 'NgModuleProvider';

  constructor(public injectMode2: InjectMode2Service) { }
}

@Component({
  selector: 'viewProvider',
  template: `
    <span>{{name}}——service2:{{injectMode2.serviceMode2}}</span>
    <p style="font-weight: 700;">在组件中meteData通过provider注入，这种方式按需实例化，跟随组件生命周期创建销毁，总结：对比@NgModule.providers，性能更优，能及时释放内存</p>
  `,
  viewProviders: [InjectModeService]
})
export class ViewProviderComponent {
  name = 'ViewProvider';

  constructor(public injectMode2: InjectMode2Service) { }
}
