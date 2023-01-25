import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Avatar from "@mui/material/Avatar";

export const Header = () => {
  return (
    <>
      <Box m={-1} sx={{ mt: -8 }}>
        <img src="/img/banner-full-anapolis.jpg" Width="100%" height="100%" />
      </Box>
      <Box sx={{ mt: -17 }} m={5}>
        <img src="/img/cmtt.png" width="400px" sx={{ mx: 100 }} />
      </Box>
      <Box sx={{ ml: 105, mt: -3.5 }}>
        <Link
          href="https://www.anapolis.go.gov.br/fale-conosco/"
          underline="hover"
          color="#ffff"
          variant="body2"
        >
          {"Fale Conosco"}
        </Link>
      </Box>
      <Box sx={{ ml: 120, mt: -2.3 }}>
        <Link
          href="https://www.anapolis.go.gov.br/ouvidoria-e-atendimento/"
          underline="hover"
          variant="body2"
          color="#ffff"
        >
          Política de Privacidade
        </Link>
      </Box>
      <Box sx={{ ml: 141, mt: -2.4 }}>
        <Link
          href="https://acessoainformacao.anapolis.go.gov.br/cidadao/ouvidoria/denuncia?_ga=2.258066506.1745136886.1674497303-1855585990.1673278129"
          underline="hover"
          variant="body2"
          color="#ffff"
        >
          Ouvidoria Geral
        </Link>
        <Box sx={{ flexGrow: 1, ml: -143, mt: -1, mr: -1 }}>
          <AppBar position="static" sx={{ backgroundColor: blue[800] }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                CMTT
              </Typography>
              <Button color="inherit" variant="body2">
                | Cadastro CMTT
              </Button>
            </Toolbar>
          </AppBar>
          <Avatar sx={{ m: 1, mt: -6.3, ml: 78.2, backgroundColor: blue[800] }}>
            <AssignmentTurnedInIcon />
          </Avatar>
        </Box>
        ;
      </Box>
    </>
  );
};
