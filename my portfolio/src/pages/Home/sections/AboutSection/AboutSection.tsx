import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {
  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const skillsSet = [
    "Javascript",
    "Typescript",
    "React",
    "Git",
    "HTML",
    "CSS",
    "Material UI",
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">
            About me
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          pb={3}
        >
          <Grid item xs={9} md={2.5}>
            <AnimationComponent moveDirection="right">
              <StyledCard variant="outlined">
                <WorkspacePremiumIcon />
                <Typography textAlign="center" fontWeight={700}>
                  Experience
                </Typography>
                <Typography textAlign="center">1+ years</Typography>
                <Typography textAlign="center">Full Stack Developer</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
          <Grid item xs={9} md={2.5}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={700}>
                  Education
                </Typography>
                <Typography textAlign="center">technologist</Typography>
                <Typography textAlign="center">
                  Systems Analysis and Development
                </Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>
        <Box pb={1}>
          <Typography>
            Desenvolvedor Full Stack, React, Node.js, TypeScript, Vue.js,
            JavaScript Apaixonado por transformar ideias em soluções digitais
            escaláveis, atuo como desenvolvedor full stack com experiência
            sólida. Domino frameworks modernos como React e Vue.js, além de
            construir APIs robustas com Node.js e TypeScript. Tenho como foco a
            criação de interfaces intuitivas, código limpo e performance
            otimizada. 🚀 Já participei de projetos e aplicações, sempre
            buscando inovação, colaboração e excelência técnica. Estou em
            constante evolução, acompanhando as tendências do ecossistema e
            contribuindo com boas práticas de desenvolvimento.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            Skills
          </Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill, index) => (
              <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutSection;
