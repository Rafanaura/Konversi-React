import React from 'react';
class PPN extends React.Component{
    render(){
    return(
    <div className="container">
            <div className="alert alert-success">
                Ini adalah halaman PPN
                </div>
                <div class="card text-center">
  <div class="card-header bg-danger text-white">
    <h2>Hitung Harga Akhir</h2>
  </div>
  <div class="card-body">
  <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Harga Awal</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputNominal"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">PPN</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputBunga"/>
    </div>
    </div>
    <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Diskon</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputPeriode"/>
    </div>
  </div>
</form>
  </div>

  <div class="card-footer ">
  <div className="alert alert-primary bg-primary text-white">
       <h5>Hitung</h5>
</div>
<div>
Harga Akhir
</div>
<div>
<div className="alert alert-secondary text-muted">
    Rp. 10800000,00
    </div>
</div>
  </div>
  
</div>
    </div>
    );
    }
}
export default PPN;