import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, MasterDataManagement } from '../../pages';
import {Sidebar} from '../../components/organism';

const Routing = () => {
    return (
        <BrowserRouter>
            <div className='d-flex' style={{height : '100vh'}}>
                <Sidebar />
                <div>
                    <nav>tes</nav>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/management-data/standart-markup" element={<MasterDataManagement />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default Routing