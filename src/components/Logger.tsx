import loggerStyle from '../styles/logger.module.css'

const Logger : React.FC = ()=>{
    return (<div className={`${loggerStyle.container}`}>
        <ul>
            <li>[LOG] [2020-02-01 05:10:12PM]: Đăng nhập thành công vào tài khoản iiihuy10</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>)
}

export default Logger