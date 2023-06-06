


function Button({children,...rest}){

    const AddButtonJSX= <div className="border w-24 text-center rounded font-bold border-2	border-black" {...rest}> {children}</div>;

    return AddButtonJSX;
}

export default Button;