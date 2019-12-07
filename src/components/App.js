import React from 'react';
import Profile from './Profile/Profile';
import user from '../db/user.json';
import Statistics from './Statistics/Statistics';
import statsData from '../db/statistical-data.json';
import FriendList from './FriendList/FriendList';
import friends from '../db/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../db/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="File upload" stats={statsData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
