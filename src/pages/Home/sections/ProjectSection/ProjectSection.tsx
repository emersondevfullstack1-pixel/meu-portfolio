import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, {
  type ProjectCardProps,
} from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import tasklistImg from "../../../../../public/CV/tasklist.png";
tasklistImg;

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      title: "Lista de tarefas",
      subtitle: "August 2025 - September 2025",
      srcImg: "/CV/tasklist.png",
      description:
        "Lista de tarefas - Este projeto é uma aplicação web simples e funcional de lista de tarefas, desenvolvida com React e Vite, O objetivo é oferecer uma interface intuitiva para que o usuário possa adicionar e visualizar tarefas de forma rápida e eficiente",
      technologies: "REACT, TYPESCRIPT, JAVASCRIPT",
      websiteURL: "https://lista-de-tarefas-gilt-five.vercel.app/",
      codeURL: "https://github.com/emersondevfullstack1-pixel/lista-tarefas",
    },
    {
      title: "Dijuan Construtora",
      subtitle: "November 2025",
      srcImg: "",
      description:
        "Dijuan Construtora - Site institucional responsivo que apresenta os empreendimentos da construtora com foco em qualidade, segurança e modernidade. Desenvolvido para destacar projetos imobiliarios e facilitar o contato com clientes interessados",
      technologies: "React.js, Next.js, Tailwind CSS, Typescript",
      websiteURL: "https://dijuan-construtora.vercel.app/",
      codeURL:
        "https://github.com/emersondevfullstack1-pixel/dijuan-construtora",
    },
    {
      title: "",
      subtitle: "",
      srcImg: "",
      description: "",
      technologies: "",
      websiteURL: "",
      codeURL: "",
    },
    {
      title: "",
      subtitle: "",
      srcImg: "",
      description: "",
      technologies: "",
      websiteURL: "",
      codeURL: "",
    },
  ];

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.contrastText"
          >
            Projects
          </Typography>
        </Box>
        <Grid container spacing={5} pb={3}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <Grid item md={6} key={index}>
              <AnimationComponent
                moveDirection={index % 2 == 0 ? "right" : "left"}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  srcImg={project.srcImg}
                  description={project.description}
                  technologies={project.technologies}
                  websiteURL={project.websiteURL}
                  codeURL={project.codeURL}
                />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
