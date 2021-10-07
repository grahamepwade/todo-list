import React, { useState } from 'react'

import { AddItem } from 'Functionality'
import { Header, InputField } from 'Components'


const HomePage = () => {
    const [items, setItems] = useState([])

    const addNewItem = (newItem) => {
        const newList = AddItem(items, newItem)

        setItems(newList)
    }

    return (
        <>
            <Header />
            <InputField />
        </>
    )
}

export default HomePage