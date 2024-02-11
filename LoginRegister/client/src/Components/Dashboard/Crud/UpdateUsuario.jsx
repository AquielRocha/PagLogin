import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";

function UpdateUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [datanascimento, setDatanascimento] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3002/update/${id}`, {
        nome,
        email,
        datanascimento,
      });

      console.log(response);
      navigate("/usuarios");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="novo">
      <div className="novo-con">
        <form onSubmit={handleSubmit} className="form-cr">
          <h2>Update Usuario</h2>
          <div className="formDiv">
            <label htmlFor="nome">Nome</label>
            <div className="icons">
              <MdDriveFileRenameOutline />
            </div>
            <input
              type="text"
              id="nome"
              placeholder="Insira o nome"
              className="inputDiv"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="formDiv">
            <label htmlFor="email">E-mail</label>
            <div className="icons">
              <IoMdMail />
            </div>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="inputDiv"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

 

          <div className="formDiv">
            <label htmlFor="datanascimento">Data de Nascimento</label>
            <div className="icons">
              <BsCalendarDateFill />
            </div>
            <input
              type="date"
              id="datanascimento"
              className="inputDiv"
              value={datanascimento}
              onChange={(e) => setDatanascimento(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn-crud">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUsuario;
