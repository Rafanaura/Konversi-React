import React from 'react';
class Bank extends React.Component{
    render(){
    return(
    <div className="container">
            <div className="alert alert-success">
                Ini adalah halaman bank
                </div>
                <div class="card text-center">
  <div class="card-header bg-info">
    <h2>Cicilan Bank</h2>
  </div>
  <div class="card-body">
  <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Nominal</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputNominal"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Bunga</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputBunga"/>
    </div>
    </div>
    <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Periode</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPeriode"/>
    </div>
  </div>
</form>
  </div>

  <div class="card-footer ">
  <div className="alert alert-primary ">
       <h5>Hitung</h5>
</div>
<div>
<div className="text-muted">
    Rp. 110.000,00
    </div>
</div>
  </div>
  
</div>
    </div>
    );
    }
}
export default Bank;