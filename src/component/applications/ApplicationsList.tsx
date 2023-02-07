import React from "react";
import { useListOfApplication } from "../../api/costs/hooks";
import RenderCostTable from "../renderCostTable";
import Spinner from "react-bootstrap/Spinner";
const ApplicationsList = ({ applicationName }: { applicationName: string }) => {
  const { data, isLoading } = useListOfApplication(applicationName);
  if (isLoading) {
    return <Spinner animation="grow" variant="primary" />;
  }
  return <RenderCostTable items={data} />;
};

export default ApplicationsList;
