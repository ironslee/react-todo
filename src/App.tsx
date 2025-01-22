import React from "react";
import { Layout, Typography } from "antd";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";
import { TodoFooter } from "./components/TodoFooter";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh", padding: "20px", width: "100vw" }}>
        <Header
          style={{ textAlign: "center", color: "white", fontSize: "24px" }}
        >
          TODOS
        </Header>
        <Content style={{ margin: "20px auto", maxWidth: "600px" }}>
          <TodoInput />
          <TodoList />
          <TodoFilter />
          <TodoFooter />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <Typography.Link href="https://github.com/ironslee" target="_blank">
            @ironslee
          </Typography.Link>
        </Footer>
      </Layout>
    </>
  );
};

export default App;
