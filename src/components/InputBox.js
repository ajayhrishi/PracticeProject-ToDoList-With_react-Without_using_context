function InputBox({className,...rest}){

    const UpdatedClassName = "border w-40 text-center rounded font-bold border-2 border-black"+className;

    const InputJSX = <input placeholder="Add Tasks Here" className={UpdatedClassName} {...rest}/>;
    return InputJSX;
}

export default InputBox;