


function Button({children,className,...rest}){
    const newClassName = "border w-24 text-center rounded font-bold border-2 border-black "+ className;
    const AddButtonJSX= <div className={newClassName} {...rest}> {children}</div>;
    return AddButtonJSX;
}

export default Button;