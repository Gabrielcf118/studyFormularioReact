import * as React from "react";
import * as yup from "yup";
import { Box, FormControl, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import { ToasterContainer, toast, Toaster } from "react-hot-toast";

const schema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatorio."),
  telefone: yup.number().required(""),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório."),
  genero: yup.string().required(),
  endereco: yup.string().required(),
  cpf: yup.number(15).required("precisa de 15"),
  data: yup.string().required(),
  cidade: yup.string().required(),
});

export const Formulario = () => {
  const [nome, setNome] = React.useState("");
  const [errorNome, setErrorNome] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [errorTelefone, setErrorTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [genero, setGenero] = React.useState("");
  const [errorGenero, setErrorGenero] = React.useState("");
  const [data, setData] = React.useState("");
  const [errorData, setErrorData] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [errorEndereco, setErrorEndereco] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [errorCpf, setErrorCpf] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [errorCidade, setErrorCidade] = React.useState("");

  const onSubmit = () => {
    schema
      .validate(
        { nome, telefone, cpf, genero, email, data, endereco, cidade },
        { abortEarly: false }
      )
      .then((dadosValidados) => {
        console.log(dadosValidados);
      })

      .catch((errors) => {
        console.log(errors);
        errors.inner.forEach((error) => {
          if (error.path === "nome") {
            error.message = "Este campo é obrigatório";
            setErrorNome(error.message);
          } else if (error.path === "telefone") {
            error.message = "Este campo é obrigatório";
            setErrorTelefone(error.message);
          } else if (error.path === "email") {
            error.message = "Este campo é obrigatório";
            setErrorEmail(error.message);
          } else if (error.path === "genero") {
            error.message = "Este campo é obrigatório";
            setErrorGenero(error.message);
          } else if (error.path === "data") {
            error.message = "Este campo é obrigatório";
            toast.error(error.message);
            setErrorData(error.message);
          } else if (error.path === "endereco") {
            error.message = "Este campo é obrigatório";
            setErrorEndereco(error.message);
          } else if (error.path === "cpf") {
            error.message = "Este campo é obrigatório";
            setErrorCpf(error.message);
          } else if (error.path === "cidade") {
            error.message = "Este campo é obrigatório";
            setErrorCidade(error.message);
          }
        });
      });
  };

  return (
    <Container componetn="main" maxWidth="xs">
      <Toaster position="top-center" />
      <form>
        <Box
          component="form"
          Validate
          textAlign="-webkit-center"
          padding="30px"
          sx={{ mt: 10 }}
        >
          <Typography component="h1" variant="h5" sx={{ padding: 3, mt: -10 }}>
            Cadastro
          </Typography>
          <TextField
            value={nome}
            error={errorNome}
            required
            sx={{ width: 190, ml: -0 }}
            id="name"
            label="Nome Completo"
            autoComplete="name"
            autoFocus
            onChange={(e) => setNome(e.target.value)}
            onKeyDown={() => setErrorNome("")}
            helperText={errorNome}
          />
          <TextField
            value={telefone}
            error={errorTelefone}
            margin="normal"
            required
            sx={{ width: 130, ml: 1, mt: -0 }}
            label="Telefone"
            name="telefone"
            autoComplete="telefone"
            onChange={(e) => setTelefone(e.target.value)}
            onKeyDown={() => setErrorTelefone("")}
            helperText={errorTelefone}
          />
          <TextField
            value={cpf}
            error={errorCpf}
            margin="normal"
            required
            sx={{ width: 328, mt: 0.5 }}
            label="CPF"
            name="cpf"
            autoComplete="cpf"
            onChange={(e) => setCpf(e.target.value)}
            onKeyDown={() => setErrorCpf("")}
            helperText={errorCpf}
          />

          <Box width="145px" p="15px" sx={{ ml: 21.5 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Genero</InputLabel>
              <Select
                value={genero}
                error={errorGenero}
                id="demo-simple-select"
                labelId="demo-simple-select-label"
                label="genero"
                required
                name="genero"
                onChange={(e) => setGenero(e.target.value)}
                onKeyDown={() => setErrorGenero("")}
                helperText={errorGenero}
              >
                <MenuItem value="M">Masculino</MenuItem>
                <MenuItem value="F">Feminino</MenuItem>
                <MenuItem value="O">Outros</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Stack component="form" noValidate spacing={3}>
            <TextField
              value={data}
              error={errorData}
              id="date"
              label="Ano de Nascimento"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 175, mt: -8.8, ml: 0.5 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setData(e.target.value)}
              onKeyDown={() => setErrorData("")}
              helperText={errorData}
            />
          </Stack>
          <TextField
            value={email}
            error={errorEmail}
            margin="normal"
            required
            sx={{ width: 330, mt: -0 }}
            label="Email"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={() => setErrorEmail("")}
            helperText={errorEmail}
          />
          <TextField
            value={endereco}
            error={errorEndereco}
            margin="normal"
            required
            sx={{ width: 192, ml: -10.5, mt: 0.5 }}
            label="Endereço"
            name="endereco"
            autoComplete="endereco"
            onChange={(e) => setEndereco(e.target.value)}
            onKeyDown={() => setErrorEndereco("")}
            helperText={errorEndereco}
          />
          <TextField
            value={cidade}
            error={errorCidade}
            margin="normal"
            required
            sx={{ width: 130, mr: -10.4, mt: 0.5, ml: 1 }}
            label="Cidade "
            name="cidade"
            autoComplete="cidade"
            onChange={(e) => setCidade(e.target.value)}
            onKeyDown={() => setErrorCidade("")}
            helperText={errorCidade}
          />

          <Button
            variant="contained"
            disableElevation
            padding="10px"
            sx={{ backgroundColor: "rgb(243, 192, 32)", width: 250 }}
            onClick={onSubmit}
          >
            Finalizar Cadastro
          </Button>
        </Box>
      </form>
    </Container>
  );
};
