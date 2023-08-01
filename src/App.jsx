import { Profile } from './Profile/profile';
import userData from './data/user';

export const App = () => {
    return (
        <>
            <Profile
                username={userData.username}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
            />
        </>
    );
};