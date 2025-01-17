import React from "react";
import ReactPlayer from "react-player/youtube";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function index({ data }) {
    return (
        <Col>
            <Card className="h-100">
                <Card.Body className="align-items-center text-center">
                    <ReactPlayer className="w-100  my-2" url={data.video} />
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default index;
