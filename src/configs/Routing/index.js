import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, StandardMarkup, StandarCreatedMarkup } from '../../pages';
import {Navbar, Sidebar} from '../../components/organism';

const Routing = () => {
    return (
        <BrowserRouter>
            <div className='d-flex' style={{height : '100vh'}}>
                <Sidebar />
                <div className='d-flex flex-column w-100'>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/management-data/standard-markup" element={<StandardMarkup />} />
                        <Route path="/management-data/standard-markup/create-standard-markup" element={<StandarCreatedMarkup />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default Routing