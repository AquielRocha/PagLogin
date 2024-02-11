import React from 'react';
import { Link } from 'react-router-dom';
import './Dash.scss'; // Import the SCSS file



import video from '../Dashboard/assets/img.jpeg';
import ass from '../Dashboard/assets/image (8).jpeg';
import ten from '../Dashboard/assets/last.jpeg';
import len from '../Dashboard/assets/image (4).jpeg';
import gen from '../Dashboard/assets/image (7).jpeg';
import fen from '../Dashboard/assets/logo.jpeg';

const Dashboard = () => {


  return (
    <div className="dashboardPage">
      <main>
        <div className="header">
          <h2>Bem-vindo ao seu Dashboard!</h2>
          <p>Explore seus detalhes incríveis:</p>
        </div>

        <div className="dashboardContent">
          
          <div className="dashboardCard">
            <img src={video} alt="Messages Icon" />
            <p>Quantidade de mensagens: 42</p>
          </div>
          <br />
          <div className="dashboardCard">
            <img src={ten} alt="Points Icon" />
            <p>Pontos acumulados: 100</p>
          </div>
         
          <div className="dashboardCard">
            <img src={ass} alt="Another Image" />
            <p>Detalhes personalizados: Adicione seu próprio conteúdo</p>
          </div>
          
          <div className="dashboardCard">
            <img src={len} alt="Another Image" />
            <p>Detalhes personalizados: Adicione seu próprio conteúdo</p>
          </div>  
          
          <div className="dashboardCard">
            <img src={gen} alt="Another Image" />
            <p>Detalhes personalizados: Adicione seu próprio conteúdo</p>
          </div> 
           
           <div className="dashboardCard">
            <img src={fen} alt="Another Image" />
            <p>Detalhes personalizados: Adicione seu próprio conteúdo</p>
          </div>


        </div>


        <Link to="/usuarios">

          <button className="btn"> Acesse o crud aqui</button>
        </Link>
<br /><br /><br />
        <Link to="/">
          <button className="btn">Logout</button>
        </Link>
      </main>
    </div>

    
  );
};

export default Dashboard;
