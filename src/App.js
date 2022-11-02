import "./App.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import userData from "./util/data.js";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Button from "react-bootstrap/Button";
import FormModal from "./components/FormModal";

function App() {
  const products = userData;
  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "email",
      text: "Email ID",
      filter: textFilter(),
    },
    {
      dataField: "dob",
      text: "DOB",
    },
    {
      dataField: "company",
      text: "Company",
    },
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "asc",
    },
  ];

  const handleClick = () => {};

  return (
    <>
      <Header />
      <SideNav />
      <div className="App">
        <FormModal />
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          defaultSorted={defaultSorted}
          pagination={paginationFactory()}
          filter={filterFactory()}
        />
      </div>
    </>
  );
}

export default App;
