import React from 'react'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'
import SearchList from './SearchList'
import { useSelector } from 'react-redux'

const ContactList = () => {

    const contactList = useSelector(state=>state.contactList)
    const searchName = useSelector(state=>state.searchName)

    //onst result = words.filter(word => word.length > 6);

    let list = contactList.filter((item) => item.name.includes(searchName))
 							// 키워드에 맞는에만 데려와서 넣는다
    console.log('컨택트리스트', contactList)
    //console.log('컨택트리스트 name', contactList.item.name)
    console.log(contactList.includes(searchName))
    console.log('리스트', list)

  return (
    <div>
        <SearchBox />
        {
            list.map((item, index)=>{
                return <SearchList item={item} key={index}/>
            })
        }
        <p>=============</p>
        {
            contactList.map((item, index)=>{
                return <ContactItem item={item} key={index}/>
            })
        }
    </div>
  )
}

export default ContactList