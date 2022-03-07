import React from 'react';
class BMI extends React.Component{
    render(){
    return(
    <div className="container">
            <div className="alert alert-success">
                Ini adalah halaman BMI
                </div>
                <div class="card text-center">
  <div class="card-header">
    <h2 align="center">Body Mass Index</h2>
  </div>
  <div class="card-body">
  <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Berat</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputBerat"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputTinggi"/>
    </div>
  </div>
</form>

  </div>
  
  <div class="card-footer">
  <div className="alert alert-primary">
       <h5>Hitung</h5>
</div>
<div>
<h3>Hasil</h3>
</div>
    
  </div>
  <div className="alert alert-success">
      Anda Kurus
      </div>
</div>
    </div>
    );
    }
}
export default BMI;