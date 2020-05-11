import React, { useState, useEffect } from 'react'
import Form from './../components/Form'
import ListTable from '../components/ListTable'
import { Layout } from 'antd'




class Home extends React.Component {

    // const [list, setList] = useState(null);
    // const [selectedItem, setselectedItem] = useState(null);


    constructor(props) {
        super(props)
        this.state = {
            list: [],
            selectedItem: null,
            status : 0
        }
    }

    componentWillMount() {
        if (typeof (Storage) !== "undefined") {
            const data = JSON.parse(localStorage.getItem("LIST")) || []
            this.setState({
                list: data
            })

        }
    }

    onSubmit = objectForm => {

        const { list, status } = this.state

        if(status === 0){
            objectForm.key = Math.random()
            list.push(objectForm)
            // console.log('add new')
        }else{
            const index = this.findIndex(objectForm.key)
            if(index !== -1){
                
                list[index] = objectForm
            }
        }
        this.setState({
            list: list
        })
        // console.log(list)
        localStorage.setItem("LIST", JSON.stringify(list))
    }

    findIndex = (key) => {
        var { list } = this.state
        var result = -1
        list.forEach((item, index) => {
            if (item.key === key) {
                result = index
            }
        })
        return result
    }

    onDelete = key => {
        const { list } = this.state

        const index = this.findIndex(key)
        list.splice(index, 1)
        this.setState({
            list: list
        })
        localStorage.setItem("LIST", JSON.stringify(list));
    }


    setSelectedItem = record => {


        this.setState({
            selectedItem: record,
            status : 1
        })
    }
    setStatus = () => {

    }

    render() {

        const { list, selectedItem, status} = this.state

        return (
            <div>
                <Form onSubmit={this.onSubmit} listItem={selectedItem} itemEditing={this.itemEditing} status = {status}/>
                <ListTable data={list} onDelete={this.onDelete} selectItem={this.setSelectedItem}/>
            </div>
        )
    }

}

export default Home