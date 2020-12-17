export const findContact = (id:number, state: any) => {
  return state.contacts.list.dataList.find((item:any) => item.enqId === id)
}