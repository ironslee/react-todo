import React from "react";
import { Flex, Layout, Typography } from "antd";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";
import { TodoFooter } from "./components/TodoFooter";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <>
      <Flex
        justify="center"
        align="flex-start"
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: "#f0f2f5",
        }}
      >
        <Flex
          style={{
            boxShadow: "0 2px 8px rgba(4, 3, 3, 0.1)",
            backgroundColor: "#fff",
            width: "fit-content",
          }}
        >
          <Layout style={{ width: "100%" }}>
            <Header
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "24px",
              }}
            >
              TODOS
            </Header>
            <Content
              style={{
                margin: "20px auto",
                maxWidth: "fit-content",
                padding: "0 20px",
              }}
            >
              <TodoInput />
              <TodoList />
              <TodoFilter />
              <TodoFooter />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              <Typography.Link
                href="https://github.com/ironslee"
                target="_blank"
              >
                @ironslee
              </Typography.Link>
            </Footer>
          </Layout>
        </Flex>
      </Flex>
    </>
  );
};

export default App;
