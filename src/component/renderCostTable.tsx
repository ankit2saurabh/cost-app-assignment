import React from "react";
import { IRowData } from "../api/costs/type";

const RenderCostTable = ({ items }: { items: IRowData[] }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">ConsumedQuantity</th>
          <th scope="col">Cost</th>
          <th scope="col">Date</th>
          <th scope="col">Location</th>
          <th scope="col">ServiceName</th>
          <th scope="col">Tags (Environment)</th>
          <th scope="col">UnitOfMeasure</th>
        </tr>
      </thead>
      <tbody>
        {items.map((value, index) => (
          <tr key={`index-${index}`}>
            <th scope={index === 0 ? "row" : ""}>{index + 1}</th>
            <td>{value.ConsumedQuantity}</td>
            <td>{value.Cost}</td>
            <td>{value.Date}</td>
            <td>{value.Location}</td>
            <td>{value.ServiceName}</td>
            <td>{value.Tags.environment}</td>
            <td>{value.UnitOfMeasure}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(RenderCostTable);
