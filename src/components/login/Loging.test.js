import Login from "./Login";
import {TextField} from "@material-ui/core";

describe("login component",()=>{

    it("it should render", ()=>{
        const wrapper = shallow(<Login/>);
        expect(wrapper.exist()).toBeTruthy();
    });

    it("give mount component, it should rendered two inputs", ()=>{
        const wrapper = shallow(<Login/>);
        expect(wrapper.find(TextField).length).toEqual(2);
    })
})
