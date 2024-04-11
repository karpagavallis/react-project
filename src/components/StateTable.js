import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class StateTable extends Component {
    constructor() {
        super()
        this.state = {
            "data": []
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/Record/")
            .then((res) => res.json())
            .then((data) =>{
                this.setState({
                    "data":data
                })
            })
    }
    render() {

        const recordArr = this.state.data.map(
            (data) => {
                let id = '/users/' + data.id
                return <tr>
                    <td><Link to={id}>{data.id}</Link></td>
                    <td>{data.name}</td>
                    <td>{data.course}</td>
                    <td>{data.salary}</td>
                </tr>
            }
        )
        return <>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Salary</th>
                </tr>
                {recordArr}

            </table>
        </>
    }
}

export default StateTable