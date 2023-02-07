import React from "react";
import { Spinner } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useApplication } from "../../api/costs/hooks";
import ApplicationsList from "./ApplicationsList";

const Applications = () => {
  const { data, isLoading } = useApplication();
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }
  return (
    <Accordion defaultActiveKey={["0"]}>
      {data.map((value, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{value}</Accordion.Header>
          <Accordion.Body>
            <ApplicationsList applicationName={value} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Applications;
