// 这里准备组件相关属性和ts的类型
import { ExtractPropTypes, PropType } from 'vue'
export const iconPrpos = {
  color: String,
  size: [Number, String] as PropType<number | string>,
} as const

export type IconProps = ExtractPropTypes<typeof iconPrpos>
