import React from 'react';

function ScrollDown() {
  return (
    <div className="container">
      <h3 className="text-center" style={{ marginTop: '50px' }}>
        VEGETABLES
      </h3>
      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src="brinjal.jpg" alt="" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title text-center">Brinjal</h3>
              <p className="card-text text-center">₹ 30.00</p>
              <div className="text-center">
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src="cucumber.jpg" alt="" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title text-center">Cucumber</h3>
              <p className="card-text text-center">₹ 35.00</p>
              <div className="text-center">
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src="chilli.jpg" alt="" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title text-center">Chilli</h3>
              <p className="card-text text-center">₹ 15.00</p>
              <div className="text-center">
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src="garlic.jpg" alt="" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title text-center">Garlic</h3>
              <p className="card-text text-center">₹ 130.00</p>
              <div className="text-center">
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: '50px' }}>
        {/* Repeat for other vegetable cards */}
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src="potato.jpg" alt="" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title text-center">Potato</h3>
              <p className="card-text text-center">₹ 80.00</p>
              <div className="text-center">
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src="carrot.jpg" alt="" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title text-center">Carrot</h3>
              <p className="card-text text-center">₹ 65.50</p>
              <div className="text-center">
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src="tomato.jpg" alt="" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title text-center">Tomato</h3>
              <p className="card-text text-center">₹ 78.00</p>
              <div className="text-center">
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col-md-3 py-3 py-md-0">
          <div className="card">
            <img src="onion.jpg" alt="" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title text-center">Onion</h3>
              <p className="card-text text-center">₹ 120.00</p>
              <div className="text-center">
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollDown;

