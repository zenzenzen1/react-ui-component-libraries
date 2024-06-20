import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Tag } from 'primereact/tag'
import React from 'react'

// name, country, agent, status
const data = [
    {
        name: "James Butt",
        country: "United States",
        agent: "Ioni Bowcher",
        status: "unqualified",
    },
    {
        name: "Josephine Darakjy",
        country: "Egypt",
        agent: "Amy Elsner",
        status: "negotiation",
    },
    {
        name: "Art Venere",
        country: "Japan",
        agent: "Asiya Javayant",
        status: "qualified",
    },
    {
        name: "Lenna Paprocki",
        country: "Slovenia",
        agent: "Ivan Magalhaes",
        status: "new",
    }
]

const Header = () => {
    return (
        <div>
            <h2>Table Demo</h2>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <h2>Table Footer</h2>
        </div>
    )
}

const statusField = (rowData) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
}
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
const TableDemo = () => {
    console.log('TableDemo');
    
    return (
        <div className='card'>
            <h2 className=''>Table Demo</h2>
            <DataTable value={data} showGridlines={true} size='small' header={Header} footer={Footer} tableStyle={{ minWidth: '50rem' }}
                resizableColumns columnResizeMode='expand' reorderableColumns onColumnResizerDoubleClick={(e) => console.log(e)} onColumnResizerClick={(e) => console.log(e)}
                
            >
                <Column field="name" header="Name"></Column>
                <Column field="country" header="Country"></Column>
                <Column field="agent" header="Agent"></Column>
                <Column field="status" header="Status" body={statusField}></Column>
            </DataTable>
        </div>
    )
}

export default TableDemo
