import React from 'react';
import {Layout, Menu, Table, Space, Tag,Modal, Alert, Select as Selector, Popconfirm, message, Button} from 'antd';
import 'antd/es/table/style/css'
import 'antd/es/tag/style/css'
import 'antd/es/space/style/css'
import 'antd/es/layout/style/css'
import 'antd/es/menu/style/css'
import 'antd/es/popconfirm/style/css'
import 'antd/es/message/style/css'
import 'antd/es/alert/style/css'
import 'antd/es/select/style/css'
import 'antd/es/icon/style/css'
import 'antd/es/modal/style/css'
import './index.scss';
import {
    LeftOutlined
} from '@ant-design/icons';
import ExportJsonExcel from 'js-export-excel';


const {Option} = Selector

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '学习序列',
        dataIndex: 'order',
        key: 'order',
    },
    {
        title: '学习组别',
        key: 'table',
        dataIndex: 'table',

    },
    {
        title: '学习时长(s)',
        key: 'time',
        dataIndex: 'time',

    },
];

const data = [
    {
        // key: '1',
        index: '1',
        name: '苏亚鹏',
        table: "观看组",
        order: [0,1,2,3,4,5,6,7,8,9],
        time: "600"
    },
    {
        // key: '2',
        index: '1',
        name: '苏亚鹏',
        table: "观看组",
        order: [0,1,2,3,4,5,6,7,8,9],
        time: "600"
    },
    {
        // key: '3',
        index: '1',
        name: '苏亚鹏',
        table: "观看组",
        order: [0,1,2,3,4,5,6,7,8,9],
        time: "600"
    },

];

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: [],
            id: 0,
            alert: false,
            errorMessage: '',
            confirm: false
        };
    }


    componentDidMount() {
        // this.getContent("student")
        this.setState({
            data: JSON.parse(localStorage.getItem("records"))
        })
    }

    download = () => {
        let now = new Date()
        let excelArray = this.state.data
        let convertArray = excelArray.map(e=> {return{
            "序号": e.index,
            "姓名": e.name,
            "学习序列": e.order,
            "学习组别": e.table,
            "学习时长(s)": e.time
        }})
        let option = {}
        option.fileName = '学习记录表' + now.toLocaleDateString() + '-' + now.toLocaleTimeString()
        option.datas = [
            {
                sheetData: convertArray,
                sheetName: '学习记录表',
                sheetFilter: ['序号', '姓名', '学习序列', '学习组别', '学习时长(s)'],
                sheetHeader: ['序号', '姓名', '学习序列', '学习组别', '学习时长(s)']
            }
        ]
        let toExcel = new ExportJsonExcel(option)
        toExcel.saveExcel()
    }


    render() {
        return (
            <div style={{ height: "100%", width: "100%", zIndex: "-100"}}>
                <Button style={{position: 'fixed',left:'3vw',top:'3vh'}} type="primary"  shape="round" size="large" icon={<LeftOutlined />} onClick={() =>window.history.back(-1)}>
                    首页
                </Button>
                <div style={{position: 'fixed',left:'15vw',top:'3vh'}}>学习序列说明：0对应10，即1,2,3,4,5,6,7,8,9,0对应以下单词</div>
                <div style={{position: 'fixed',left:'15vw',top:'6vh'}}>"cross", "cut", "haul", "paint", "peel", "push", "rub", "tear", "write", "close4"</div>
                <Button style={{position: 'fixed',right:'20vw',top:'3vh'}} type="primary"  shape="round" size="large" icon={<LeftOutlined />} onClick={this.download}>
                    导出为Excel
                </Button>
                <Button style={{position: 'fixed',right:'3vw',top:'3vh'}} type="primary"  shape="round" size="large" icon={<LeftOutlined />} onClick={() => {this.setState({confirm: true})}}>
                    清除记录
                </Button>
                <Modal
                    maskClosable={false}
                    title="确定删除记录吗？"
                    visible={this.state.confirm}
                    onOk={() => {
                        localStorage.clear()
                        this.setState({
                            confirm: false,
                            data:  JSON.parse(localStorage.getItem("records")) || []
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            confirm: false
                        })
                    }}
                    centered
                >
                    <div>删除就找不到了，请提前备份。</div>
                </Modal>
                <div style={{position: "fixed", top: "12vh", width: "100%", height: "70vh"}}>
                <Table className="table" columns={columns} dataSource={this.state.data} width={100} pagination={false} scroll={{y: "70vh"}}/>
                </div>
            </div>
        );
    }
}

export default DataTable;
