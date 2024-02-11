import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { BsCalendarDateFill } from "react-icons/bs";


function CreateUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [datanascimento, setDatanascimento] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3002/create", { nome, email, datanascimento })
      .then((res) => {
        console.log(res);
        navigate("/usuarios");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="novo">
      <div className="novo-con">
        <form onSubmit={handleSubmit} className="form-cr">
          <h2>Add Usuario</h2>
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
              onChange={(e) => setDatanascimento(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn-crud">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUsuario;
