import { Box, Button, Text, TextField, Image } from "@skynexui/components";

import { useRouter } from "next/router";
import appConfig from "../config.json";
import React, { useState } from 'react';

function Titulo(argumento) {
  const Tag = argumento.tag || "h1";

  return (
    console.log(argumento.children),
    (
      <>
        {" "}
        <Tag>{argumento.children}()</Tag>
        <style jsx>{`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals["100"]};
          }
        `}</style>
      </>
    )
  );
}

//componente react
// function HomePage() {
//   //jsx
//   return (
//     <div>
//         <GlobalStyle></GlobalStyle>
//       <Titulo tag="h2">Boas vindas!</Titulo>
//       <h2>Discord - Meu</h2>
//     </div>
//   );
// }

// export default HomePage;

export default function PaginaInicial() {
  // const username = "Davi-Fernandes-Pereira";
  const [username, setUsername] = React.useState("Davi-Fernandes-Pereira");
  const roteamento = useRouter();
  const [cor, setCor] = useState('#F00');

  var username2;

  if (username.length > 2) {
    username2 = username;
  }

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: cor,
          backgroundImage:
            "url(https://f001.backblazeb2.com/file/papocine/2011/12/20190104-banner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (event) {
              event.preventDefault();
              console.log("dfs");
              // roteamento.push("/chat?cor=" + cor.replace("#", ""));
              roteamento.push(`/chat?userName=${username}`);
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Boas vindas!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input
             type="text"
             value={username}
             onChange={function (event){
               console.log(event.target.value)
               //ONDE TA O VALOR????
               const valor = event.target.value;
              //troca o valor da var
               setUsername(valor)
             }}>
            </input> */}

            <TextField
              fullWidth
              value={username}
              onChange={function (event) {
                console.log(event.target.value);
                const valor = event.target.value;

                setUsername(valor);
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: cor,
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: cor,
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />

            <TextField
              type="color"
              focused={true}
              label="Escolha a cor padrão"
              fullWidth={true}
              name="cor"
              value={cor}
              onChange={(event) => setCor(event.target.value)}
              styleSheet={{
                marginTop: "10px",
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username2}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username2}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
