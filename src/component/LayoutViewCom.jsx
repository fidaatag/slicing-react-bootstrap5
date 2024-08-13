import React, { useState } from "react";
import { Button, ButtonGroup, Container, Navbar } from "react-bootstrap";
import OffcanvasExample from "./view/ViewNavbar";

const LayoutViewCom = ({ components, section }) => {

  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  const renderActiveComponent = () => {
    const ActiveComponent = components[activeComponentIndex].component;
    return ActiveComponent ? <ActiveComponent /> : null;
  };

  return (
    <>
      <div className="bg-primary-subtle pt-5 pb-5">
        <Container>
          <div className="row justify-content-between">
            {/* view layout */}
            <div className="col-12 col-sm-5 d-flex justify-content-center">
              <div className="bg-success">
                <div
                  className="bg-light position-relative"
                  style={{ width: "400px" }}
                >
                  <OffcanvasExample />
                  <div
                    className="ps-4 pe-4 pb-4"
                    style={{ paddingTop: "70px" }}
                  >
                    {renderActiveComponent()}
                  </div>
                </div>
              </div>
            </div>

            {/* button */}
            <div className="col-12 col-sm-5 order-first order-sm-last mt-5">
              <h6>Home Page</h6>
              <h4>Section {section}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>

              <h5>Variant</h5>

              <ButtonGroup vertical className="w-100">
                {components.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    style={{textAlign: "left"}}
                    onClick={() => setActiveComponentIndex(index)}
                  >
                    {item.label}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LayoutViewCom;
