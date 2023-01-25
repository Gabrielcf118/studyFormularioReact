import * as React from "react";
import * as yup from "yup";
import { Box, FormControl, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const schema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatorio."),
  telefone: yup.string().required(""),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório."),
  genero: yup.string().required(),
  endereco: yup.string().required(),
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
  const onSubmit = () => {
    schema
      .validate(
        { nome, telefone, email, genero, data, endereco },
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
            setErrorData(error.message);
          } else if (error.path === "endereco") {
            error.message = "Este campo é obrigatório";
            setErrorEndereco(error.message);
          }
        });
      });
  };

  return (
    <Container componetn="main" maxWidth="xs">
      <form>
        <Box
          component="form"
          Validate
          textAlign="-webkit-center"
          padding="30PX"
        >
          <TextField
            value={nome}
            error={errorNome}
            required
            sx={{ width: 250 }}
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
            sx={{ width: 250 }}
            label="Telefone"
            name="telefone"
            autoComplete="telefone"
            onChange={(e) => setTelefone(e.target.value)}
            onKeyDown={() => setErrorTelefone("")}
            helperText={errorTelefone}
          />
          <TextField
            value={email}
            error={errorEmail}
            margin="normal"
            required
            sx={{ width: 250 }}
            label="Email"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={() => setErrorEmail("")}
            helperText={errorEmail}
          />
          <Box width="250px" p="15px">
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
                <MenuItem value=" "></MenuItem>
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
              sx={{ width: 250, alignSelf: "center" }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setData(e.target.value)}
              onKeyDown={() => setErrorData("")}
              helperText={errorData}
            />
          </Stack>
          <TextField
            value={endereco}
            error={errorEndereco}
            margin="normal"
            required
            sx={{ width: 250 }}
            label="Endereço"
            name="endereco"
            autoComplete="endereco"
            onChange={(e) => setEndereco(e.target.value)}
            onKeyDown={() => setErrorEndereco("")}
            helperText={errorEndereco}
          />
          <Button
            onClick={onSubmit}
            variant="contained"
            disableElevation
            padding="5px"
            sx={{ backgroundColor: "rgb(243, 192, 32)", width: 220 }}
          >
            Finalizar Cadastro
          </Button>
        </Box>
      </form>
    </Container>
  );
};
