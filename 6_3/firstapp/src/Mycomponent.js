// const Mycomponent = props () => {
//     const {name, children} = props;
//     return <div>안녕하세요 제 이름은 {props.name}입니다 <br />
//     childre 값은 {children} 
//     입니다
//     </div>
// }
const Mycomponent = ({name,Children}) => {
    return (<div>안녕하세요 제 이름은 {name}입니다 <br />
     childre 값은 {children} 
     입니다
     </div>);
}
Mycomponent.defaultProps = {
    name : "기본 이름"
};
export default Mycomponent