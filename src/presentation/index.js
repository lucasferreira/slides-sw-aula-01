/* eslint import/no-webpack-loader-syntax: off */

import React from "react";
import { Appear, Deck, Heading, Image, Slide, Text, List, ListItem } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import CodeSlide from "spectacle-code-slide";
import "normalize.css";

import Age from "./age";

const images = {
  goodWork: require("../assets/good-work.gif"),
  bg: require("../assets/bg.jpg"),
  bgCapa: require("../assets/bg_capa.jpg"),
  bgBurn: require("../assets/bg_burn.jpg"),
  engSimb: require("../assets/eng_simb.png"),
  engSimbWhite: require("../assets/eng_simb_white.png"),
  me: require("../assets/deal_with_it_ok.jpg"),
  wait: require("../assets/wait.gif"),
  criciumaDEV: require("../assets/criciuma_dev.jpg"),
  confusedThickAmerican: require("../assets/ConfusedThickAmerican.gif"),
  fds: require("../assets/fuuucckkdaaaammmsshiiitt.gif"),
  welcomeInternet: require("../assets/welcome_internet.gif"),
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#003958",
    tertiary: "#3787b2",
    quaternary: "#A9A9A9",
    default: "#333",
  },
  {
    primary: "Open Sans",
    secondary: "Anton",
  }
);

const HeadingTitle = ({ children, ...props }) => (
  <Heading textAlign="left" margin="0 0 40px" textFont="secondary" size={3} textColor="secondary" {...props}>
    {children}
  </Heading>
);

export default class Presentation extends React.Component {
  renderSlideCapa() {
    return (
      <Slide bgImage={images.bgCapa}>
        <Heading margin="40px 0 0 520px" textFont="secondary" size={3} caps lineHeight={1} textColor="secondary">
          Soluções WEB
        </Heading>
        <Heading
          textFont="secondary"
          size={5}
          style={{ position: "absolute", bottom: 90, right: 50 }}
          textColor="tertiary">
          Prof. Lucas Ferreira
        </Heading>
      </Slide>
    );
  }
  renderSlideTitulo(title) {
    return (
      <Slide bgColor="secondary">
        <Image src={images.engSimbWhite} width={253} margin="-60px auto 110px" />
        <Heading textFont="secondary" size={1} caps fit lineHeight={1} textColor="primary" style={{ fontWeight: 400 }}>
          {title}
        </Heading>
      </Slide>
    );
  }
  renderSlideTituloImagem(title, img = null) {
    return (
      <Slide bgImage={images.bg} bgPosition="top left">
        <HeadingTitle textAlign="center" size={6} margin="0 auto 36px">
          {title}
        </HeadingTitle>
        {!!img && <Image src={img} width={600} margin="60px auto 0" />}
      </Slide>
    );
  }
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {this.renderSlideCapa()}
        {this.renderSlideTitulo("Apresentação da Disciplina")}
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle>Missão da SATC</HeadingTitle>
          <Text textColor="default" textAlign="left">
            Transformar pessoas e organizações, por meio da educação e de tecnologias inovadoras de qualidade,
            contribuindo para o crescimento sustentável.
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle>Objetivos do Curso</HeadingTitle>
          <Text textColor="default" textAlign="left" textSize={26} style={{ lineHeight: "36px" }}>
            Promover um ensino de qualidade, para que o Engenheiro da Computação adquira as competências técnicas,
            cientificas e profissionais necessárias, dentre elas: sua capacidade de aprender a aprender, competências
            interpessoais como comunicação e colaboração, e ainda, saber empreender e inovar.
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle>Ementa</HeadingTitle>
          <Text textColor="default" textAlign="left" textSize={26} style={{ lineHeight: "36px" }}>
            Conceitos sobre aplicações Web. Desenvolvimento de aplicações Web. Desenvolvimento de interfaces de usuários
            utilizando programação orientada a objetos. Estudo e implementação de novas tecnologias de WEB.
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle>Objetivos de Aprendizagem</HeadingTitle>
          <Text textColor="default" textAlign="left" textSize={26} style={{ lineHeight: "36px" }}>
            Objetiva-se que o acadêmico ao final desta disciplina seja capaz de compreender conceitos fundamentais para
            o desenvolvimento de aplicações web baseadas em padrões dinâmicos. Delinear, especificar e projetar
            necessidades acerca das tecnologias mais adequadas para cada projeto e suas respectivas finalidades.
            Desenvolver e otimizar aplicações interativas por meio de ferramentas e linguagens ricas focadas na
            experiência do usuário através das camadas front e backend.
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle>Metodologia de Ensino</HeadingTitle>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textSize={24} textAlign="left" textColor="default">
                Aula expositiva por meio de slides e vídeos demonstrando teoria, casos de uso e códigos comuns, dando
                ênfase a Aprendizagem Baseada em Problemas e Sala de Aula Invertida
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textSize={24} textAlign="left" textColor="default">
                Aula em laboratório, com finalidade prática para que o aluno possa desenvolver e testar seus próprios
                códigos e projetos WEB
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textSize={24} textAlign="left" textColor="default">
                Exercícios práticos em sala ou para fazer em casa com postagem no ambiente virtual da Faculdade SATC
              </Text>
            </div>
          </Appear>
        </Slide>
        {this.renderSlideTitulo("@lucasferreira")}
        <Slide bgImage={images.bg} bgPosition="top left">
          <Heading size={5} fit textColor="white" bgColor="#000000" margin={30} padding={10}>
            github.com/lucasferreira
          </Heading>
          <Heading size={5} fit textColor="white" bgColor="#1da1f2" margin={30} padding={10}>
            twitter.com/lucasferreira
          </Heading>
          <Heading size={5} fit textColor="white" bgColor="#d82b7d" margin={30} padding={10}>
            instagram.com/lucasferreira
          </Heading>
          <Heading size={5} fit textColor="secondary" bgColor="#E9E9E9" margin={30} padding={10}>
            www.lucasferreira.com
          </Heading>
        </Slide>
        <Slide>
          <Age />
          <Appear>
            <Image src={images.wait} width={575} margin="60px auto 0" />
          </Appear>
        </Slide>
        <CodeSlide
          lang="js"
          transition={[]}
          code={require("!raw-loader!../assets/calcMyAge.example")}
          ranges={[
            { loc: [0, 4] },
            { loc: [10, 45] },
            { loc: [11, 13] },
            { loc: [14, 23] },
            { loc: [17, 18] },
            { loc: [5, 9] },
            { loc: [24, 36] },
            { loc: [37, 44] },
          ]}
        />
        <Slide bgImage={images.bg} bgPosition="top left">
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Programador de Profissão e Paixão
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Há 20 anos na "indústria vital da rede mundial de computadores"
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Especialista em Sistemas Web e Dispositivos Móveis
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Desenvolvimento de Apps, HTML(5), CSS(3), Javascript, React, PHP e MySQL
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Diretor de Desenvolvimento e sócio-fundador da Burn web.studio
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Membro da Organização do Criciúma DEV
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide bgImage={images.bgBurn}>
          <Appear>
            <div style={{ marginTop: "21%" }}>
              <Text textSize={30} textAlign="center" textColor="white">
                A <strong>Burn web.studio</strong> está presente no mercado há quase 15 anos. É uma empresa de
                Comunicação Interativa com foco no Desenvolvimento de Web Sites e Aplicativos, empresariais e pessoais.
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginTop: "5%" }}>
              <Text
                style={{ display: "inline-block", padding: "8px 10px", borderRadius: 8 }}
                textAlign="center"
                textColor="default"
                bgColor="white">
                www.burnweb.com.br
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle textAlign="center">E vocês, quem são?</HeadingTitle>
          <Image src={images.confusedThickAmerican} width={500} margin="60px auto 0" />
        </Slide>
        {this.renderSlideTitulo("Conteúdo Programático")}
        <CodeSlide
          lang="html"
          className="conteudoProgramatico"
          transition={[]}
          showLineNumbers={false}
          code={require("!raw-loader!../assets/conteudoProgramatico.example")}
          ranges={[
            { loc: [0, 20] },
            { loc: [0, 1] },
            { loc: [1, 2] },
            { loc: [2, 3] },
            { loc: [3, 4] },
            { loc: [5, 6] },
            { loc: [6, 7] },
            { loc: [7, 8] },
            { loc: [8, 9] },
            { loc: [9, 10] },
            { loc: [10, 11] },
            { loc: [11, 12] },
            { loc: [12, 13] },
            { loc: [13, 14] },
            { loc: [14, 15] },
            { loc: [15, 16] },
            { loc: [16, 17] },
            { loc: [17, 18] },
            { loc: [18, 19] },
            { loc: [19, 20] },
            { loc: [0, 20] },
          ]}
        />
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle>Metodologia de Avaliação</HeadingTitle>
          <Text textColor="default" textAlign="left" textSize={26} style={{ lineHeight: "36px" }}>
            Avaliações
            <br />
            N1 (N­1) N1 (10,0)
            <br />
            N2 (N­1) N2 (10,0)
            <br />
            N3 - Exercícios ao longo do semestre (10,0)
            <br />
            Projeto 3,0 + 2,0 + 5,0
            <br />
            <strong>Média (N1 + N2 + N3 + Projeto)/4</strong>
          </Text>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle textAlign="center">O Projeto!</HeadingTitle>
          <Image src={images.fds} width={400} margin="60px auto 0" />
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Equipes com 4 alunos <em>(mas uma equipe com 3, porque estamos em 23 alunos matriculados)</em>
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Temas de cunho relevante, visando utilização real e de preferência com impacto social
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Desenvolvimento durante todo o semestre
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Primeira Entrega na <strong>Aula 10</strong> -{" "}
                <em>
                  Levantamento de Necessidades, Objetivos, Solução Proposta, Resultados Almejados e Início do Front-end
                  do Projeto (MVP)
                </em>
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={{ marginBottom: 28 }}>
              <Text textAlign="left" textColor="default">
                Última Entrega na <strong>Aula 19</strong> -{" "}
                <em>Projeto Concluído, Front + Back-end, Funcional (Demonstração)</em>
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle textAlign="center">Mas e essa tal de Internet?</HeadingTitle>
          <Image src={images.welcomeInternet} width={500} margin="60px auto 0" />
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle size={6} margin="0 0 16px">
            Breve História da Internet
          </HeadingTitle>
          <List>
            <Appear>
              <ListItem textSize={24} margin="0 0 16px" style={{ padding: 0, listStyle: "none" }}>
                A internet foi criada em 1969, nos Estados Unidos (Governo). Chamada de ARPANET, tinha como função
                interligar laboratórios de pesquisa
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={24} margin="0 0 16px" style={{ padding: 0, listStyle: "none" }}>
                Naquele ano, um professor da Universidade da Califórnia passou para um amigo em Stanford o primeiro
                e-mail da história
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={24} margin="0 0 16px" style={{ padding: 0, listStyle: "none" }}>
                A partir de 1982, o uso da ARPANET tornou-se maior no âmbito acadêmico{" "}
                <em>(por quase duas décadas, apenas os meios acadêmico e científico usaram)</em>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={24} margin="0 0 16px" style={{ padding: 0, listStyle: "none" }}>
                No Brasil, os primeiros embriões de rede surgiram em 1988 e ligavam universidades do Brasil a
                instituições nos Estados Unidos
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={24} margin="0 0 16px" style={{ padding: 0, listStyle: "none" }}>
                Em março de 1989, Tim Berners-Lee escreveu uma proposta de gerenciamento de informação e descrevia um
                sistema de informação mais elaborado que seria a primeira proposta da World Wide Web (WWW)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={24} margin="0 0 16px" style={{ padding: 0, listStyle: "none" }}>
                Em dezembro de 1990, com a ajuda de Robert Cailliau e um jovem estudante do CERN, implementou a primeira
                comunicação bem-sucedida entre um cliente HTTP e o servidor através da internet
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={24} margin="0 0 16px" style={{ padding: 0, listStyle: "none" }}>
                Em 1992, começaram a surgir diversas empresas provedoras de acesso à internet
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {this.renderSlideTitulo("A Internet como nós conhecemos")}
        {this.renderSlideTituloImagem("NCSA Mosaic (1993)", require("../assets/navegadores/NCSA-Mosaic.png"))}
        {this.renderSlideTituloImagem("Netscape (1994)", require("../assets/navegadores/netscape.jpg"))}
        {this.renderSlideTituloImagem("Internet Explorer (1995)", require("../assets/navegadores/ie2.png"))}
        {this.renderSlideTituloImagem("Mozilla Firefox (2004)", require("../assets/navegadores/firefox.png"))}
        {this.renderSlideTituloImagem("Google Chrome (2008)", require("../assets/navegadores/Google-Chrome.png"))}
        {this.renderSlideTitulo("Evolução dos Sites")}
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle textAlign="center" size={6} margin="0 auto 26px">
            The Project
          </HeadingTitle>
          <Text textAlign="center" textSize={21} margin="0 auto 36px">
            http://info.cern.ch/hypertext/WWW/TheProject.html
          </Text>
          <Image src={require("../assets/sites/theproject.png")} width={600} margin="60px auto 0" />
        </Slide>
        {this.renderSlideTituloImagem("Microsoft (1994)", require("../assets/sites/microsoft.png"))}
        {this.renderSlideTituloImagem("Yahoo (1994)", require("../assets/sites/yahoo.png"))}
        {this.renderSlideTituloImagem("Google (1996)", require("../assets/sites/google.png"))}
        {this.renderSlideTituloImagem("Apple (1997)", require("../assets/sites/apple.png"))}
        {this.renderSlideTituloImagem("Pancho HP (2000)", require("../assets/sites/panchohp.png"))}
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle textAlign="center" size={6} margin="0 auto 26px">
            Sites em Flash
          </HeadingTitle>
          <Image src={require("../assets/flash-logo.png")} width={379} margin="60px auto 0" />
        </Slide>
        {this.renderSlideTituloImagem("Lançamento do iPhone", require("../assets/launch-iphone.jpg"))}
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle size={6} margin="0 0 20px">
            WEB 2.0
          </HeadingTitle>
          <List>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                E considerada a segunda geração de comunidades e serviços, tendo como conceito a "Web enquanto
                plataforma", envolvendo wikis, aplicativos baseados em folksonomia, redes sociais, blogs e Tecnologia da
                Informação.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                Embora o termo tenha uma conotação de uma nova versão para a Web, ele não se refere à atualização nas
                suas especificações técnicas, mas a uma mudança na forma como ela é encarada por usuários e
                desenvolvedores, ou seja, o ambiente de interação e participação que hoje engloba inúmeras linguagens e
                motivações.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                Começaram a desenvolver softwares que são usados pela Internet e vendidos não em pacotes, mas como
                serviços, pagos mensalmente como uma conta de água.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                Além disso, mudou-se a forma de fazer softwares. Para que tudo funcionasse bem na Internet, foi
                necessária a união de várias tecnologias (como AJAX) que tornassem a experiência do usuário mais rica,
                com interfaces rápidas e muito fáceis de usar.
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle size={6} margin="0 0 20px">
            WEB 2.0
          </HeadingTitle>
          <List>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                Aplicações de Internet Rica (RIA)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                Conteúdos produzido pelo próprios internautas, maior interatividade online através de Blogs e sites como
                o Youtube, Flick, etc.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                GMAIL (2004)
                <Image src={require("../assets/sites/gmail.jpg")} width={480} margin="30px auto 0" />
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {this.renderSlideTitulo("E o futuro?")}
        <Slide bgImage={images.bg} bgPosition="top left">
          <List>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                Web 3.0 (hiper-personalização, IA)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                IoT
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                Assistentes de Pessoais e de Voz
                <Image src={require("../assets/amazon_echo.jpg")} width={600} margin="30px auto 0" />
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={21} margin="0 0 20px" style={{ padding: 0, listStyle: "none" }}>
                ... e a sua geladeira com internet!
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgImage={images.bg} bgPosition="top left">
          <HeadingTitle textAlign="center">Obrigado!</HeadingTitle>
          <Image src={images.goodWork} width={500} margin="60px auto 0" />
        </Slide>
      </Deck>
    );
  }
}
