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
      <div className="pt-5 pb-5" style={{ backgroundColor: "#F2F6F9" }}>
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
              <h6 style={{ fontWeight: "700", color: "#3481B9" }}>Home Page</h6>
              <h4 style={{ fontWeight: "700", fontSize: "30px" }}>
                Section {section}
              </h4>
              <p style={{ fontWeight: "400", color: "#808080" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>

              <h5 style={{ fontWeight: "500", fontSize: "20px" }}>Variant</h5>

              <div className="w-100 d-flex flex-column gap-2">
                {components.map((item, index) => (
                  <button
                    key={index}
                    style={{
                      textAlign: "left",
                      border: "none",
                      backgroundColor: "white",
                      padding: "15px",
                      fontWeight: "400",
                      borderRadius: "4px"
                    }}
                    onClick={() => setActiveComponentIndex(index)}
                    onMouseEnter={(e) => {
                      e.target.style.color = "white";
                      e.target.style.backgroundColor = "#3481B9";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#808080";
                      e.target.style.backgroundColor = "white";
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LayoutViewCom;
