import "./App.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";

function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 200,
    },
    {
      id: 2,
      name: "Product 2",
      price: 300,
    },
    {
      id: 3,
      name: "Product 3",
      price: 400,
    },
    {
      id: 4,
      name: "Product 4",
      price: 500,
    },
    {
      id: 5,
      name: "Product 1",
      price: 200,
    },
    {
      id: 6,
      name: "Product 2",
      price: 300,
    },
    {
      id: 7,
      name: "Product 3",
      price: 400,
    },
    {
      id: 8,
      name: "Product 4",
      price: 500,
    },
    {
      id: 9,
      name: "Product 1",
      price: 200,
    },
    {
      id: 10,
      name: "Product 2",
      price: 300,
    },
    {
      id: 11,
      name: "Product 3",
      price: 400,
    },
    {
      id: 12,
      name: "Product 4",
      price: 500,
    },
  ];
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      sort: true,
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];

  const defaultSorted = [
    {
      dataField: "id",
      order: "desc",
    },
  ];

  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory()}
      />
    </div>
  );
}

export default App;
