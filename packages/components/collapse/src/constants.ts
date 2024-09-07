import { type CollapseActiveName, collapseIconPositionTypes } from './collapse'
import type { InjectionKey, Ref } from 'vue'

collapseIconPositionTypes
export interface CollapseContext {
  collapseIconPosition: Ref<typeof collapseIconPositionTypes[number]>
  activeNames: Ref<CollapseActiveName[]>
  handleItemClick: (name: CollapseActiveName) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey')
