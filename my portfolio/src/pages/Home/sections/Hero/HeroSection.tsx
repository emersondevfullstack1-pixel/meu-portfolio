import { Box, styled } from "@mui/material";
import Avatar from "../../../../assets/images/Avatar.png";
import { Container, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Grid } from "@mui/material";
import StyledButton from "../../../../components/Styledbutton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile e acima
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      //=> tablet e acima
      paddingTop: "0",
    },
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position={"relative"}>
                <Box position={"absolute"} width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position={"relative"} textAlign={"center"}>
                  <StyledImage src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Emerson Silva
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
                pb={2}
              >
                Full Stack Developer
              </Typography>
              <Grid
                container
                display={"flex"}
                justifyContent={"center"}
                spacing={3}
                pb={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <StyledButton
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "public/CV/emerson_CV.pdf"; // caminho do seu arquivo
                      link.download = "Emerson_CV.pdf"; // nome do arquivo ao baixar
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <DownloadIcon />
                    <Typography>DOWNLOAD CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <StyledButton
                    onClick={() =>
                      window.open("https://wa.me/5583987774076", "_blank")
                    }
                  >
                    <WhatsAppIcon />
                    <Typography>CONTACT ME</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};
export default Hero;
