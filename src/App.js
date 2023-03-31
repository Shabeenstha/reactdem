
import './App.css';
import HelloWorld from './component/HelloWorld';

import Picture from './component/Picture';
import Slider from './component/Slider';
function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<div className='container' >

<HelloWorld/>
<Picture/>
<Slider/>
<div className='cardcontainer'>
<div className="card" >
  <img src={process.env.PUBLIC_URL + '/image1.jpg'}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" >
  <img src={process.env.PUBLIC_URL + '/image1.jpg'}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" >
  <img src={process.env.PUBLIC_URL + '/image1.jpg'}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

  

</div>
<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-primary">
    <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use ></use></svg>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</>

);
}

export default App;
