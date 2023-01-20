import React from 'react'
import './App.css';
import Cmtt from './img/cmtt.png';
import Cmtt2 from './img/avenida.jpg';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const schema = yup.object({
  name: yup.string().required("O nome é obrigatorio."),
  email: yup.string().email("Digite um email válido").required("O email é obrigatório."),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos.").required("a senha é obrigatório."),
  confirmPassword: yup.string().required("Confirmar a senha é obrigatório.").oneOf([yup.ref("password")], "As senhas devem ser iguais")
})



function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)});
  
  
  
  function onSubmit(userData){
    console.log(userData)

  }
 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={Cmtt} alt="imagem-logo"/>
      <label>
        Nome Completo:
      <input type="text" {...register("name", { required: true })}/>
       <span>{errors.name?.message}</span>
      </label>

      <label>
        E-mail:
      <input type="text" {...register("email", { required: true })}/>
      
      <span>{errors.email?.message}</span>
      </label>

      <label>
        Senha:
      <input type="password" {...register("password", { required: true })}/>
      
      <span>{errors.password?.message}</span>
      </label>

      <label>
        Confirmar senha:
      <input type="password" {...register("confirmPassword")}/>
     
      <span>{errors.confirmPassword?.message}</span>
      </label>
      <button type="submit">Cadastrar</button>
    </form>
   
    
  );
}

export default App;
