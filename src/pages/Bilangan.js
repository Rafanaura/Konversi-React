import React from 'react';
class Bilangan extends React.Component{
    render(){
    return(
    <div className="container">
            <div className="alert alert-success">
                Ini adalah halaman bilangan
                </div>
                <div class="card text-center">
  <div class="card-header bg-danger text-white">
    <h2>Konversi Bilangan Biner</h2>
  </div>
  <div class="card-body">
  <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Biner</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputNominal"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Pilihan Konversi</label>
    <div class="col-sm-10">
    <select class="form-select" aria-label="Default select example">
  <option></option>
  <option value="1">Biner</option>
  <option value="2">Oktal</option>
  <option value="3">Desimal</option>
  <option value="4">Heksadesimal</option>
</select>
</div>
    </div>
    </form>

    </div>
    
 

  <div class="card-footer ">
  <div className="alert alert-primary bg-primary text-white">
       <h5>Convert</h5>
</div>
<div>
Hasil
</div>
<div>
<div className="alert alert-secondary text-muted">
   224
    </div>
</div>
  </div>
  
</div>

<div class="card text-center">
  <div class="card-header bg-danger text-white">
    <h2>Konversi Bilangan Oktal</h2>
  </div>
  <div class="card-body">
  <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Oktal</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputNominal"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Pilihan Konversi</label>
    <div class="col-sm-10">
    <select class="form-select" aria-label="Default select example">
  <option></option>
  <option value="1">Biner</option>
  <option value="2">Oktal</option>
  <option value="3">Desimal</option>
  <option value="4">Heksadesimal</option>
</select>
</div>
    </div>
    </form>

    </div>
    
 

  <div class="card-footer ">
  <div className="alert alert-primary bg-primary text-white">
       <h5>Convert</h5>
</div>
<div>
Hasil
</div>
<div>
<div className="alert alert-secondary text-muted">
   FF5
    </div>
</div>
  </div>
  
</div>

<div class="card text-center">
  <div class="card-header bg-danger text-white">
    <h2>Konversi Bilangan Desimal</h2>
  </div>
  <div class="card-body">
  <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Desimal</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputNominal"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Pilihan Konversi</label>
    <div class="col-sm-10">
    <select class="form-select" aria-label="Default select example">
  <option></option>
  <option value="1">Biner</option>
  <option value="2">Oktal</option>
  <option value="3">Desimal</option>
  <option value="4">Heksadesimal</option>
</select>
</div>
    </div>
    </form>

    </div>
    
 

  <div class="card-footer ">
  <div className="alert alert-primary bg-primary text-white">
       <h5>Convert</h5>
</div>
<div>
Hasil
</div>
<div>
<div className="alert alert-secondary text-muted">
   10011010010
    </div>
</div>
  </div>
  
</div>

<div class="card text-center">
  <div class="card-header bg-danger text-white">
    <h2>Konversi Bilangan Heksadesimal</h2>
  </div>
  <div class="card-body">
  <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Heksadesimal</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputNominal"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Pilihan Konversi</label>
    <div class="col-sm-10">
    <select class="form-select" aria-label="Default select example">
  <option></option>
  <option value="1">Biner</option>
  <option value="2">Oktal</option>
  <option value="3">Desimal</option>
  <option value="4">Heksadesimal</option>
</select>
</div>
    </div>
    </form>

    </div>
    
 

  <div class="card-footer ">
  <div className="alert alert-primary bg-primary text-white">
       <h5>Convert</h5>
</div>
<div>
Hasil
</div>
<div>
<div className="alert alert-secondary text-muted">
   44833
    </div>
</div>
  </div>
  
</div>
    </div>
    );
    }
}
export default Bilangan;