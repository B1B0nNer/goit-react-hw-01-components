import { Profile } from './Profile/profile';
import { Statistic } from './Statistics/statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from '../data/user';
import friendsData from '../data/friends.json';
import statsData from '../data/data';
import transactionsData from '../data/transactions.json';

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
            <FriendList friends={friendsData} />
            <TransactionHistory transactions={transactionsData} />
        </>
    );
};