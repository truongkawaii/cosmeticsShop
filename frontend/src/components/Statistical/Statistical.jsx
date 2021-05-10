import React, { Fragment } from 'react'

function Statistical() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-xl-12 stretch-card">
          <div className="row flex-grow">
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <h6 className="card-title mb-0">New Customers</h6>
                    <div className="dropdown mb-2">
                      <button className="btn p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm mr-2"></i> <span className="">View</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm mr-2"></i> <span className="">Edit</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm mr-2"></i> <span className="">Delete</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm mr-2"></i> <span className="">Print</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm mr-2"></i> <span className="">Download</span></a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-12 col-xl-5">
                      <h3 className="mb-2">3,897</h3>
                      <div className="d-flex align-items-baseline">
                        <p className="text-success">
                          <span>+3.3%</span>
                          <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-md-12 col-xl-7">
                      <div id="apexChart1" className="mt-md-3 mt-xl-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <h6 className="card-title mb-0">New Orders</h6>
                    <div className="dropdown mb-2">
                      <button className="btn p-0" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm mr-2"></i> <span className="">View</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm mr-2"></i> <span className="">Edit</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm mr-2"></i> <span className="">Delete</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm mr-2"></i> <span className="">Print</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm mr-2"></i> <span className="">Download</span></a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-12 col-xl-5">
                      <h3 className="mb-2">35,084</h3>
                      <div className="d-flex align-items-baseline">
                        <p className="text-danger">
                          <span>-2.8%</span>
                          <i data-feather="arrow-down" className="icon-sm mb-1"></i>
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-md-12 col-xl-7">
                      <div id="apexChart2" className="mt-md-3 mt-xl-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <h6 className="card-title mb-0">Growth</h6>
                    <div className="dropdown mb-2">
                      <button className="btn p-0" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm mr-2"></i> <span className="">View</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm mr-2"></i> <span className="">Edit</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm mr-2"></i> <span className="">Delete</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm mr-2"></i> <span className="">Print</span></a>
                        <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm mr-2"></i> <span className="">Download</span></a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-12 col-xl-5">
                      <h3 className="mb-2">89.87%</h3>
                      <div className="d-flex align-items-baseline">
                        <p className="text-success">
                          <span>+2.8%</span>
                          <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-md-12 col-xl-7">
                      <div id="apexChart3" className="mt-md-3 mt-xl-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Statistical
