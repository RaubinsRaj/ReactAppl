import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClickHandle from './components/ClickHandle';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Table from './components/Table';
import RefsDemo from './components/RefsDemo';
import FrParentInput from './components/FrParentInput';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import ComponentC from './components/contextComponent/ComponentC';
import { UserProvider } from './components/contextComponent/UserContext';
import ContextHookA from './components/contextComponent/ContextHookA';
import React from 'react';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <UserContext.Provider value='Raubins' >
       <ContextHookA />
      </UserContext.Provider> */}
      
      {/* <UserProvider value='Raubins' >
       <ComponentC />
      </UserProvider>
      <ComponentC /> */}
      {/* <User name="Raubins"/>
      <User name= {()=>"Raubins"}/> */}
      {/* <User name= {(isLoggedIn) =>isLoggedIn ? "Raubins" : "Ankita"}/> */}
      {/* <User render= {(isLoggedIn) =>isLoggedIn ? "Raubins" : "Ankita"}/> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <FrParentInput /> */}
      {/* <RefsDemo /> */}
        {/* <Table /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h2 className={styles.success}>Success</h2> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={false} /> */}
       {/* <Greet name="Raubins" heroName="spiderman" />
      <Greet name="Ankita" heroName="WonderWoman">
        <button >Actions</button>
        <button>Delete</button> 
      </Greet> 
      <Message />
      <Counter />
      <Welcome name= "Raj" heroName= "Batman"/> */}
      {/* <FunctionClick />
      <ClickHandle /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
    
    </div>
  );
}

export default App;
