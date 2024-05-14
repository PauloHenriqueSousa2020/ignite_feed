// libs
import { ThemeProvider } from "styled-components"

// components
import { Header, Post, Sidebar } from "./components"

// styles
import * as S from "./styles";
import theme from "./styles/theme"
import { GlobalStyle } from "./styles/global"

function App() {
  const data = [
    {
      id: 1,
      name: "Paulo Henrique",
      avatarUrl: "https://github.com/PauloHenriqueSousa2020.png",
      role: "Web Developer",
      dateTime: "2024-05-11 20:19",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod aperiam saepe sint eveniet quo consequatur nobis? Inventore ut, laboriosam explicabo dolor ipsa soluta sunt laborum sapiente voluptatum aut deserunt.",
      comments: [
        {
          name: "Bianca Peçanha",
          avatarUrl: "https://media.licdn.com/dms/image/D4D03AQE1uaWs2MLMRw/profile-displayphoto-shrink_800_800/0/1692664196186?e=1721260800&v=beta&t=AKBmvQjCkXeCggJ4x9_I1k6FdJXLqSdKA8JWYNl0xX4",
          dateTime: "2024-05-12 22:56",
          comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, tenetur nulla dignissimos earum tempore eos ratione iste eius commodi cum rerum, impedit quasi quas odio cumque consequuntur exercitationem distinctio quia."
        }
      ]
    },
    {
      id: 2,
      name: "Bianca Peçanha",
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQE1uaWs2MLMRw/profile-displayphoto-shrink_800_800/0/1692664196186?e=1721260800&v=beta&t=AKBmvQjCkXeCggJ4x9_I1k6FdJXLqSdKA8JWYNl0xX4",
      role: "Electrical Engineer",
      dateTime: "2024-05-12 14:37",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, non vero earum minus possimus aliquam aspernatur in, quos consectetur quisquam expedita quidem quis hic omnis delectus quasi. Maxime, vel dignissimos?",
      comments: [
        {
          name: "Paulo Henrique",
          avatarUrl: "https://github.com/PauloHenriqueSousa2020.png",
          dateTime: "2024-05-12 22:56",
          comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste itaque ipsa doloribus deleniti cumque, unde laudantium, animi sed voluptatum dolorum id asperiores beatae odio minima ullam. Quidem sed illo tempora."
        }
      ]
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <S.Container>
        <Sidebar />
        <main>
          {data.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </S.Container>
    </ThemeProvider>
  )
}

export default App
