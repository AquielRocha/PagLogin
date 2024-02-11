// Usuarios.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/delete/${id}`);
      setUsuarios((prevUsuarios) =>
        prevUsuarios.filter((usuario) => usuario.id !== id)
      );
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div className="novo">
      <div className="novo-con">
        <Link to="/create" className="btn-crud">
          Add +
        </Link>
        <div className="labels">
          <label htmlFor="">Nome</label>
          <label htmlFor="">E-mail</label>
          <label htmlFor="">Data de Nascimento</label>
        </div>
        <table className="form-cr">
          <tbody>
            {usuarios.map((data) => (
              <tr key={data.id}>
                <td>{data.nome}</td>
                <td>{data.email}</td>
                <td>{data.datanascimento}</td>
                <td>
                  <Link to={`/update/${data.id}`} className="btn-crud">
                    Update
                  </Link>
                  <button
                    className="btn-crud"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/dashboard">
        <button className="btn-crud">Voltar</button>
      </Link>
    </div>
  );
}

export default Usuarios;
