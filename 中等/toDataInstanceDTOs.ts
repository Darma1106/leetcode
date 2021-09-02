function toDataInstanceDTOs(nodeData: NodeData[], linkData: LinkData[]): DataInstanceDTO[] {
  const a: DataInstanceDTO[] = []
  const tempNodes = JSON.parse(JSON.stringify(nodeData)) as NodeData[]
  linkData.forEach((link) => {
    const fromNode = tempNodes.find((item) => {
      return item.key == link.from
    })
    if (fromNode) {
      fromNode.toId = link.id
    }
    const toNode = tempNodes.find((item) => {
      return item.key == link.to
    })
    if (toNode) {
      toNode.fromId = link.id
    }
    const dataInstanceDto: DataInstanceDTO = {
      fromId: link.from ?? '',
      toolMetasId: link.toolMetasId,
      name: link.name ?? '',
      id: link.id,
      toId: link.to ?? '',
      dataInstanceTypeCode: link.dataInstanceTypeCode
    }
    a.push(dataInstanceDto)
  })

  tempNodes.forEach((node) => {
    const dataInstanceDto: DataInstanceDTO = {
      fromId: node.fromId ?? '',
      toolMetasId: node.toolMetasId,
      name: node.name,
      id: node.key,
      toId: node.toId ?? '',
      dataInstanceTypeCode: node.dataInstanceTypeCode
    }
    a.push(dataInstanceDto)
  })

  return a
}

console.log(
  toDataInstanceDTOs(
    [
      {
        toolMetasId: '3ef1f4cfb549516ddaac0c4d85a3c46b',
        category: 'defaultNode',
        describe: '',
        figure: 'RoundedRectangle',
        key: 'f689732a-dfd8-4f74-8968-3449e5b0c4a3',
        loc: '-17.28125 -325',
        name: '',
        showContext: false,
        speedIndex: '',
        dataInstanceTypeCode: 'TASK'
      },
      {
        toolMetasId: '3ef1f4cfb549516ddaac0c4d85a3c46b',
        category: 'defaultNode',
        describe: '',
        figure: 'RoundedRectangle',
        key: '0dcb9537-6791-498c-9ca7-0972c9890c8a',
        loc: '-17.28125 -210',
        name: '',
        pid: 'f689732a-dfd8-4f74-8968-3449e5b0c4a3',
        showContext: false,
        dataInstanceTypeCode: 'TASK'
      }
    ],
    [
      {
        from: 'f689732a-dfd8-4f74-8968-3449e5b0c4a3',
        id: '4e156300-f021-493d-8690-152dd9cedb44',
        to: '0dcb9537-6791-498c-9ca7-0972c9890c8a',
        toolMetasId: 'b659b75baa2321ea7af0be5ad1dc5aee',
        dataInstanceTypeCode: 'TASK_DECOMPOSITION_LINE'
      }
    ]
  )
)
