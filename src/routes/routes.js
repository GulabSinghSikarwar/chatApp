import { Routes, Route } from 'react-router-dom'
import RoomDetail from '../components/roomDetail';
import MeetingMainContainer from '../components/Screens/MeetingMainContainer/MeetingMainContainer';
const UserRoutes = () => {


    return (
        <div>
            <Routes>
                <Route path={"/home"} element={<RoomDetail />} />
                <Route path='/home/meet/:roomId' element={<MeetingMainContainer />} />



            </Routes>

        </div>
    )
}
export default UserRoutes;

