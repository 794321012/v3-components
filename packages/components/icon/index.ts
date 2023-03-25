// 用来整合组件的 最终实现导出组件
import { withInstall } from '@hui-zi/utils/with-install'
import _Icon from './src/icon.vue'

const Icon = withInstall(_Icon)
export default Icon // 可以通过app.use使用；也可以通过import 方式单独使用

export * from './src/icon'

// 这里添加的类型 可以在模版中被解析
declare module 'vue' {
  export interface GlobalComponents {
    // 我们的接口制定合并
    ZIcon: typeof Icon
  }
}
