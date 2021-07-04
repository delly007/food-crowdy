import { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { productRows } from '../../testData';
import './productList.css';

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
                <div className="productListProduct">
                    <img className="productListAvatar" src={params.row.avatar} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'quantity', headerName: 'Qty', width: 110 },
        {
          field: 'stockDate',
          headerName: 'Stock Date',
          type: 'date',
          width: 160,
        },
        { field: 'category', headerName: 'Category', width: 160 },
        { field: 'status', headerName: 'Status', width: 130 },
        { 
            field: 'action', 
            headerName: 'Action', 
            width: 150 ,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteForeverOutlined className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection />
        </div>
    )
}
