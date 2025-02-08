import TableAccount from './../components/TableAccount';
import mainLayoutStyle from '../styles/main-layout.module.css';
import Logger from '../components/Logger';

const MainLayout: React.FC = () => {
    return (
        <div className={mainLayoutStyle.wrapper}>
            <div className={mainLayoutStyle.flex}>
                <div className={mainLayoutStyle.wrapper}>
                    <TableAccount />
                </div>

                <div className={mainLayoutStyle.wrapper + " " + mainLayoutStyle.w_20}>
                    <button>Select all</button>
                    <button>Join server</button>
                    <button>Hop server</button>
                    <button>Add account</button>
                    <button>Import account</button>
                </div>
            </div>

            <div className={mainLayoutStyle.wrapper}>
                <Logger />
            </div>
        </div>)
}

export default MainLayout