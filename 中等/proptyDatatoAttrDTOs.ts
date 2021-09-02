function proptyDatatoAttrDTOs(dataObject: any): DataInstanceAttrDTO[] {
  const a: DataInstanceAttrDTO[] = []
  dataObject.toolDataAttrVOs.forEach((attr: ToolProperty) => {
    const dto: DataInstanceAttrDTO = {
      attrCode: attr.attrTypeCode,
      id: '',
      sortno: attr.sortno,
      dataInstanceId: dataObject.key,
      attrValue: dataObject[attr.attrTypeCode]
    }
    a.push(dto)
  })
  console.log(a)

  return a
}

proptyDatatoAttrDTOs({
  DESCRIBE: '12',
  NAME: '23',
  SPEED_INDEX: '321',
  TIME_INDEX: '123',
  key: '123123',
  toolDataAttrVOs: [
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
})
