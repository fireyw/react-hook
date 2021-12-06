import './App.css';
import Average from "./Average";
import RefSample from "./RefSample";
import Info from "./Info";
import ForwardRef from "./ForwardRef";
import Struct from "./Struct";
function App() {
    let name = 'yw';
    let age = '38';
    let index = 10;
    const data = {
        name: "kim",
        age: "asd@asd.com",
        index: 0
    };
    let test=10;
    return (
        <>
            1<Struct name={data.name} />
            2<Struct {...data}/>
            3<Struct {...{name, age, index}} />
            4<Struct {...{name:data.name, age:age, index:index}} />

        </>
    );
}

export default App;
