import React from "react";
import { useListOfResources } from "../../api/costs/hooks";
import RenderCostTable from "../renderCostTable";
import Spinner from "react-bootstrap/Spinner";
const ResourcesList = ({ resourceName }: { resourceName: string }) => {
  const { data, isLoading } = useListOfResources(resourceName);
  if (isLoading) {
    return <Spinner animation="grow" variant="primary" />;
  }
  return <RenderCostTable items={data} />;
};

export default ResourcesList;
