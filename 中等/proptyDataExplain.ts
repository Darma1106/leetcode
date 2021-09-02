// import { cloneDeep } from 'lodash'
interface ToolProperty {
  attrTypeCode: string
  attrTypeInputType: string
  attrTypeName: string
  attrTypeUnit: string
  dataInstanceTypeCode: string
  defaultValue: string
  selist: string
  sortno: number
}

interface DataInstanceAttrDTO {
  attrCode: string
  attrValue: string
  dataInstanceId: string
  id: string
  sortno: number
}
const acc: ToolProperty[] = [
  {
    dataInstanceTypeCode: 'TASK',
    sortno: 1,
    defaultValue: '',
    selist: '',
    attrTypeName: '名称',
    attrTypeCode: 'NAME',
    attrTypeUnit: '',
    attrTypeInputType: 'INPUT'
  },
  {
    dataInstanceTypeCode: 'TASK',
    sortno: 2,
    defaultValue: '',
    selist: '',
    attrTypeName: '描述',
    attrTypeCode: 'DESCRIBE',
    attrTypeUnit: '',
    attrTypeInputType: 'INPUT'
  },
  {
    dataInstanceTypeCode: 'TASK',
    sortno: 3,
    defaultValue: '',
    selist: '',
    attrTypeName: '时间指标',
    attrTypeCode: 'TIME_INDEX',
    attrTypeUnit: '',
    attrTypeInputType: 'INPUT'
  },
  {
    dataInstanceTypeCode: 'TASK',
    sortno: 4,
    defaultValue: '',
    selist: '',
    attrTypeName: '速度指标',
    attrTypeCode: 'SPEED_INDEX',
    attrTypeUnit: '',
    attrTypeInputType: 'INPUT'
  }
]

function proptyDataExplain(proptyData: ToolProperty[]): any {
  const a: any = {}
  proptyData.forEach((attr) => {
    a[attr.attrTypeCode] = ''
  })
  return a
}

interface LinkData {
  from?: string
  to?: string
  id: string
  toolMetasId: string
  [key: string]: any
}

interface NodeData {
  key: string
  toolMetasId: string
  [key: string]: any
}

interface DataInstanceDTO {
  dataInstanceTypeCode: string
  fromId?: string
  id: string
  toId?: string
  name: string
  toolMetasId: string
}
