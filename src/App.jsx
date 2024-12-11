import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import "./styles.css";
import Footer from "./components/Footer";



function App() {

  return (
    <>
      <Header />
      <Nav />
      <Article
        date="11/12/20"
       title ="Vintage in Vogue" 
        content={`orem ipsum dolor sit, amet consectetur adipisicing elit.Nam dignissimos harum quaerat voluptas sequi debitis nemo doloremque nisi maiores perspiciatis? 
Iusto corporis inventore neque possimus ullam perspiciatis? Rem, minus molestiae!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repudiandae,
             asperiores similique blanditiis molestias tempore dicta, 
            illum aperiam iusto neque odit iure voluptas ipsa quas harum sequi, in eum temporibus.
            rem ipsum dolor sit, amet consectetur adipisicing elit.Nam dignissimos harum quaerat voluptas sequi debitis nemo doloremque nisi maiores perspiciatis? 
            Iusto corporis inventore neque possimus ullam perspiciatis? Rem, minus molestiae!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repudiandae,
             asperiores similique blanditiis molestias tempore dicta, 
            illum aperiam iusto neque odit iure voluptas ipsa quas harum sequi, in eum temporibus.
            rem ipsum dolor sit, amet consectetur adipisicing elit.Nam dignissimos harum quaerat voluptas sequi debitis nemo doloremque nisi maiores perspiciatis? 
            Iusto corporis inventore neque possimus ullam perspiciatis? Rem, minus molestiae!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repudiandae,
             asperiores similique blanditiis molestias tempore dicta, 
            illum aperiam iusto neque odit iure voluptas ipsa quas harum sequi, in eum temporibus.
        `} />
        <Article
        date="11/11/20"
         title="Vintage in Vogue" 
        content={`orem ipsum dolor sit, amet consectetur adipisicing elit.Nam dignissimos harum quaerat voluptas sequi debitis nemo doloremque nisi maiores perspiciatis?
        Iusto corporis inventore neque possimus ullam perspiciatis? Rem, minus molestiae!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repudiandae,
          asperiores similique blanditiis molestias tempore dicta,
        illum aperiam iusto neque odit iure voluptas ipsa quas harum sequi, in eum temporibus.
        rem ipsum dolor sit, amet consectetur adipisicing elit.Nam dignissimos harum quaerat voluptas sequi debitis nemo doloremque nisi maiores perspiciatis?
        Iusto corporis inventore neque possimus ullam perspiciatis? Rem, minus molestiae!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repudiandae,
          asperiores similique blanditiis molestias tempore dicta,
        illum aperiam iusto neque odit iure voluptas ipsa quas harum sequi, in eum temporibus.`} 
        />
        <Footer />

    </>
  );
}

export default App;
