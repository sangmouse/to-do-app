import React, { useState, useEffect } from 'react'
import Form from './../components/Form'
import ListTable from '../components/ListTable'


class Home extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            list: [],
            taskEditing: null,
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
        }else{
            const index = this.findIndex(objectForm.key)
            list[index] = objectForm

            console.log('update')
        }
        this.setState({
            list : list
        })
        

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

    onUpdate = key => {

        const {list} = this.state
        // console.log(list)
        const index = this.findIndex(key)
        // console.log(index)
        const taskSelected = list[index]
        
        this.setState({
            taskEditing : taskSelected,
            status : 1
        })        
        
    }
   
    render() {

        const { list, taskEditing, status} = this.state

        return (
            <div>
                <Form onSubmit={this.onSubmit} listItem={taskEditing} status = {status}/>
                <ListTable data={list} onDelete={this.onDelete} selectItem={this.onUpdate} taskEditing={taskEditing}/>
            </div>
        )
    }

}

export default Home