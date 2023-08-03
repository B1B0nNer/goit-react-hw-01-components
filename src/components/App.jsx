import { Profile } from './Profile/profile';
import { Statistic } from './Statistics/statistics';
import userData from '../data/user';
import statsData from '../data/data';

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
            <Statistic title="Upload Stats" stats={statsData} />
        </>
    );
};