import React from "react";
import { Spinner } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useResources } from "../../api/costs/hooks";
import ResourcesList from "./ResourcesList";

const Resources = () => {
  const { data, isLoading } = useResources();
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      {data.map((value, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{value}</Accordion.Header>
          <Accordion.Body>
            <ResourcesList resourceName={value} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Resources;
