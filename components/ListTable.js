import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';
    

class ListTable extends React.Component  {

    render(){

    const {selectItem, onDelete, data} = this.props


    const columns = [
            {
                title: 'Name',
                dataIndex: 'username',
                key: 'username',
                render: text => <p className = "table-name">{text}</p>,
            },
            {
                title: 'Country',
                dataIndex: 'country',
                key: 'country',
                render: text => <p className = "table-name">{text}</p>,

            },
            {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender',
                render: text => <p className = "table-name">{text}</p>,

                
            },
            {
                title: 'Color',
                key: 'color',
                dataIndex: 'color',
                render: text => <p className = "table-name">{text}</p>,

            },
            {
                title: 'Hobby',
                key: 'hobbies',
                dataIndex: 'hobby',
                render: hobbies => (
                    <>
                        {hobbies.map(hobby => {
                            let color = hobby.length > 5 ? 'green' : 'lightblue'
                            return (
                                <Tag color={color} key={hobby} className ="hobby-tag">
                                    {hobby.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a className = "btn-edit" onClick = {() => selectItem(record)}>Edit</a>
                        <a className = "btn-delete" onClick = {() => onDelete(record.key)}>Delete</a>
                    </Space>
                ),
            },
        ];

        return (
            <Table key={Math.random()} columns={columns} dataSource={data} style={
                {
                    display : 'block',
                    width : '75%',
                    margin : '0 auto',
                    background : 'white',
                    
                }
            } />
        )
    }
    
}

export default ListTable