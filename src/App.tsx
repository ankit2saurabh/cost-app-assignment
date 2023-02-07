import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import RenderCostTable from "./component/renderCostTable";
import { useAllCost } from "./api/costs/hooks";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Applications from "./component/applications";
import Resources from "./component/resources";
import { Spinner } from "react-bootstrap";

function App() {
  const { data, isLoading } = useAllCost();
  const itemsPerPage = 50;
  const [itemOffset, setItemOffset] = useState(0);
  const [key, setKey] = useState("allCosts");

  // If api call is under processing
  if (isLoading) {
    return <Spinner animation="border" variant="success" />;
  }

  // How many data needs to be shown on UI at once
  const endOffset = itemOffset + itemsPerPage;
  // Slice the data I want to show on UI from Array
  const dataToShow = data.slice(itemOffset, endOffset);
  // How many total no of pages based on data length
  const noOfPage = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handleClick = (event: { selected: number }) => {
    setItemOffset((event.selected * itemsPerPage) % data.length);
  };

  return (
    <div className="container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="allCosts" title="All Costs">
          <RenderCostTable items={dataToShow} />
          <div className="float-end">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handleClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={noOfPage}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </Tab>
        <Tab eventKey="applications" title="Costs as per Applications">
          <Applications />
        </Tab>
        <Tab eventKey="resources" title="Costs as per Resources">
          <Resources />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// const App = () => {
//   console.log("Outside useeffect")
//   useEffect(()=>{
//     console.log("Inside useeffect")
//   })
//   return (
//     <div>
//       <h1>With useEffect</h1>
//     </div>
//   )
// }
// export default App;
