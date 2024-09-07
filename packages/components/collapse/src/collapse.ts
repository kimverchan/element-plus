import {
  buildProps,
  definePropType,
  isArray,
  isNumber,
  isString,
  mutable,
} from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import type { ExtractPropTypes } from 'vue'
import type { Arrayable } from '@element-plus/utils'

export type CollapseActiveName = string | number
export type CollapseModelValue = Arrayable<CollapseActiveName>
export const collapseIconPositionTypes = ['left', 'right'] as const

export const emitChangeFn = (value: CollapseModelValue) =>
  isNumber(value) || isString(value) || isArray(value)

export const collapseProps = buildProps({
  /**
   * @description whether to activate accordion mode
   */
  accordion: Boolean,
  /**
   * @description currently active panel, the type is `string` in accordion mode, otherwise it is `array`
   */
  modelValue: {
    type: definePropType<CollapseModelValue>([Array, String, Number]),
    default: () => mutable([] as const),
  },
  /**
   * @description collapse icon position of the panel header
   */
  collapseIconPosition: {
    values: collapseIconPositionTypes,
    default: 'right',
  },
} as const)
export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn,
}
export type CollapseEmits = typeof collapseEmits
