import React from "react";
import { Button } from "react-bootstrap";

const Square = () => {
  return (
    <>
      <div>
        <div className="row align-items-center">
          <div className="col-sm">
            <h2 className="fs-3 font-Merriwather fw-bold lh-base">
              Ornare ullamcorper feugiat in sagittis trfit cosay
            </h2>
            <p className="fs-6">
              <b>Lorem ipsum dolor sit amet consectetur.</b> Dignissim aliquet
              iaculis eu a turpis tempor. Ultrices sed neque velit ac imperdiet
              vitae enim. Augue vel tellus ut enim interdum tempus neque. In
              vitae pulvinar non pulvinar ut molestie arcu.
            </p>

            <div className="d-flex flex-column mt-4 gap-2 flex-sm-row">
              <Button type="button" className="btn btn-primary fw-bold fs-6 w-100 rounded-1">
                Lorem ipsum dolor sit amet
                <i className="bi bi-arrow-right-short ms-2"></i>
              </Button>
            </div>
          </div>

          <div className="col-sm d-flex flex-column align-items-center position-relative mt-4">
            <p
              className="font-Kalam small text-start align-self-start ms-5"
              style={{width: "200px"}}
            >
              Lacinia viverra tortor augue.
            </p>

            <div className="position-absolute" style={{ top: "10%", right: "20%"}}>
              <svg
                className="position-absolute"
                style={{right: "150"}}
                width="30"
                height="54"
                viewBox="0 0 30 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.755087 0.237249C5.64249 1.13862 15.7625 12.0386 20.1885 20.8783C24.9522 30.4325 26.2007 36.4627 26.1605 49.7963C26.74 49.3929 27.1455 49.0387 27.6123 48.7644C28.1058 48.4696 28.6259 48.1543 29.1808 47.9394C29.3549 47.8903 29.7541 48.134 29.8708 48.3408C29.9875 48.5476 29.926 49.0185 29.7868 49.168C28.5459 50.4189 27.2579 51.6637 25.976 52.8614C25.5644 53.2627 25.073 53.1746 24.6758 52.548C23.21 50.2014 21.7442 47.8548 20.305 45.4877C19.9692 44.941 19.8464 44.2304 19.5742 43.3807C21.161 43.516 21.5213 44.9759 22.2706 45.84C23.0608 46.7574 23.6914 47.7976 24.5594 49.0365C25.1167 45.1339 24.9983 41.4545 24.3823 37.734C22.1886 24.0849 15.7296 13.2078 5.93907 4.55395C4.64922 3.42768 3.31431 2.46316 1.9917 1.40446C1.61907 1.14029 1.30583 0.788089 0.755087 0.237249Z"
                  fill="#1D1D1F"
                />
              </svg>
            </div>

            <div className="d-flex justify-content-center justify-content-sm-end align-items-center gap-2 mt-2">
              <div
                className="bg-body-secondary rounded-3 mt-2"
                style={{width: "200px", height: "200px"}}
              >
                <img
                  className="object-fit-cover rounded-3"
                  style={{width: "100%", height: "100%"}}
                  src="https://cdn.pixabay.com/photo/2021/02/01/18/50/drop-5971598_1280.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Square;
