export function Container(props){
    return (
        <div className="container">
            <div>{props.title}</div>
            {props.children}
        </div>
    )
}